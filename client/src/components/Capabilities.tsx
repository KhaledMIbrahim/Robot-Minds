import { useContent } from '../context/ContentContext'

export default function Capabilities() {
    const { get } = useContent()
    const items = [1, 2, 3, 4, 5].map((n) => ({
        title: get(`capabilities.item${n}.title`),
        desc: get(`capabilities.item${n}.desc`),
    }))

    return (
        <section id="intelligence" className="border-y border-white/[0.06] bg-[#05060a]">
            <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 lg:py-32">
                <div className="max-w-2xl">
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-300">{get('capabilities.tag')}</p>
                    <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                        {get('capabilities.heading')}
                    </h2>
                </div>

                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article
                            key={item.title}
                            className="group flex min-h-[198px] flex-col items-center justify-between rounded-[13px] border border-white/[0.08] bg-[#111111] px-6 py-7 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-[#151515] sm:min-h-[205px]"
                        >
                            <div className="flex flex-col items-center">
                                <h3 className="text-[17px] font-medium leading-tight tracking-[-0.015em] text-white">{item.title}</h3>
                                <p className="mt-3 max-w-[235px] text-[11px] leading-[1.45] text-white/55">{item.desc}</p>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-2">
                                <a
                                    href="#reserve"
                                    className="inline-flex h-7 items-center gap-2 rounded-md bg-white px-2.5 text-[10px] font-medium text-[#111111] transition-colors hover:bg-cyan-50"
                                >
                                    Explore
                                    <span className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-gradient-to-br from-cyan-400 to-blue-600 text-[12px] leading-none text-white">
                    →
                  </span>
                                </a>
                                <a
                                    href="#fleet"
                                    className="inline-flex h-7 items-center rounded-md border border-white/15 bg-white/[0.04] px-3 text-[10px] font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
                                >
                                    Learn more
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}