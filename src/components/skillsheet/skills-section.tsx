import {
  frontendSkills,
  backendSkills,
  infraSkills,
  levelLabels,
  type SkillItem,
  type SkillLevel,
} from "@/data/skillsheet";

function SkillBar({ level }: { level: SkillLevel }) {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`レベル ${level} / 5（${levelLabels[level]}）`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-sm transition-colors duration-500 sm:w-5 ${
            i < level ? "bg-[var(--accent)]" : "bg-[var(--ink-faint)]"
          }`}
        />
      ))}
    </div>
  );
}

function SkillGroup({
  title,
  items,
  delayClass,
}: {
  title: string;
  items: SkillItem[];
  delayClass: string;
}) {
  return (
    <div className={`skill-reveal ${delayClass}`}>
      <h3 className="font-display text-xl tracking-wide text-[var(--ink)] sm:text-2xl">
        {title}
      </h3>
      <ul className="mt-5 space-y-4">
        {items.map((skill) => (
          <li
            key={skill.name}
            className="grid gap-3 border-b border-[var(--ink-faint)] pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-medium text-[var(--ink)]">{skill.name}</span>
                  {skill.years ? (
                    <span className="shrink-0 text-xs text-[var(--ink-muted)]">
                      {skill.years}
                    </span>
                  ) : null}
                </div>
                {skill.note ? (
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {skill.note}
                  </p>
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-3 pt-1">
                <SkillBar level={skill.level} />
                <span className="w-10 text-xs text-[var(--ink-muted)]">
                  {levelLabels[skill.level]}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium tracking-[0.28em] text-[var(--accent-deep)] uppercase">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--ink)] sm:text-4xl">
          フロントエンド / バックエンド
        </h2>
        <p className="mt-3 text-[var(--ink-muted)]">
          公開情報・受託案件に加え、継続的な自主練から読み取れる習熟度です。レベルは「基礎〜牽引」の5段階。
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <SkillGroup
          title="フロントエンド"
          items={frontendSkills}
          delayClass="delay-1"
        />
        <SkillGroup
          title="バックエンド"
          items={backendSkills}
          delayClass="delay-2"
        />
      </div>

      <div className="mt-14">
        <SkillGroup
          title="インフラ / 開発基盤"
          items={infraSkills}
          delayClass="delay-3"
        />
      </div>
    </section>
  );
}
