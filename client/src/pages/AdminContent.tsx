import { useEffect, useState } from 'react'
import { CONTENT_SCHEMA } from '../content/schema'
import { CONTENT_DEFAULTS } from '../content/defaults'
import ImageField from '../components/admin/ImageField'
import VideoField from '../components/admin/VideoField'
import { useContent } from '../context/ContentContext'

export default function AdminContent() {
  const { refresh: refreshSiteContent } = useContent()
  const [values, setValues] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [activeGroup, setActiveGroup] = useState(CONTENT_SCHEMA[0].id)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/content')
        .then((res) => (res.ok ? res.json() : {}))
        .then((data: Record<string, string>) => {
          if (cancelled) return
          setValues({ ...CONTENT_DEFAULTS, ...data })
        })
        .finally(() => {
          if (!cancelled) setLoading(false)
        })
    return () => {
      cancelled = true
    }
  }, [])

  function setField(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSave() {
    setSaving(true)
    setStatus(null)
    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Save failed.')
      await refreshSiteContent()
      setStatus({ type: 'success', message: 'Home page updated.' })
    } catch {
      setStatus({ type: 'error', message: 'Could not save changes. Please try again.' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <p className="text-sm text-white/50">Loading content…</p>
  }

  const group = CONTENT_SCHEMA.find((g) => g.id === activeGroup) ?? CONTENT_SCHEMA[0]

  return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr]">
        <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
          {CONTENT_SCHEMA.map((g) => (
              <button
                  key={g.id}
                  onClick={() => setActiveGroup(g.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-left text-sm transition md:rounded-lg ${
                      g.id === activeGroup
                          ? 'bg-cyan-400/10 text-cyan-300'
                          : 'text-white/50 hover:bg-white/5 hover:text-white/80'
                  }`}
              >
                {g.title}
              </button>
          ))}
        </nav>

        <div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">{group.title}</h2>
            <div className="mt-6 flex flex-col gap-5">
              {group.fields.map((field) => (
                  <div key={field.key}>
                    {field.type === 'image' ? (
                        <ImageField
                            label={field.label}
                            value={values[field.key] ?? ''}
                            onChange={(url) => setField(field.key, url)}
                        />
                    ) : field.type === 'video' ? (
                        <VideoField
                            label={field.label}
                            value={values[field.key] ?? ''}
                            onChange={(url) => setField(field.key, url)}
                        />
                    ) : (
                        <>
                          <label className="mb-1.5 block text-sm text-white/70">{field.label}</label>
                          {field.type === 'textarea' ? (
                              <textarea
                                  rows={3}
                                  value={values[field.key] ?? ''}
                                  onChange={(e) => setField(field.key, e.target.value)}
                                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                              />
                          ) : (
                              <input
                                  value={values[field.key] ?? ''}
                                  onChange={(e) => setField(field.key, e.target.value)}
                                  className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"
                              />
                          )}
                        </>
                    )}
                  </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
                onClick={handleSave}
                disabled={saving}
                className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-60"
            >
              {saving ? 'Saving…' : 'Save changes'}
            </button>
            {status && (
                <p className={`text-sm ${status.type === 'success' ? 'text-cyan-300' : 'text-red-400'}`}>
                  {status.message}
                </p>
            )}
          </div>
        </div>
      </div>
  )
}