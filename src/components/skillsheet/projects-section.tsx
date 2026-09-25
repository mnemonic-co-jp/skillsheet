import { projects } from "@/data/skillsheet";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-8">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium tracking-[0.28em] text-[var(--accent-deep)] uppercase">
          Projects
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--ink)] sm:text-4xl">
          主な開発実績
        </h2>
        <p className="mt-3 text-[var(--ink-muted)]">
          非公開案件を含む実装実績です。クライアント名は伏せ、領域と技術構成を示しています。
        </p>
      </div>

      <ul className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className={`skill-reveal delay-${(index % 3) + 1} border-b border-[var(--ink-faint)] pb-8`}
          >
            <p className="text-xs tracking-[0.18em] text-[var(--accent-deep)] uppercase">
              {project.role}
            </p>
            <h3 className="mt-2 font-display text-xl text-[var(--ink)] sm:text-2xl">
              {project.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--ink-muted)]">
              {project.stack}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              {project.summary}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
