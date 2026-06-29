import { useState } from "react";

/* DevTools - a SaaS landing page template by SaaS Design. MIT licensed. */

type Page =
  | "home" | "features" | "docs" | "pricing" | "changelog"
  | "about" | "blog" | "post" | "careers" | "contact"
  | "privacy" | "terms" | "security";

const css = `
@keyframes df-rise { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
@keyframes df-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
.df-rise { animation: df-rise .7s cubic-bezier(.16,1,.3,1) both }
.df-rise-2 { animation: df-rise .7s cubic-bezier(.16,1,.3,1) .08s both }
.df-marquee { animation: df-marquee 26s linear infinite }
@media (prefers-reduced-motion: reduce) { .df-rise, .df-rise-2, .df-marquee { animation: none } }
`;

const logos = ["Northwind", "Vela", "Cobalt", "Mainsail", "Brightline", "Orbit", "Tidewater"];

const features = [
  { t: "Instant deploys", d: "Push to your branch and ship to production in seconds. No pipelines to babysit." },
  { t: "Global edge network", d: "Serve every request from the closest region, automatically, with zero config." },
  { t: "Preview environments", d: "Every pull request gets its own live URL to review before you merge." },
  { t: "Built-in observability", d: "Logs, traces, and metrics for every deploy, with no agents to install." },
  { t: "Instant rollbacks", d: "Something broke? Roll back to any previous deploy in one click." },
  { t: "Secrets and env vars", d: "Encrypted environment variables, scoped per environment and per branch." },
];

const tiers = [
  { n: "Hobby", p: "$0", d: "For personal projects and experiments.", f: ["1 concurrent build", "100 GB bandwidth", "Preview deployments", "Community support"], cta: "Start free", hi: false },
  { n: "Pro", p: "$20", d: "For professional developers and teams.", f: ["Everything in Hobby", "Unlimited builds", "1 TB bandwidth", "Observability + logs", "Email support"], cta: "Start free trial", hi: true },
  { n: "Enterprise", p: "Custom", d: "For organizations at scale.", f: ["Everything in Pro", "SSO and SAML", "Audit logs and SLA", "Dedicated support"], cta: "Contact sales", hi: false },
];

const changelog = [
  { date: "Jun 4, 2026", title: "Edge Functions are now generally available", body: "Run code at the edge in 18 regions with zero cold starts. Available on every plan today." },
  { date: "May 21, 2026", title: "Faster builds with remote caching", body: "Shared build caches cut median build times by 40% across the platform." },
  { date: "May 7, 2026", title: "Audit logs for Enterprise", body: "Every action in your workspace is now recorded and exportable for compliance." },
  { date: "Apr 23, 2026", title: "One-click rollbacks", body: "Promote any previous deploy back to production from the dashboard or the CLI." },
];

const posts = [
  { title: "How we cut cold starts to zero", tag: "Engineering", read: "6 min" },
  { title: "Deploying a monorepo on DevTools", tag: "Guides", read: "8 min" },
  { title: "What edge rendering means for your app", tag: "Product", read: "5 min" },
];

const roles = [
  { t: "Senior Platform Engineer", team: "Infrastructure", loc: "Remote" },
  { t: "Developer Advocate", team: "Developer Relations", loc: "Remote" },
  { t: "Product Designer", team: "Design", loc: "Remote" },
  { t: "Support Engineer", team: "Customer Success", loc: "Remote" },
];

const Check = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 5 5L20 7" /></svg>
);

