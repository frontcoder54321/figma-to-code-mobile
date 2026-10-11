import { Search, Bell } from 'lucide-react'
import { Coin } from './coin'

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-[53px] items-center gap-3 border-b border-[#f0f1f2] bg-[#fefefe] px-4">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-[#f3f6f6]">
        <Coin size={26} />
      </div>
      <h1 className="flex-1 text-center text-[18px] font-bold tracking-tight text-[#434649]">
        TodoKlikkers
      </h1>
      <button
        type="button"
        aria-label="Buscar"
        className="text-[#434649] transition-opacity hover:opacity-60"
      >
        <Search className="h-[22px] w-[22px]" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Notificaciones"
        className="text-[#434649] transition-opacity hover:opacity-60"
      >
        <Bell className="h-[20px] w-[20px]" strokeWidth={2} />
      </button>
    </header>
  )
}
