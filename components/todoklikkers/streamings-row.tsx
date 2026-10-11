import Image from 'next/image'
import { Plus } from 'lucide-react'

type Stream = {
  name: string
  viewers: string
  avatar: string
  thumb: string
}

const streams: Stream[] = [
  { name: 'Gaby', viewers: '4.4K', avatar: '/figma/avatar-paloma.png', thumb: '/figma/stream-1.png' },
  { name: 'Gaby', viewers: '4,4K', avatar: '/figma/avatar-ricardo.png', thumb: '/figma/stream-2.png' },
  { name: 'Gaby', viewers: '44K', avatar: '/figma/avatar-paloma.png', thumb: '/figma/stream-3.png' },
]

function StreamCard({ stream }: { stream: Stream }) {
  return (
    <div className="relative aspect-[94/158] w-[94px] flex-none overflow-hidden rounded-2xl bg-[#e9e9e9]">
      <Image
        src={stream.thumb || '/placeholder.svg'}
        alt={`Streaming de ${stream.name}`}
        fill
        sizes="94px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <div className="absolute left-2 top-2 h-[38px] w-[38px] overflow-hidden rounded-full ring-2 ring-white/80">
        <Image
          src={stream.avatar || '/placeholder.svg'}
          alt=""
          width={38}
          height={38}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-2 left-2 right-2">
        <p className="text-[11px] font-extrabold leading-tight text-white/90">{stream.name}</p>
        <p className="text-[13px] leading-tight text-white/80">{stream.viewers}</p>
      </div>
    </div>
  )
}

export function StreamingsRow() {
  return (
    <section className="bg-[#fefefe] pb-4 pt-3">
      <h2 className="px-4 pb-3 text-[13px] font-semibold text-[#696b6d]">Streamings</h2>
      <div className="flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Create streaming card */}
        <button
          type="button"
          className="relative aspect-[94/158] w-[94px] flex-none overflow-hidden rounded-2xl text-left"
        >
          <span
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #8f8378 0%, #6f6355 100%)' }}
          />
          <span className="absolute left-2 top-2 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/15 ring-2 ring-white/40">
            <Plus className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="absolute bottom-2 left-2 right-2 text-[11px] font-bold leading-[14px] text-[#d3c5b1]">
            Hacer
            <br />
            un streaming
          </span>
        </button>

        {streams.map((s, i) => (
          <StreamCard key={i} stream={s} />
        ))}
      </div>
    </section>
  )
}
