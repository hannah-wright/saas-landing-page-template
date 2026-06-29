<script setup>
// DevTools - a SaaS landing page template by SaaS Design. MIT licensed.
import { ref } from "vue";

const props = defineProps({ onSignIn: Function, onSignUp: Function });

const page = ref("home");
const open = ref(false);
const year = new Date().getFullYear();

const go = (p) => {
  page.value = p;
  open.value = false;
  if (typeof window !== "undefined") window.scrollTo({ top: 0 });
};

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

const NAV = [
  { label: "Product", p: "features" },
  { label: "Docs", p: "docs" },
  { label: "Pricing", p: "pricing" },
  { label: "Changelog", p: "changelog" },
];

const FOOT = [
  { h: "Product", links: [{ label: "Features", p: "features" }, { label: "Pricing", p: "pricing" }, { label: "Docs", p: "docs" }, { label: "Changelog", p: "changelog" }] },
  { h: "Company", links: [{ label: "About", p: "about" }, { label: "Blog", p: "blog" }, { label: "Careers", p: "careers" }, { label: "Contact", p: "contact" }] },
  { h: "Legal", links: [{ label: "Privacy", p: "privacy" }, { label: "Terms", p: "terms" }, { label: "Security", p: "security" }] },
];

const docGroups = [
  { h: "Getting started", items: ["Quickstart", "Connect a repo", "Your first deploy"] },
  { h: "Guides", items: ["Environment variables", "Custom domains", "Edge functions"] },
  { h: "Reference", items: ["CLI", "REST API", "Build settings"] },
];

const faqs = [
  { q: "Is there a free plan?", a: "Yes. The Hobby plan is free forever and includes preview deployments and 100 GB of bandwidth." },
  { q: "Can I change plans later?", a: "Absolutely. Upgrade or downgrade at any time; changes are prorated automatically." },
  { q: "Do you offer discounts?", a: "We offer discounts for startups and open-source projects. Reach out to our team." },
];

const aboutStats = [{ n: "2022", l: "Founded" }, { n: "14k+", l: "Teams" }, { n: "18", l: "Edge regions" }, { n: "100%", l: "Remote" }];

const contacts = [
  { h: "Sales", d: "Talk to our team about Enterprise.", v: "sales@devtools.example" },
  { h: "Support", d: "Get help with your account.", v: "support@devtools.example" },
  { h: "Press", d: "Media and partnership inquiries.", v: "press@devtools.example" },
];

const dashNav = ["Overview", "Deployments", "Analytics", "Logs", "Settings"];
const dashMetrics = [{ k: "Uptime", v: "99.99%" }, { k: "Builds today", v: "34" }, { k: "Avg build", v: "11s" }];
const dashRows = [{ b: "main", s: "Ready", d: true }, { b: "feat/api", s: "Building", d: false }, { b: "fix/auth", s: "Ready", d: true }];

const frameworks = ["Next.js", "Astro", "SvelteKit", "Remix", "Nuxt", "Vite"];

const legalTitles = { privacy: "Privacy Policy", terms: "Terms of Service", security: "Security" };
</script>

