import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp, type LoopLedger } from "@/hooks/use-loop-motion";
import { formatEuro } from "@/lib/costOfInaction";
import { platformCopy } from "@/lib/platformLoop";

const MINT = "hsl(var(--noreja-tertiary))";
const DIM = "hsl(var(--muted-foreground))";

/**
 * Centre of the loop ring: how many passes the loop has completed and the
 * potential it has found doing so. Rendered as SVG so it sits inside PhaseRing.
 */
export const LoopLedgerHub = ({ ledger }: { ledger: LoopLedger }) => {
  const { language } = useLanguage();
  const potential = useCountUp(ledger.potential);
  const running = ledger.iterations > 0;

  return (
    <g>
      <text
        x="180"
        y="140"
        textAnchor="middle"
        fill={DIM}
        className="font-mono uppercase"
        style={{ fontSize: "9.5px", letterSpacing: "0.22em" }}
      >
        {platformCopy.ledgerIterations[language]}
      </text>

      <motion.text
        key={ledger.iterations}
        x="180"
        y="171"
        textAnchor="middle"
        fill="hsl(var(--foreground))"
        className="font-bold"
        style={{ fontSize: "30px", letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}
        initial={{ opacity: 0.35, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
      >
        {String(ledger.iterations).padStart(2, "0")}
      </motion.text>

      <line
        x1="132"
        y1="184"
        x2="228"
        y2="184"
        stroke="hsl(var(--border))"
        strokeWidth="1"
      />

      <text
        x="180"
        y="203"
        textAnchor="middle"
        fill={DIM}
        className="font-mono uppercase"
        style={{ fontSize: "9px", letterSpacing: "0.18em" }}
      >
        {platformCopy.ledgerPotential[language]}
      </text>

      <text
        x="180"
        y="230"
        textAnchor="middle"
        fill={running ? MINT : DIM}
        className="font-bold"
        style={{
          fontSize: "23px",
          letterSpacing: "-0.03em",
          fontVariantNumeric: "tabular-nums",
          transition: "fill 0.6s ease",
        }}
      >
        {formatEuro(potential, language)}
      </text>

      {/* The gain from the pass that just finished, floating up and away. */}
      <AnimatePresence>
        {ledger.lastGain !== null && (
          <motion.text
            key={ledger.iterations}
            x="180"
            y="252"
            textAnchor="middle"
            fill={MINT}
            className="font-mono font-semibold"
            style={{ fontSize: "12px", fontVariantNumeric: "tabular-nums" }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: [0, 1, 1, 0], y: [6, 0, -6, -18] }}
            transition={{ duration: 2.4, times: [0, 0.15, 0.6, 1], ease: "easeOut" }}
          >
            +{formatEuro(ledger.lastGain, language)}
          </motion.text>
        )}
      </AnimatePresence>
    </g>
  );
};
