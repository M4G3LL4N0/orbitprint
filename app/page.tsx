import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { SpacePrintPlanner } from "@/components/orbitprint/SpacePrintPlanner";

const problemCards = [
  {
    title: "Fairings cap structure size",
    copy: "Monolithic assemblies max out long before structural needs do — teams need segmented print envelopes early.",
  },
  {
    title: "Launch mass stays expensive",
    copy: "Every kilogram launched competes with payload and propellant; arrival-side printing reframes the trade.",
  },
  {
    title: "Replacement parts lag by months",
    copy: "Logistics chains for spares are brittle; local print paths compress critical timelines when risks are modeled up front.",
  },
  {
    title: "Orbital infrastructure needs local build",
    copy: "Stations, tugs, and depots cannot scale as pure Earth exports — construction has to happen where the fleet lives.",
  },
  {
    title: "Print feasibility belongs before design lock",
    copy: "OrbitPrint quantifies demand, duration, mass savings, and risk while architecture is still elastic.",
  },
] as const;

const categories = ["Trusses", "Antennas", "Shielding", "Habitat frames", "Replacement parts", "Construction panels"] as const;

const workflow = [
  { title: "Choose structure", copy: "Pick the class that matches your mission mechanical and environmental envelope." },
  { title: "Select material", copy: "Blend launched feedstock with ISRU or recycled alloy assumptions tied to location." },
  { title: "Calculate mass", copy: "See net print mass demand and avoided launch mass in the same pass." },
  { title: "Simulate print", copy: "Duration bars, sequence steps, and risk matrix update as constraints change." },
  { title: "Generate mission brief", copy: "Export-ready narrative for reviews, partners, and downstream verification." },
] as const;

const faq = [
  {
    q: "Is OrbitPrint a CAD package?",
    a: "No. It is a construction planning layer: feasibility, demand, timelines, and risk around additive and robotic assembly paths.",
  },
  {
    q: "Does this connect to paid data feeds?",
    a: "No paid APIs are required. The demo engine runs entirely inside this application for repeatable simulations.",
  },
  {
    q: "How should teams use the dashboard?",
    a: "Save plans from the planner, compare runs over time, and bring the mission brief into gate reviews alongside your CAD and loads models.",
  },
] as const;

export default function Home() {
  return (
    <div>
        <div>
      <section className="relative overflow-hidden border-b border-cyan-500/15" data-reveal>
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(34,211,238,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div data-stagger className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
          <div>
            <p className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100">
              Orbital construction simulator
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.15rem] lg:leading-tight">
              Print the structure where it needs to exist.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-400">
              OrbitPrint helps mission teams plan in-space construction, material demand, print timelines, and launch mass savings for orbital and lunar structures.
            </p>
            <div data-stagger className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                Plan a space print
              </Link>
              <Link href="/dashboard" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-100 hover:border-cyan-400/40">
                View construction dashboard
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="motion-card motion-hover-lift rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-1 shadow-[0_0_120px_rgba(59,130,246,0.12)]">
              <div className="rounded-xl bg-[#040814] p-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Live product preview</p>
                <div className="mt-4 max-h-[480px] overflow-y-auto pr-1">
                  <SpacePrintPlanner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" data-reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">The launch-volume problem</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Compare launch against arrival-side construction</h2>
        <div data-stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((c) => (
            <article key={c.title} className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
              <h3 className="text-sm font-semibold text-cyan-100">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-slate-800 bg-slate-950/40 py-16" data-reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Structure categories</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">What teams print instead of launching whole</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-cyan-500/25 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-50">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" data-reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Print planning workflow</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">From structure pick to mission brief</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {workflow.map((w, i) => (
            <li key={w.title} className="relative rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <span className="font-mono text-xs text-cyan-400/80">0{i + 1}</span>
              <p className="mt-2 text-sm font-semibold text-white">{w.title}</p>
              <p className="mt-2 text-xs text-slate-500">{w.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-slate-800 bg-gradient-to-b from-slate-950/80 to-[#050912] py-16" data-reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Dashboard preview</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Feasibility, mass, duration, and risk in one surface</h2>
            <p className="mt-3 text-sm text-slate-400">
              Example profile: mass saved 68%, print duration 42 h, material demand 310 kg, feasibility 79, structural risk medium, launch volume avoided 14.5 m³ — your saved plans surface the same signals.
            </p>
            <Link href="/dashboard" className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
              Open construction dashboard
            </Link>
          </div>
          <div className="motion-card motion-hover-lift mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 font-mono text-sm text-slate-300 lg:mt-0">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Mass saved", "68%"],
                ["Print duration", "42 h"],
                ["Material demand", "310 kg"],
                ["Feasibility", "79"],
                ["Structural risk", "Medium"],
                ["Volume avoided", "14.5 m³"],
              ].map(([k, v]) => (
                <div key={String(k)} className="rounded-lg border border-slate-800 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">{k}</p>
                  <p className="mt-1 text-cyan-100">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">Illustrative benchmark — planner outputs vary with inputs.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" data-reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Why now</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Robotics, additive, and cislunar demand converged</h2>
        <p className="mt-4 max-w-3xl text-sm text-slate-400">
          Flight-proven robotics, maturing in-space additive processes, lunar material pathways, and a wave of station and logistics architectures mean construction planning can no longer be an afterthought to launch manifests.
        </p>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/50 py-16" data-reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Pricing</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Program phases, not hobby tiers</h2>
            </div>
            <Link href="/pricing" className="text-sm font-medium text-cyan-300 hover:underline">
              View full pricing →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Concept Study", "Mission Design", "Construction Pilot", "Strategic Partner"].map((name) => (
              <div key={name} className="rounded-xl border border-slate-800 bg-[#050912] px-4 py-4">
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="mt-2 text-xs text-slate-500">Detailed scopes on the pricing page.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" data-reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Answers for mission offices</h2>
        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
              <p className="text-sm font-semibold text-white">{item.q}</p>
              <p className="mt-2 text-sm text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-cyan-500/20 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-500/10 py-16" data-reveal>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-white">Bring construction planning into the critical path.</h2>
          <p className="mt-3 text-slate-400">Run the planner, save to your dashboard, and brief stakeholders with engineering-grade numbers.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/demo" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950">
              Plan a space print
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-100">
              Mission design inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>

      <ProductHonestyNote status="demo" />
    </div>
  );
}
