export default function About() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            ABOUT SOFTCRAYONS
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            We train builders for real-world software careers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            SoftCrayons blends project-first learning, industry mentors, and
            placement preparation to help students transition from classroom
            concepts to production-ready skills.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Explore Courses
            </button>
            <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-3xl font-semibold text-emerald-300">7+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
              Years of Training
            </p>
            <p className="mt-4 text-slate-200">
              We have guided learners across web, data, and cloud technologies
              with job-ready outcomes.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-3xl font-semibold text-emerald-300">150+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
              Hiring Partners
            </p>
            <p className="mt-4 text-slate-200">
              Our placement network connects students with growth-stage teams
              across India.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
            <p className="text-3xl font-semibold text-emerald-300">96%</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
              Success Rate
            </p>
            <p className="mt-4 text-slate-200">
              Learners complete capstone projects and crack interviews with
              curated career prep.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-10">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-4 text-slate-200">
              We help students become confident product engineers. Every program
              blends live instruction, daily labs, and feedback loops so skills
              stick long after the course ends.
            </p>
            <div className="mt-6 space-y-4 text-slate-200">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                <p>Hands-on sprint projects aligned with industry workflows.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                <p>Career coaching, resume clinics, and mock interviews.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                <p>Mentor network from product companies and startups.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-400/20 via-slate-900/70 to-blue-500/20 p-10">
            <h2 className="text-3xl font-semibold">What we focus on</h2>
            <p className="mt-4 text-slate-200">
              We partner with students at every step so they can ship real
              projects, build a portfolio, and step into interviews with
              confidence.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-emerald-300/40 bg-slate-950/60 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                  Project Studio
                </p>
                <p className="mt-2 text-slate-200">
                  End-to-end builds with mentor reviews and weekly demos.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-300/40 bg-slate-950/60 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                  Career Launchpad
                </p>
                <p className="mt-2 text-slate-200">
                  Placement mapping, alumni referrals, and interview practice.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-300/40 bg-slate-950/60 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                  Community Hub
                </p>
                <p className="mt-2 text-slate-200">
                  Peer learning, hack nights, and expert AMA sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-10 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Ready to start?</h3>
              <p className="mt-2 max-w-xl text-slate-200">
                Join our next cohort and learn with mentors who build real
                software. We will guide you from fundamentals to placement.
              </p>
            </div>
            <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200 md:w-auto">
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
