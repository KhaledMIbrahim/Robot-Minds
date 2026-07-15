import { useContent } from '../context/ContentContext'

export default function Capabilities() {
  const { get } = useContent()
  const items = [1, 2, 3, 4, 5].map((n) => ({
    title: get(`capabilities.item${n}.title`),
    desc: get(`capabilities.item${n}.desc`),
  }))

  return (
    <section id="intelligence" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-xs uppercase tracking-widest text-cyan-300">{get('capabilities.tag')}</p>
      <h2 className="mt-4 max-w-lg text-3xl font-semibold text-white">{get('capabilities.heading')}</h2>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-4 h-8 w-8 rounded-full border border-cyan-400/40 bg-cyan-400/10" />
            <h3 className="font-medium text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