export function DevTools({
  onSignIn,
  onSignUp,
}: { onSignIn?: () => void; onSignUp?: () => void } = {}) {
  const [page, setPage] = useState<Page>("home");
  const [open, setOpen] = useState(false);

  const go = (p: Page) => (e?: { preventDefault?: () => void }) => {
    e?.preventDefault?.();
    setPage(p);
    setOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  const Logo = () => (
    <a href="#" onClick={go("home")} className="flex cursor-pointer items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h18v4H3z" /></svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight">DevTools</span>
    </a>
  );

  const NAV: { label: string; p: Page }[] = [
    { label: "Product", p: "features" },
    { label: "Docs", p: "docs" },
    { label: "Pricing", p: "pricing" },
    { label: "Changelog", p: "changelog" },
  ];

  const Header = () => (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a key={n.label} href="#" onClick={go(n.p)} className={"cursor-pointer text-[13px] transition-colors hover:text-foreground " + (page === n.p ? "text-foreground" : "text-muted-foreground")}>{n.label}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onSignIn} className="hidden cursor-pointer rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground sm:inline-block">Sign in</button>
          <button type="button" onClick={onSignUp} className="inline-flex cursor-pointer items-center justify-center rounded-md bg-foreground px-3.5 py-1.5 text-[13px] font-semibold text-background hover:opacity-90">Start deploying</button>
          <button className="-mr-1 rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}</svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="space-y-1 border-t border-border px-6 py-3 md:hidden">
          {NAV.map((n) => (
            <a key={n.label} href="#" onClick={go(n.p)} className="block cursor-pointer rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );

  const FOOT: { h: string; links: { label: string; p: Page }[] }[] = [
    { h: "Product", links: [{ label: "Features", p: "features" }, { label: "Pricing", p: "pricing" }, { label: "Docs", p: "docs" }, { label: "Changelog", p: "changelog" }] },
    { h: "Company", links: [{ label: "About", p: "about" }, { label: "Blog", p: "blog" }, { label: "Careers", p: "careers" }, { label: "Contact", p: "contact" }] },
    { h: "Legal", links: [{ label: "Privacy", p: "privacy" }, { label: "Terms", p: "terms" }, { label: "Security", p: "security" }] },
  ];

  const Footer = () => (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">The developer platform to build, deploy, and scale your apps on the edge.</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              <span className="font-mono text-[11px] text-muted-foreground">All systems operational</span>
            </div>
          </div>
          {FOOT.map((col) => (
            <div key={col.h}>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{col.h}</p>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {col.links.map((l) => (<li key={l.label}><a href="#" onClick={go(l.p)} className="cursor-pointer hover:text-foreground">{l.label}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} DevTools, Inc.</div>
      </div>
    </footer>
  );

  const Eyebrow = ({ children }: { children: any }) => (
    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{children}</span>
  );

  // Page header used on every sub-page.
  const PageHero = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
    <section className="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{title}</h1>
      {sub && <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </section>
  );

  const Prose = ({ children }: { children: any }) => (
    <div className="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">{children}</div>
  );

  // ---- Pages ----------------------------------------------------------------
  const Home = () => (
    <>
      <a href="#" onClick={go("changelog")} className="block cursor-pointer border-b border-border bg-muted/60 transition-colors hover:bg-muted">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-2 text-center text-xs sm:text-sm">
          <span className="rounded-full bg-foreground px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-background">New</span>
          <span className="font-medium">DevTools Edge Functions are now generally available.</span>
          <span className="font-semibold underline-offset-4 hover:underline">Read more &rarr;</span>
        </div>
      </a>
      <Header />
      <main className="mx-auto max-w-6xl border-x border-border">
        <section className="border-b border-border px-6 pb-16 pt-16 text-center sm:px-16 sm:pt-24 lg:px-28">
          <span className="df-rise inline-block"><Eyebrow>The platform for shipping fast</Eyebrow></span>
          <h1 className="df-rise mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl">Ship your code. We handle the rest.</h1>
          <p className="df-rise-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">DevTools is the developer platform that builds, deploys, and scales your apps on a global edge network. Connect a repo and go live in under a minute.</p>
          <div className="df-rise-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onSignUp} className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90">Start deploying <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <a href="#" onClick={go("docs")} className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">Read the docs</a>
          </div>
          <div className="df-rise-2 mx-auto mt-10 max-w-md overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3.5 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" /><span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" /><span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">bash</span>
            </div>
            <div className="px-4 py-3.5 font-mono text-[12.5px] leading-relaxed">
              <p><span className="text-muted-foreground">$</span> devtools deploy</p>
              <p className="mt-1 text-muted-foreground">Building... <span className="text-foreground">done in 12s</span></p>
              <p className="text-muted-foreground">Deployed to <span className="text-foreground underline underline-offset-2">devtools.app/acme</span></p>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-9">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Trusted by teams at fast-moving companies</p>
          <div className="relative mt-6 overflow-hidden" style={{ maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)" }}>
            <div className="df-marquee flex w-max items-center gap-x-14 opacity-55">{[...logos, ...logos].map((n, i) => (<span key={i} className="shrink-0 text-base font-bold tracking-tight">{n}</span>))}</div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-16 sm:px-16 lg:px-28">
          <div className="max-w-2xl">
            <Eyebrow>Features</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Everything you need to ship.</h2>
            <p className="mt-3 text-muted-foreground">From the first commit to global scale, DevTools handles the infrastructure so you can stay in your editor.</p>
          </div>
          <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className="flex flex-col bg-card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-foreground"><svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" /></svg></span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-border px-6 py-12 sm:px-16 lg:px-28">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div><Eyebrow>Works with your stack</Eyebrow><h2 className="mt-3 text-2xl font-bold tracking-[-0.02em]">Deploy any framework. Zero config.</h2></div>
            <div className="flex flex-wrap items-center gap-2">{["Next.js", "Astro", "SvelteKit", "Remix", "Nuxt", "Vite"].map((f) => (<span key={f} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground">{f}</span>))}</div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-16 sm:px-16 lg:px-28">
          <div className="mx-auto max-w-2xl text-center"><Eyebrow>The dashboard</Eyebrow><h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Every deploy, in one place.</h2><p className="mt-3 text-muted-foreground">Watch builds, inspect logs, and roll back, all from a dashboard that stays out of your way.</p></div>
          <div className="mx-auto mt-9 max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
              <aside className="hidden flex-col gap-1 border-r border-border p-3 text-left sm:flex">
                <div className="mb-2 flex items-center gap-2 px-1"><span className="flex h-5 w-5 items-center justify-center rounded bg-foreground text-background"><svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h18v4H3z" /></svg></span><span className="text-xs font-bold">DevTools</span></div>
                {["Overview", "Deployments", "Analytics", "Logs", "Settings"].map((s, i) => (<span key={s} className={"flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs " + (i === 1 ? "bg-muted font-semibold text-foreground" : "text-muted-foreground")}><span className="h-1.5 w-1.5 rounded-sm bg-muted-foreground/50" /> {s}</span>))}
              </aside>
              <div className="p-4 text-left">
                <div className="flex items-center justify-between"><div><p className="text-sm font-bold tracking-tight">Deployments</p><p className="text-[11px] text-muted-foreground">acme / web</p></div><span className="rounded-md bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background">Deploy</span></div>
                <div className="mt-3 grid grid-cols-3 gap-2.5">{[{ k: "Uptime", v: "99.99%" }, { k: "Builds today", v: "34" }, { k: "Avg build", v: "11s" }].map((m) => (<div key={m.k} className="rounded-lg border border-border p-3"><p className="text-[10px] text-muted-foreground">{m.k}</p><p className="mt-1 text-base font-bold tracking-tight">{m.v}</p></div>))}</div>
                <div className="mt-2.5 space-y-1.5">{[{ b: "main", s: "Ready", d: true }, { b: "feat/api", s: "Building", d: false }, { b: "fix/auth", s: "Ready", d: true }].map((r) => (<div key={r.b} className="flex items-center gap-2.5 rounded-lg border border-border px-3 py-2"><span className={"h-2 w-2 rounded-full " + (r.d ? "bg-foreground" : "bg-muted-foreground/40")} /><span className="flex-1 font-mono text-[11px]">{r.b}</span><span className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-semibold text-muted-foreground">{r.s}</span><span className="font-mono text-[10px] text-muted-foreground">2m ago</span></div>))}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
          <blockquote className="mx-auto max-w-3xl text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">"We moved our whole stack to DevTools in an afternoon and cut our deploy times from minutes to seconds. It just gets out of the way."</blockquote>
          <div className="mt-6 flex items-center justify-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-bold">AK</span><div className="text-left"><p className="text-sm font-semibold">Avery Kim</p><p className="text-xs text-muted-foreground">Staff Engineer, Brightline</p></div></div>
        </section>

        <section className="px-6 py-20 text-center sm:px-16 lg:px-28">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Deploy your first project in minutes.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Connect a repository and DevTools takes care of the build, the CDN, and the scaling. Free to start.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><button type="button" onClick={onSignUp} className="inline-flex cursor-pointer items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">Start deploying</button><a href="#" onClick={go("pricing")} className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">View pricing</a></div>
        </section>
      </main>
    </>
  );

  const Sub = ({ children }: { children: any }) => (
    <>
      <Header />
      <main className="mx-auto max-w-6xl border-x border-border">{children}</main>
    </>
  );

  const Features = () => (
    <Sub>
      <PageHero eyebrow="Features" title="Built for shipping fast." sub="Everything DevTools does, in one place. Connect a repo and the platform handles the rest." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.t} className="bg-card p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" /></svg></span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Sub>
  );

  const Docs = () => (
    <Sub>
      <PageHero eyebrow="Documentation" title="Docs" sub="Guides and references to get you from zero to production." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
          <aside className="space-y-5 text-sm">
            {[
              { h: "Getting started", items: ["Quickstart", "Connect a repo", "Your first deploy"] },
              { h: "Guides", items: ["Environment variables", "Custom domains", "Edge functions"] },
              { h: "Reference", items: ["CLI", "REST API", "Build settings"] },
            ].map((g) => (
              <div key={g.h}>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{g.h}</p>
                <ul className="mt-2 space-y-1.5">{g.items.map((i) => (<li key={i}><a href="#" onClick={(e) => e.preventDefault()} className="cursor-pointer text-muted-foreground hover:text-foreground">{i}</a></li>))}</ul>
              </div>
            ))}
          </aside>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Quickstart</h2>
            <Prose>
              <p>DevTools deploys any frontend framework or static site with zero configuration. Install the CLI, point it at your project, and run a single command.</p>
              <div className="overflow-hidden rounded-lg border border-border bg-card font-mono text-[12.5px]">
                <div className="border-b border-border bg-muted px-3.5 py-2 text-[11px] text-muted-foreground">terminal</div>
                <pre className="overflow-x-auto px-4 py-3.5 leading-relaxed text-foreground/80"><code>npm i -g devtools-cli{"\n"}devtools login{"\n"}devtools deploy</code></pre>
              </div>
              <h2>What happens next</h2>
              <p>DevTools detects your framework, installs dependencies, builds the project, and serves it from the edge. Every push to your default branch deploys to production; every pull request gets a preview URL.</p>
              <h2>Next steps</h2>
              <p>Add a custom domain, configure environment variables per environment, and wire up observability, all from the dashboard or the CLI.</p>
            </Prose>
          </div>
        </div>
      </section>
    </Sub>
  );

  const Pricing = () => (
    <Sub>
      <PageHero eyebrow="Pricing" title="Start free. Scale when you do." sub="Simple, predictable pricing. No surprises, cancel anytime." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="grid items-start gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.n} className={"rounded-2xl border p-6 " + (t.hi ? "border-foreground bg-card shadow-lg" : "border-border bg-card")}>
              <div className="flex items-center justify-between"><h3 className="text-lg font-bold tracking-tight">{t.n}</h3>{t.hi && <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background">Popular</span>}</div>
              <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              <div className="mt-4 flex items-baseline gap-1"><span className="text-4xl font-extrabold tracking-tight">{t.p}</span>{t.p !== "Custom" && <span className="text-sm text-muted-foreground">/ mo</span>}</div>
              <button type="button" onClick={onSignUp} className={"mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold " + (t.hi ? "bg-foreground text-background hover:opacity-90" : "border border-border hover:bg-muted")}>{t.cta}</button>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">{t.f.map((x) => (<li key={x} className="flex gap-2"><Check /> {x}</li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-2xl">
          <h2 className="text-center text-xl font-bold tracking-tight">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border">
            {[
              { q: "Is there a free plan?", a: "Yes. The Hobby plan is free forever and includes preview deployments and 100 GB of bandwidth." },
              { q: "Can I change plans later?", a: "Absolutely. Upgrade or downgrade at any time; changes are prorated automatically." },
              { q: "Do you offer discounts?", a: "We offer discounts for startups and open-source projects. Reach out to our team." },
            ].map((f) => (<div key={f.q} className="bg-card p-5"><p className="text-sm font-semibold">{f.q}</p><p className="mt-1.5 text-sm text-muted-foreground">{f.a}</p></div>))}
          </div>
        </div>
      </section>
    </Sub>
  );

  const Changelog = () => (
    <Sub>
      <PageHero eyebrow="Changelog" title="What's new in DevTools" sub="Every improvement we ship, in one place." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="mx-auto max-w-2xl space-y-8">
          {changelog.map((c) => (
            <article key={c.title} className="border-b border-border pb-8 last:border-0">
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{c.date}</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Sub>
  );

  const About = () => (
    <Sub>
      <PageHero eyebrow="About us" title="We are building the fastest way to ship." sub="DevTools is a small, fully remote team obsessed with developer experience." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Prose>
            <p>DevTools started with a simple frustration: deploying software was slower and more complicated than writing it. We set out to make shipping a non-event, so teams could spend their time building.</p>
            <p>Today thousands of teams deploy to DevTools every day. We are a small crew that cares about craft, speed, and making infrastructure disappear.</p>
          </Prose>
          <div className="grid grid-cols-2 gap-4">
            {[{ n: "2022", l: "Founded" }, { n: "14k+", l: "Teams" }, { n: "18", l: "Edge regions" }, { n: "100%", l: "Remote" }].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6"><p className="text-4xl font-extrabold tracking-tight">{s.n}</p><p className="mt-1 text-sm text-muted-foreground">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>
    </Sub>
  );

  const Blog = () => (
    <Sub>
      <PageHero eyebrow="Blog" title="The DevTools blog" sub="Product updates, engineering deep-dives, and guides." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href="#" onClick={go("post")} className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50">
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{p.tag} &middot; {p.read}</span>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{p.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">Read post <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
            </a>
          ))}
        </div>
      </section>
    </Sub>
  );

  const Post = () => (
    <Sub>
      <section className="border-b border-border px-6 py-16 sm:px-16 lg:px-28">
        <div className="mx-auto max-w-2xl">
          <a href="#" onClick={go("blog")} className="cursor-pointer font-mono text-[11px] uppercase tracking-wide text-muted-foreground hover:text-foreground">&larr; Back to blog</a>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">Engineering &middot; 6 min read</p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">How we cut cold starts to zero</h1>
        </div>
      </section>
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <Prose>
          <p>Cold starts have long been the tax you pay for serverless. When a function hasn't run recently, the platform has to spin up a new instance, and your user waits. We decided that tax was unacceptable.</p>
          <h2>The approach</h2>
          <p>Instead of booting a fresh runtime per request, DevTools keeps a pool of warm isolates at every edge location and routes incoming requests to the nearest available one. The result is a sub-millisecond startup, even for traffic that arrives in bursts.</p>
          <h2>What it means for you</h2>
          <p>You deploy the same code you always have. There is nothing to configure. Your functions simply run faster, everywhere, all the time.</p>
        </Prose>
      </section>
    </Sub>
  );

  const Careers = () => (
    <Sub>
      <PageHero eyebrow="Careers" title="Build the platform developers love." sub="We are a small, fully remote team. Come help us make shipping effortless." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="mx-auto max-w-2xl divide-y divide-border overflow-hidden rounded-xl border border-border">
          {roles.map((r) => (
            <a key={r.t} href="#" onClick={go("contact")} className="flex cursor-pointer items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-muted/50">
              <div><p className="text-sm font-semibold tracking-tight">{r.t}</p><p className="mt-0.5 text-xs text-muted-foreground">{r.team} &middot; {r.loc}</p></div>
              <span className="inline-flex items-center gap-1 text-sm font-medium">Apply <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
            </a>
          ))}
        </div>
      </section>
    </Sub>
  );

  const Contact = () => (
    <Sub>
      <PageHero eyebrow="Contact" title="Get in touch" sub="Questions about DevTools? We would love to hear from you." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
          {[
            { h: "Sales", d: "Talk to our team about Enterprise.", v: "sales@devtools.example" },
            { h: "Support", d: "Get help with your account.", v: "support@devtools.example" },
            { h: "Press", d: "Media and partnership inquiries.", v: "press@devtools.example" },
          ].map((c) => (
            <div key={c.h} className="rounded-xl border border-border bg-card p-6"><p className="text-base font-semibold tracking-tight">{c.h}</p><p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p><p className="mt-3 font-mono text-[13px] text-foreground">{c.v}</p></div>
          ))}
        </div>
      </section>
    </Sub>
  );

  const Legal = ({ title }: { title: string }) => (
    <Sub>
      <PageHero eyebrow="Legal" title={title} sub="Last updated June 2026." />
      <section className="px-6 py-14 sm:px-16 lg:px-28">
        <Prose>
          <p>This is placeholder copy for the {title.toLowerCase()} of DevTools. Replace it with your own legal text before launch.</p>
          <h2>Overview</h2>
          <p>By using DevTools, you agree to the terms described on this page. We aim to keep this document clear and free of unnecessary jargon.</p>
          <h2>Your data</h2>
          <p>We process only the data needed to operate the service, never sell it, and store it in the region you choose. You can export or delete it at any time.</p>
          <h2>Contact</h2>
          <p>Questions about this policy? Reach our team at legal@devtools.example.</p>
        </Prose>
      </section>
    </Sub>
  );

  const body =
    page === "home" ? <Home /> :
    page === "features" ? <Features /> :
    page === "docs" ? <Docs /> :
    page === "pricing" ? <Pricing /> :
    page === "changelog" ? <Changelog /> :
    page === "about" ? <About /> :
    page === "blog" ? <Blog /> :
    page === "post" ? <Post /> :
    page === "careers" ? <Careers /> :
    page === "contact" ? <Contact /> :
    page === "privacy" ? <Legal title="Privacy Policy" /> :
    page === "terms" ? <Legal title="Terms of Service" /> :
    <Legal title="Security" />;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <style>{css}</style>
      {body}
      <Footer />
    </div>
  );
}
