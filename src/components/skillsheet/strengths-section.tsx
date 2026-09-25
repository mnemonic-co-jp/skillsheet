import { strengths, learningInterests } from "@/data/skillsheet";

export function StrengthsSection() {
  return (
    <section id="strengths" className="scroll-mt-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium tracking-[0.28em] text-[var(--accent-deep)] uppercase">
          Strengths
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--ink)] sm:text-4xl">
          強みと関心領域
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {strengths.map((item, i) => (
          <article
            key={item.title}
            className={`strength-block delay-${i + 1}`}
          >
            <h3 className="font-display text-xl text-[var(--ink)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 border-t border-[var(--ink-line)] pt-8">
        <h3 className="font-display text-xl text-[var(--ink)]">最近の学習・関心</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {learningInterests.map((item) => (
            <li
              key={item}
              className="text-sm leading-relaxed text-pretty text-[var(--ink-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
