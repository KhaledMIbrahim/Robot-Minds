import { useRef, useState } from 'react'

export default function ImageField({
                                     label,
                                     value,
                                     onChange,
                                   }: {
  label: string
  value: string
  onChange: (url: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  async function handleFile(file: File) {
    setUploading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/admin/content/upload', {
        method: 'POST',
        credentials: 'same-origin',
        body: formData,
      })
      const data = await res.json().catch(() => null)
      if (!res.ok) {
        throw new Error(data?.message ?? 'Upload failed.')
      }
      onChange(data.url)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed.')
    } finally {
      setUploading(false)
    }
  }

  return (
      <div>
        <label className="mb-1.5 block text-sm text-white/70">{label}</label>
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
            {value && <img src={value} alt={label} className="h-full w-full object-cover" />}
          </div>
          <div className="flex-1">
            <input
                ref={inputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFile(file)
                  e.target.value = ''
                }}
            />
            <button
                type="button"
                disabled={uploading}
                onClick={() => inputRef.current?.click()}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white transition hover:border-white/40 disabled:opacity-50"
            >
              {uploading ? 'Uploading…' : 'Upload image'}
            </button>
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
          </div>
        </div>
      </div>
  )
}
