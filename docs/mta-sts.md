# MTA-STS for noreja.com

MTA-STS (RFC 8461) tells sending mail servers that inbound mail for noreja.com
must be delivered over a validated TLS connection, which closes the downgrade
attack where an attacker strips STARTTLS in transit.

It has three parts. Two of them live in this repo; the third is DNS and has to
be done in the DNS zone and in Netlify.

## 1. Policy file (done, in this repo)

`public/.well-known/mta-sts.txt`:

```
version: STSv1
mode: enforce
mx: *.mail.protection.outlook.com
max_age: 86400
```

- `mx` matches the current MX record, `noreja-com.mail.protection.outlook.com`
  (Microsoft 365 / Exchange Online). The wildcard is what Microsoft documents,
  so a tenant-side hostname change does not break the policy.
- `max_age` is 86400 (one day) for the rollout: if anything is wrong, the
  policy stops being enforced a day after it is withdrawn. Raise it to 604800
  (one week) once a few weeks have passed without TLS-RPT failure reports.
- The file uses CRLF line endings, as the RFC requires. Keep it that way.
- `netlify.toml` serves it as `text/plain; charset=utf-8`.

## 2. Host (Netlify — one-time setup)

The policy must be reachable at `https://mta-sts.noreja.com/.well-known/mta-sts.txt`,
on that exact hostname and with a valid certificate.

1. Netlify → the site → **Domain management → Add domain alias** →
   `mta-sts.noreja.com`.
2. In DNS, point that name at Netlify — the same target `www.noreja.com`
   already uses:
   `mta-sts.noreja.com. CNAME noreja.netlify.app.`
3. Wait for Netlify to issue the certificate — MTA-STS requires a valid one.

The redirect rules in `netlify.toml` then serve the policy on that host and
send every other path to `https://noreja.com`, so the site is not duplicated
under a second hostname.

## 3. DNS records (to be added in the DNS zone)

```
# Activates the policy. Without this record the file above is ignored.
_mta-sts.noreja.com.   TXT   "v=STSv1; id=20260911000000Z"

# Optional but recommended: reports about failed TLS deliveries.
_smtp._tls.noreja.com. TXT   "v=TLSRPTv1; rua=mailto:info@noreja.com"
```

The `id` is an opaque version string. **Change it every time
`mta-sts.txt` changes** (the convention is the UTC timestamp of the edit,
`YYYYMMDDHHMMSSZ`), otherwise senders keep serving the cached policy until
`max_age` expires.

## Verification

After the DNS records have propagated:

```bash
curl -sS https://mta-sts.noreja.com/.well-known/mta-sts.txt
dig +short TXT _mta-sts.noreja.com
```

Both must answer. External checkers: https://www.hardenize.com/ or
https://mecsa.jrc.ec.europa.eu/ report the policy as it is seen from outside.

## Rollback

Delete the `_mta-sts` TXT record. Senders then stop applying the policy once
their cached copy expires (at most `max_age`). Switching the file to
`mode: testing` also works, but only takes effect for senders that refetch it,
so raise the `id` at the same time.
