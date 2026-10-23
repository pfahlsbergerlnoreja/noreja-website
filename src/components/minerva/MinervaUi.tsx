import { MessageCircleQuestion } from "lucide-react";

/**
 * Small building blocks shared by the Minerva page and the Minerva Agent
 * Library pages, so the three look like one product section.
 */

/** Brand colours must be written as `hsl(var(--noreja-*) / a)`, see Functionalities.tsx. */
export const MINT = "hsl(var(--noreja-tertiary))";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em]" style={{ color: MINT }}>
    {children}
  </p>
);

/** A question to Minerva, styled as a chat bubble, in the page language's quotation marks. */
export const Prompt = ({ children, language }: { children: React.ReactNode; language: "de" | "en" }) => (
  <p
    className="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-[0.92rem] leading-relaxed text-foreground"
    style={{
      borderColor: "hsl(var(--noreja-main) / 0.35)",
      background: "hsl(var(--noreja-main) / 0.08)",
    }}
  >
    <MessageCircleQuestion className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: MINT }} />
    <span>
      {language === "de" ? "„" : "“"}
      {children}
      {language === "de" ? "“" : "”"}
    </span>
  </p>
);