<template>
  <div class="min-h-screen bg-background font-sans text-foreground">
    <!-- HOME -->
    <template v-if="page === 'home'">
      <a href="#" @click.prevent="go('changelog')" class="block cursor-pointer border-b border-border bg-muted/60 transition-colors hover:bg-muted">
        <div class="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 py-2 text-center text-xs sm:text-sm">
          <span class="rounded-full bg-foreground px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-background">New</span>
          <span class="font-medium">DevTools Edge Functions are now generally available.</span>
          <span class="font-semibold underline-offset-4 hover:underline">Read more &rarr;</span>
        </div>
      </a>

      <!-- HEADER -->
      <header class="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div class="flex items-center gap-8">
            <a href="#" @click.prevent="go('home')" class="flex cursor-pointer items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background"><svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h18v4H3z" /></svg></span>
              <span class="text-[15px] font-semibold tracking-tight">DevTools</span>
            </a>
            <nav class="hidden items-center gap-6 md:flex">
              <a v-for="n in NAV" :key="n.label" href="#" @click.prevent="go(n.p)" :class="'cursor-pointer text-[13px] transition-colors hover:text-foreground ' + (page === n.p ? 'text-foreground' : 'text-muted-foreground')">{{ n.label }}</a>
            </nav>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" @click="onSignIn && onSignIn()" class="hidden cursor-pointer rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground sm:inline-block">Sign in</button>
            <button type="button" @click="onSignUp && onSignUp()" class="inline-flex cursor-pointer items-center justify-center rounded-md bg-foreground px-3.5 py-1.5 text-[13px] font-semibold text-background hover:opacity-90">Start deploying</button>
            <button class="-mr-1 rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden" @click="open = !open" aria-label="Menu">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path v-if="open" d="M18 6 6 18M6 6l12 12" /><path v-else d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
        <nav v-if="open" class="space-y-1 border-t border-border px-6 py-3 md:hidden">
          <a v-for="n in NAV" :key="n.label" href="#" @click.prevent="go(n.p)" class="block cursor-pointer rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted">{{ n.label }}</a>
        </nav>
      </header>

      <main class="mx-auto max-w-6xl border-x border-border">
        <section class="border-b border-border px-6 pb-16 pt-16 text-center sm:px-16 sm:pt-24 lg:px-28">
          <span class="df-rise inline-block"><span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">The platform for shipping fast</span></span>
          <h1 class="df-rise mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl">Ship your code. We handle the rest.</h1>
          <p class="df-rise-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">DevTools is the developer platform that builds, deploys, and scales your apps on a global edge network. Connect a repo and go live in under a minute.</p>
          <div class="df-rise-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" @click="onSignUp && onSignUp()" class="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90">Start deploying <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <a href="#" @click.prevent="go('docs')" class="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-muted">Read the docs</a>
          </div>
          <div class="df-rise-2 mx-auto mt-10 max-w-md overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm">
            <div class="flex items-center gap-1.5 border-b border-border bg-muted px-3.5 py-2">
              <span class="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" /><span class="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" /><span class="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span class="ml-2 font-mono text-[11px] text-muted-foreground">bash</span>
            </div>
            <div class="px-4 py-3.5 font-mono text-[12.5px] leading-relaxed">
              <p><span class="text-muted-foreground">$</span> devtools deploy</p>
              <p class="mt-1 text-muted-foreground">Building... <span class="text-foreground">done in 12s</span></p>
              <p class="text-muted-foreground">Deployed to <span class="text-foreground underline underline-offset-2">devtools.app/acme</span></p>
            </div>
          </div>
        </section>

        <section class="border-b border-border px-6 py-9">
          <p class="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Trusted by teams at fast-moving companies</p>
          <div class="relative mt-6 overflow-hidden" :style="{ maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }">
            <div class="df-marquee flex w-max items-center gap-x-14 opacity-55"><span v-for="(n, i) in [...logos, ...logos]" :key="i" class="shrink-0 text-base font-bold tracking-tight">{{ n }}</span></div>
          </div>
        </section>

        <section class="border-b border-border px-6 py-16 sm:px-16 lg:px-28">
          <div class="max-w-2xl">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Features</span>
            <h2 class="mt-4 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Everything you need to ship.</h2>
            <p class="mt-3 text-muted-foreground">From the first commit to global scale, DevTools handles the infrastructure so you can stay in your editor.</p>
          </div>
          <div class="mt-9 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="f in features" :key="f.t" class="flex flex-col bg-card p-6">
              <span class="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-foreground"><svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" /></svg></span>
              <h3 class="mt-4 text-base font-semibold tracking-tight">{{ f.t }}</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ f.d }}</p>
            </div>
          </div>
        </section>

        <section class="border-b border-border px-6 py-12 sm:px-16 lg:px-28">
          <div class="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div><span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Works with your stack</span><h2 class="mt-3 text-2xl font-bold tracking-[-0.02em]">Deploy any framework. Zero config.</h2></div>
            <div class="flex flex-wrap items-center gap-2"><span v-for="f in frameworks" :key="f" class="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground">{{ f }}</span></div>
          </div>
        </section>

        <section class="border-b border-border px-6 py-16 sm:px-16 lg:px-28">
          <div class="mx-auto max-w-2xl text-center"><span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">The dashboard</span><h2 class="mt-4 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Every deploy, in one place.</h2><p class="mt-3 text-muted-foreground">Watch builds, inspect logs, and roll back, all from a dashboard that stays out of your way.</p></div>
          <div class="mx-auto mt-9 max-w-4xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div class="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
              <aside class="hidden flex-col gap-1 border-r border-border p-3 text-left sm:flex">
                <div class="mb-2 flex items-center gap-2 px-1"><span class="flex h-5 w-5 items-center justify-center rounded bg-foreground text-background"><svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h18v4H3z" /></svg></span><span class="text-xs font-bold">DevTools</span></div>
                <span v-for="(s, i) in dashNav" :key="s" :class="'flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ' + (i === 1 ? 'bg-muted font-semibold text-foreground' : 'text-muted-foreground')"><span class="h-1.5 w-1.5 rounded-sm bg-muted-foreground/50" /> {{ s }}</span>
              </aside>
              <div class="p-4 text-left">
                <div class="flex items-center justify-between"><div><p class="text-sm font-bold tracking-tight">Deployments</p><p class="text-[11px] text-muted-foreground">acme / web</p></div><span class="rounded-md bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background">Deploy</span></div>
                <div class="mt-3 grid grid-cols-3 gap-2.5"><div v-for="m in dashMetrics" :key="m.k" class="rounded-lg border border-border p-3"><p class="text-[10px] text-muted-foreground">{{ m.k }}</p><p class="mt-1 text-base font-bold tracking-tight">{{ m.v }}</p></div></div>
                <div class="mt-2.5 space-y-1.5"><div v-for="r in dashRows" :key="r.b" class="flex items-center gap-2.5 rounded-lg border border-border px-3 py-2"><span :class="'h-2 w-2 rounded-full ' + (r.d ? 'bg-foreground' : 'bg-muted-foreground/40')" /><span class="flex-1 font-mono text-[11px]">{{ r.b }}</span><span class="rounded-full bg-muted px-2 py-0.5 text-[9px] font-semibold text-muted-foreground">{{ r.s }}</span><span class="font-mono text-[10px] text-muted-foreground">2m ago</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
          <blockquote class="mx-auto max-w-3xl text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">"We moved our whole stack to DevTools in an afternoon and cut our deploy times from minutes to seconds. It just gets out of the way."</blockquote>
          <div class="mt-6 flex items-center justify-center gap-3"><span class="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-bold">AK</span><div class="text-left"><p class="text-sm font-semibold">Avery Kim</p><p class="text-xs text-muted-foreground">Staff Engineer, Brightline</p></div></div>
        </section>

        <section class="px-6 py-20 text-center sm:px-16 lg:px-28">
          <h2 class="mx-auto max-w-2xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Deploy your first project in minutes.</h2>
          <p class="mx-auto mt-4 max-w-xl text-muted-foreground">Connect a repository and DevTools takes care of the build, the CDN, and the scaling. Free to start.</p>
          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"><button type="button" @click="onSignUp && onSignUp()" class="inline-flex cursor-pointer items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">Start deploying</button><a href="#" @click.prevent="go('pricing')" class="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted">View pricing</a></div>
        </section>
      </main>
    </template>

    <!-- SUB PAGES -->
    <template v-else>
      <!-- HEADER -->
      <header class="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div class="flex items-center gap-8">
            <a href="#" @click.prevent="go('home')" class="flex cursor-pointer items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background"><svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h18v4H3z" /></svg></span>
              <span class="text-[15px] font-semibold tracking-tight">DevTools</span>
            </a>
            <nav class="hidden items-center gap-6 md:flex">
              <a v-for="n in NAV" :key="n.label" href="#" @click.prevent="go(n.p)" :class="'cursor-pointer text-[13px] transition-colors hover:text-foreground ' + (page === n.p ? 'text-foreground' : 'text-muted-foreground')">{{ n.label }}</a>
            </nav>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" @click="onSignIn && onSignIn()" class="hidden cursor-pointer rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground sm:inline-block">Sign in</button>
            <button type="button" @click="onSignUp && onSignUp()" class="inline-flex cursor-pointer items-center justify-center rounded-md bg-foreground px-3.5 py-1.5 text-[13px] font-semibold text-background hover:opacity-90">Start deploying</button>
            <button class="-mr-1 rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden" @click="open = !open" aria-label="Menu">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path v-if="open" d="M18 6 6 18M6 6l12 12" /><path v-else d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
        <nav v-if="open" class="space-y-1 border-t border-border px-6 py-3 md:hidden">
          <a v-for="n in NAV" :key="n.label" href="#" @click.prevent="go(n.p)" class="block cursor-pointer rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted">{{ n.label }}</a>
        </nav>
      </header>

      <main class="mx-auto max-w-6xl border-x border-border">
        <!-- FEATURES -->
        <template v-if="page === 'features'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Features</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Built for shipping fast.</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Everything DevTools does, in one place. Connect a repo and the platform handles the rest.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              <div v-for="f in features" :key="f.t" class="bg-card p-7">
                <span class="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-foreground"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" /></svg></span>
                <h3 class="mt-4 text-lg font-semibold tracking-tight">{{ f.t }}</h3>
                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ f.d }}</p>
              </div>
            </div>
          </section>
        </template>

        <!-- DOCS -->
        <template v-else-if="page === 'docs'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Documentation</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Docs</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Guides and references to get you from zero to production.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="grid gap-10 lg:grid-cols-[200px_1fr]">
              <aside class="space-y-5 text-sm">
                <div v-for="g in docGroups" :key="g.h">
                  <p class="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{{ g.h }}</p>
                  <ul class="mt-2 space-y-1.5"><li v-for="i in g.items" :key="i"><a href="#" @click.prevent class="cursor-pointer text-muted-foreground hover:text-foreground">{{ i }}</a></li></ul>
                </div>
              </aside>
              <div>
                <h2 class="text-2xl font-bold tracking-tight">Quickstart</h2>
                <div class="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">
                  <p>DevTools deploys any frontend framework or static site with zero configuration. Install the CLI, point it at your project, and run a single command.</p>
                  <div class="overflow-hidden rounded-lg border border-border bg-card font-mono text-[12.5px]">
                    <div class="border-b border-border bg-muted px-3.5 py-2 text-[11px] text-muted-foreground">terminal</div>
                    <pre class="overflow-x-auto px-4 py-3.5 leading-relaxed text-foreground/80"><code>npm i -g devtools-cli
