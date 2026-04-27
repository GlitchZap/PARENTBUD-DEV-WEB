export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300 backdrop-blur">
          React + TypeScript + Tailwind ready
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          ParentBud Web is scaffolded for modern open-source UI kits.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Use this starter with shadcn/ui, Aceternity UI, Uiverse, and React Bits components.
          The project already includes TypeScript, TailwindCSS, path aliases, and animation-friendly dependencies.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
            TypeScript
          </span>
          <span className="rounded-full bg-fuchsia-500/15 px-4 py-2 text-fuchsia-300 ring-1 ring-inset ring-fuchsia-400/20">
            TailwindCSS
          </span>
          <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
            shadcn/ui-ready
          </span>
        </div>
      </div>
    </main>
  );
}
