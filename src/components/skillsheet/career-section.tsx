import { career } from "@/data/skillsheet";

export function CareerSection() {
  return (
    <section id="career" className="scroll-mt-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium tracking-[0.28em] text-[var(--accent-deep)] uppercase">
          Career
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--ink)] sm:text-4xl">
          職務経歴
        </h2>
        <p className="mt-3 text-[var(--ink-muted)]">
          ライター起点から Web へ転身し、制作会社・フリーランスを経て法人化。企画・デザイン・開発・運用を横断してきました。
        </p>
      </div>

      <ol className="relative space-y-0 border-l border-[var(--ink-line)] pl-6 sm:pl-8">
        {career.map((item, index) => (
          <li
            key={item.period}
            className={`career-item relative pb-10 last:pb-0 delay-${index + 1}`}
          >
            <span
              aria-hidden
              className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2 border-[var(--accent)] bg-[var(--paper)] sm:-left-[2.4rem]"
            />
            <p className="text-xs font-medium tracking-wider text-[var(--accent-deep)]">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-xl text-[var(--ink)] sm:text-2xl">
              {item.title}
              <span className="mx-2 text-[var(--ink-faint)]">/</span>
              <span className="text-[length:0.95em] font-normal text-[var(--ink-muted)]">
                {item.org}
              </span>
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-[var(--ink-muted)]">
              {item.summary}
            </p>
            <ul className="mt-4 max-w-3xl space-y-2">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm leading-relaxed text-[var(--ink)]"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
