import { PrintButton } from "@/components/skillsheet/print-button";
import { SkillsSection } from "@/components/skillsheet/skills-section";
import { CareerSection } from "@/components/skillsheet/career-section";
import { StrengthsSection } from "@/components/skillsheet/strengths-section";
import { profile, summary, sourcesNote } from "@/data/skillsheet";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden">
      <div className="atmosphere" aria-hidden />
      <div className="grain" aria-hidden />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
        <p className="text-xs tracking-[0.22em] text-[var(--ink-muted)] uppercase">
          Skill Sheet · {profile.updatedAt}
        </p>
        <nav className="hidden gap-6 text-sm text-[var(--ink-muted)] sm:flex">
          <a className="transition hover:text-[var(--ink)]" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#career">
            Career
          </a>
          <a className="transition hover:text-[var(--ink)]" href="#strengths">
            Strengths
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20">
          <div className="hero-copy max-w-4xl">
            <p className="text-sm tracking-[0.2em] text-[var(--accent-deep)]">
              {profile.company}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.8rem,9vw,6.2rem)] leading-[1.05] tracking-tight text-[var(--ink)]">
              {profile.nameJa}
            </h1>
            <p className="mt-3 font-display text-xl text-[var(--ink-muted)] sm:text-2xl">
              {profile.nameEn}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink)] sm:text-xl">
              {summary.headline}
            </p>
            <p className="mt-4 max-w-2xl text-[var(--ink-muted)]">
              {profile.title} · {profile.location}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#skills"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--ink)] px-5 text-sm font-medium text-[var(--paper)] transition hover:bg-[var(--accent-deep)]"
              >
                スキルを見る
              </a>
              <PrintButton />
            </div>
          </div>

          <div className="hero-meta mt-16 grid max-w-3xl gap-4 border-t border-[var(--ink-line)] pt-6 text-sm text-[var(--ink-muted)] sm:grid-cols-3">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase">Contact</p>
              <a
                className="mt-1 block text-[var(--ink)] underline-offset-4 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.18em] uppercase">Web</p>
              <a
                className="mt-1 block text-[var(--ink)] underline-offset-4 hover:underline"
                href={profile.website}
                target="_blank"
                rel="noreferrer"
              >
                mnemonic.co.jp
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.18em] uppercase">GitHub</p>
              <a
                className="mt-1 block text-[var(--ink)] underline-offset-4 hover:underline"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                mnemonic-co-jp
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl space-y-24 px-5 pb-24 sm:px-8 sm:space-y-32 sm:pb-32">
          <section className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.28em] text-[var(--accent-deep)] uppercase">
              Profile
            </p>
            <h2 className="mt-3 font-display text-3xl text-[var(--ink)] sm:text-4xl">
              職務要約
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[var(--ink-muted)]">
              {summary.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[var(--ink-muted)]">生年月日・出身</dt>
                <dd className="mt-1 text-[var(--ink)]">{profile.birth}</dd>
              </div>
              <div>
                <dt className="text-[var(--ink-muted)]">現職</dt>
                <dd className="mt-1 text-[var(--ink)]">
                  {profile.company} / {profile.title}
                </dd>
              </div>
            </dl>
          </section>

          <SkillsSection />
          <CareerSection />
          <StrengthsSection />

          <aside className="rounded-none border border-[var(--ink-line)] bg-[color-mix(in_oklab,var(--paper)_75%,transparent)] p-6 text-sm leading-relaxed text-[var(--ink-muted)] sm:p-8">
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--accent-deep)] uppercase">
              Note
            </p>
            <p className="mt-3">{sourcesNote}</p>
          </aside>
        </div>
      </main>

      <footer className="relative z-10 border-t border-[var(--ink-line)] px-5 py-8 text-center text-xs text-[var(--ink-muted)] sm:px-8">
        © {new Date().getFullYear()} {profile.nameJa} / {profile.company}
      </footer>
    </div>
  );
}