devtools login
devtools deploy</code></pre>
                  </div>
                  <h2>What happens next</h2>
                  <p>DevTools detects your framework, installs dependencies, builds the project, and serves it from the edge. Every push to your default branch deploys to production; every pull request gets a preview URL.</p>
                  <h2>Next steps</h2>
                  <p>Add a custom domain, configure environment variables per environment, and wire up observability, all from the dashboard or the CLI.</p>
                </div>
              </div>
            </div>
          </section>
        </template>

        <!-- PRICING -->
        <template v-else-if="page === 'pricing'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Pricing</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Start free. Scale when you do.</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Simple, predictable pricing. No surprises, cancel anytime.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="grid items-start gap-5 lg:grid-cols-3">
              <div v-for="t in tiers" :key="t.n" :class="'rounded-2xl border p-6 ' + (t.hi ? 'border-foreground bg-card shadow-lg' : 'border-border bg-card')">
                <div class="flex items-center justify-between"><h3 class="text-lg font-bold tracking-tight">{{ t.n }}</h3><span v-if="t.hi" class="rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background">Popular</span></div>
                <p class="mt-1 text-sm text-muted-foreground">{{ t.d }}</p>
                <div class="mt-4 flex items-baseline gap-1"><span class="text-4xl font-extrabold tracking-tight">{{ t.p }}</span><span v-if="t.p !== 'Custom'" class="text-sm text-muted-foreground">/ mo</span></div>
                <button type="button" @click="onSignUp && onSignUp()" :class="'mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold ' + (t.hi ? 'bg-foreground text-background hover:opacity-90' : 'border border-border hover:bg-muted')">{{ t.cta }}</button>
                <ul class="mt-6 space-y-2.5 text-sm text-muted-foreground"><li v-for="x in t.f" :key="x" class="flex gap-2"><svg class="mt-0.5 h-4 w-4 shrink-0 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 5 5L20 7" /></svg> {{ x }}</li></ul>
              </div>
            </div>
            <div class="mx-auto mt-14 max-w-2xl">
              <h2 class="text-center text-xl font-bold tracking-tight">Frequently asked questions</h2>
              <div class="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border">
                <div v-for="f in faqs" :key="f.q" class="bg-card p-5"><p class="text-sm font-semibold">{{ f.q }}</p><p class="mt-1.5 text-sm text-muted-foreground">{{ f.a }}</p></div>
              </div>
            </div>
          </section>
        </template>

        <!-- CHANGELOG -->
        <template v-else-if="page === 'changelog'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Changelog</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">What's new in DevTools</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Every improvement we ship, in one place.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="mx-auto max-w-2xl space-y-8">
              <article v-for="c in changelog" :key="c.title" class="border-b border-border pb-8 last:border-0">
                <p class="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{{ c.date }}</p>
                <h2 class="mt-2 text-xl font-bold tracking-tight">{{ c.title }}</h2>
                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ c.body }}</p>
              </article>
            </div>
          </section>
        </template>

        <!-- ABOUT -->
        <template v-else-if="page === 'about'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">About us</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">We are building the fastest way to ship.</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">DevTools is a small, fully remote team obsessed with developer experience.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="grid items-center gap-10 lg:grid-cols-2">
              <div class="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>DevTools started with a simple frustration: deploying software was slower and more complicated than writing it. We set out to make shipping a non-event, so teams could spend their time building.</p>
                <p>Today thousands of teams deploy to DevTools every day. We are a small crew that cares about craft, speed, and making infrastructure disappear.</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="s in aboutStats" :key="s.l" class="rounded-2xl border border-border bg-card p-6"><p class="text-4xl font-extrabold tracking-tight">{{ s.n }}</p><p class="mt-1 text-sm text-muted-foreground">{{ s.l }}</p></div>
              </div>
            </div>
          </section>
        </template>

        <!-- BLOG -->
        <template v-else-if="page === 'blog'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Blog</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">The DevTools blog</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Product updates, engineering deep-dives, and guides.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <a v-for="p in posts" :key="p.title" href="#" @click.prevent="go('post')" class="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50">
                <span class="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{{ p.tag }} &middot; {{ p.read }}</span>
                <h3 class="mt-3 text-lg font-semibold leading-snug tracking-tight">{{ p.title }}</h3>
                <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium">Read post <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </a>
            </div>
          </section>
        </template>

        <!-- POST -->
        <template v-else-if="page === 'post'">
          <section class="border-b border-border px-6 py-16 sm:px-16 lg:px-28">
            <div class="mx-auto max-w-2xl">
              <a href="#" @click.prevent="go('blog')" class="cursor-pointer font-mono text-[11px] uppercase tracking-wide text-muted-foreground hover:text-foreground">&larr; Back to blog</a>
              <p class="mt-6 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">Engineering &middot; 6 min read</p>
              <h1 class="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">How we cut cold starts to zero</h1>
            </div>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">
              <p>Cold starts have long been the tax you pay for serverless. When a function hasn't run recently, the platform has to spin up a new instance, and your user waits. We decided that tax was unacceptable.</p>
              <h2>The approach</h2>
              <p>Instead of booting a fresh runtime per request, DevTools keeps a pool of warm isolates at every edge location and routes incoming requests to the nearest available one. The result is a sub-millisecond startup, even for traffic that arrives in bursts.</p>
              <h2>What it means for you</h2>
              <p>You deploy the same code you always have. There is nothing to configure. Your functions simply run faster, everywhere, all the time.</p>
            </div>
          </section>
        </template>

        <!-- CAREERS -->
        <template v-else-if="page === 'careers'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Careers</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Build the platform developers love.</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">We are a small, fully remote team. Come help us make shipping effortless.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="mx-auto max-w-2xl divide-y divide-border overflow-hidden rounded-xl border border-border">
              <a v-for="r in roles" :key="r.t" href="#" @click.prevent="go('contact')" class="flex cursor-pointer items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-muted/50">
                <div><p class="text-sm font-semibold tracking-tight">{{ r.t }}</p><p class="mt-0.5 text-xs text-muted-foreground">{{ r.team }} &middot; {{ r.loc }}</p></div>
                <span class="inline-flex items-center gap-1 text-sm font-medium">Apply <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </a>
            </div>
          </section>
        </template>

        <!-- CONTACT -->
        <template v-else-if="page === 'contact'">
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Contact</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Get in touch</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Questions about DevTools? We would love to hear from you.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
              <div v-for="c in contacts" :key="c.h" class="rounded-xl border border-border bg-card p-6"><p class="text-base font-semibold tracking-tight">{{ c.h }}</p><p class="mt-1.5 text-sm text-muted-foreground">{{ c.d }}</p><p class="mt-3 font-mono text-[13px] text-foreground">{{ c.v }}</p></div>
            </div>
          </section>
        </template>

        <!-- LEGAL: privacy / terms / security -->
        <template v-else>
          <section class="border-b border-border px-6 py-16 text-center sm:px-16 lg:px-28">
            <span class="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Legal</span>
            <h1 class="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{{ legalTitles[page] }}</h1>
            <p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">Last updated June 2026.</p>
          </section>
          <section class="px-6 py-14 sm:px-16 lg:px-28">
            <div class="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground">
              <p>This is placeholder copy for the {{ legalTitles[page].toLowerCase() }} of DevTools. Replace it with your own legal text before launch.</p>
              <h2>Overview</h2>
              <p>By using DevTools, you agree to the terms described on this page. We aim to keep this document clear and free of unnecessary jargon.</p>
              <h2>Your data</h2>
              <p>We process only the data needed to operate the service, never sell it, and store it in the region you choose. You can export or delete it at any time.</p>
              <h2>Contact</h2>
              <p>Questions about this policy? Reach our team at legal@devtools.example.</p>
            </div>
          </section>
        </template>
      </main>
    </template>

    <!-- FOOTER -->
    <footer class="border-t border-border bg-card">
      <div class="mx-auto max-w-6xl px-6 py-14">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div class="lg:col-span-2">
            <a href="#" @click.prevent="go('home')" class="flex cursor-pointer items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background"><svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v4H3zM3 10h12v4H3zM3 17h18v4H3z" /></svg></span>
              <span class="text-[15px] font-semibold tracking-tight">DevTools</span>
            </a>
            <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">The developer platform to build, deploy, and scale your apps on the edge.</p>
            <div class="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
              <span class="h-1.5 w-1.5 rounded-full bg-foreground" />
              <span class="font-mono text-[11px] text-muted-foreground">All systems operational</span>
            </div>
          </div>
          <div v-for="col in FOOT" :key="col.h">
            <p class="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{{ col.h }}</p>
            <ul class="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li v-for="l in col.links" :key="l.label"><a href="#" @click.prevent="go(l.p)" class="cursor-pointer hover:text-foreground">{{ l.label }}</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">&copy; {{ year }} DevTools, Inc.</div>
      </div>
    </footer>
  </div>
</template>

<style>
@keyframes df-rise { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
@keyframes df-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
.df-rise { animation: df-rise .7s cubic-bezier(.16,1,.3,1) both }
.df-rise-2 { animation: df-rise .7s cubic-bezier(.16,1,.3,1) .08s both }
.df-marquee { animation: df-marquee 26s linear infinite }
@media (prefers-reduced-motion: reduce) { .df-rise, .df-rise-2, .df-marquee { animation: none } }
</style>
