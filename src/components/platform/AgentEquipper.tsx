import { useMemo, useState } from "react";
import { BookOpen, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { agentEquipment, platformCopy } from "@/lib/platformLoop";

/**
 * Lets visitors see that each agent is equipped with customer-specific tools
 * and knowledge bases. Toggling is deliberately local and non-persistent —
 * it exists to make the customising story tangible, not to configure anything.
 */
export const AgentEquipper = () => {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  // Active state per agent, keyed as `${agentIndex}:${column}:${itemIndex}`.
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});

  const config = agentEquipment[current];

  const isOn = (column: "tools" | "knowledge", index: number) => {
    const key = `${current}:${column}:${index}`;
    return overrides[key] ?? config[column][index].on;
  };

  const toggle = (column: "tools" | "knowledge", index: number) => {
    const key = `${current}:${column}:${index}`;
    setOverrides((prev) => ({
      ...prev,
      [key]: !(prev[key] ?? config[column][index].on),
    }));
  };

  const counts = useMemo(() => {
    const count = (column: "tools" | "knowledge") =>
      config[column].reduce((n, _item, i) => (isOn(column, i) ? n + 1 : n), 0);
    return { tools: count("tools"), knowledge: count("knowledge") };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, overrides, config]);

  const summary = platformCopy.equipSummary[language]
    .replace("{agent}", config.agent[language])
    .replace("{t}", String(counts.tools))
    .replace("{k}", String(counts.knowledge));

  const columns = [
    {
      key: "tools" as const,
      icon: Wrench,
      title: platformCopy.equipTools[language],
      items: config.tools,
      addLabel: platformCopy.equipAddTool[language],
    },
    {
      key: "knowledge" as const,
      icon: BookOpen,
      title: platformCopy.equipKnowledge[language],
      items: config.knowledge,
      addLabel: platformCopy.equipAddKb[language],
    },
  ];

  return (
    <div
      className="overflow-hidden rounded-[20px] border bg-card"
      style={{
        borderColor: "hsl(var(--border))",
        boxShadow: "0 34px 80px -46px hsl(var(--noreja-main) / 0.85)",
      }}
    >
      {/* Agent tabs */}
      <div
        role="tablist"
        aria-label={platformCopy.agentsEyebrow[language]}
        className="flex flex-wrap gap-0.5 border-b p-2"
        style={{ background: "hsl(var(--noreja-main) / 0.09)", borderColor: "hsl(var(--border))" }}
      >
        {agentEquipment.map((entry, i) => {
          const on = i === current;
          return (
            <button
              key={entry.agent.en}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setCurrent(i)}
              className="min-w-[130px] flex-auto rounded-[10px] border px-3.5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors"
              style={
                on
                  ? {
                      color: "hsl(var(--noreja-tertiary))",
                      background: "hsl(var(--background))",
                      borderColor: "hsl(var(--noreja-tertiary) / 0.32)",
                    }
                  : { color: "hsl(var(--muted-foreground))", borderColor: "transparent" }
              }
            >
              {entry.agent[language]}
            </button>
          );
        })}
      </div>

      {/* Tools / knowledge columns */}
      <div
        role="tabpanel"
        aria-live="polite"
        className="grid gap-px sm:grid-cols-2"
        style={{ background: "hsl(var(--border))" }}
      >
        {columns.map((column) => {
          const Icon = column.icon;
          return (
            <div key={column.key} className="flex flex-col gap-4 bg-card px-5 py-6">
              <div className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
                <Icon className="h-4 w-4" style={{ color: "hsl(var(--noreja-tertiary))" }} />
                {column.title}
                <span
                  className="ml-auto rounded-full border px-2.5 py-0.5 text-[0.7rem] tabular-nums"
                  style={{
                    color: "hsl(var(--noreja-tertiary))",
                    background: "hsl(var(--noreja-tertiary) / 0.1)",
                    borderColor: "hsl(var(--noreja-tertiary) / 0.28)",
                  }}
                >
                  {counts[column.key]} / {column.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {column.items.map((item, i) => {
                  const on = isOn(column.key, i);
                  return (
                    <button
                      key={item.label.en}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(column.key, i)}
                      className="inline-flex items-center gap-2 rounded-[9px] border px-3 py-2 font-mono text-[0.73rem] transition-colors"
                      style={{
                        color: on ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                        background: on
                          ? "hsl(var(--noreja-tertiary) / 0.07)"
                          : "hsl(var(--background))",
                        borderColor: on
                          ? "hsl(var(--noreja-tertiary) / 0.4)"
                          : "hsl(var(--border))",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: on
                            ? "hsl(var(--noreja-tertiary))"
                            : "hsl(var(--muted-foreground))",
                          boxShadow: on ? "0 0 8px hsl(var(--noreja-tertiary))" : "none",
                        }}
                      />
                      {item.label[language]}
                    </button>
                  );
                })}

                <span
                  className="inline-flex items-center rounded-[9px] border border-dashed px-3 py-2 font-mono text-[0.73rem] text-muted-foreground"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  {column.addLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div
        className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 border-t px-5 py-4 font-mono text-[0.72rem] text-muted-foreground"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--secondary))" }}
      >
        <span>{summary}</span>
        <span className="text-[0.68rem] tracking-[0.05em] opacity-70">
          {platformCopy.equipHint[language]}
        </span>
      </div>
    </div>
  );
};
