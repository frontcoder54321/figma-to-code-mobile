import { Home, Search, Bell, MonitorPlay, Plus } from 'lucide-react'

const leftItems = [
  { icon: Home, label: 'Inicio', active: true },
  { icon: Search, label: 'Explorar', active: false },
]

const rightItems = [
  { icon: MonitorPlay, label: 'Streamings', active: false },
  { icon: Bell, label: 'Notificaciones', active: false },
]

export function BottomNav() {
  return (
    <div className="sticky bottom-0 z-20 px-4 pb-5 pt-3">
      <nav className="mx-auto flex h-[60px] max-w-[355px] items-center justify-between rounded-[22px] border border-[#3A373D] bg-[#1E1E2E] px-7">
        {/* left pair */}
        {leftItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            aria-current={active ? 'page' : undefined}
            className={active ? 'text-white' : 'text-[#9b99a6]'}
          >
            <Icon className="h-6 w-6" strokeWidth={active ? 2.4 : 1.9} />
          </button>
        ))}

        {/* center create button */}
        <button
          type="button"
          aria-label="Crear"
          className="flex h-[42px] w-[52px] items-center justify-center rounded-2xl bg-[#e8631a] text-white shadow-[0_4px_12px_rgba(232,99,26,0.35)] transition-colors hover:bg-[#f26f26]"
        >
          <Plus className="h-6 w-6" strokeWidth={2.6} />
        </button>

        {/* right pair */}
        {rightItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            aria-current={active ? 'page' : undefined}
            className={active ? 'text-white' : 'text-[#9b99a6]'}
          >
            <Icon className="h-6 w-6" strokeWidth={active ? 2.4 : 1.9} />
          </button>
        ))}
      </nav>
    </div>
  )
}
