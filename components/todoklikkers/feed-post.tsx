import Image from 'next/image'
import { MoreHorizontal, Send } from 'lucide-react'
import { Coin } from './coin'

export type Post = {
  name: string
  handle: string
  avatar: string
  image: string
  slides?: number
  currentSlide?: number
  coins?: { icon: 'coin' | 'gift'; value: string }[]
  caption?: { username: string; text: string }
  timeAgo?: string
}

function Dots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-[7px] w-[7px] rounded-full ${
            i === current ? 'bg-[#9aa7b2]' : 'bg-[#d8dde1]'
          }`}
        />
      ))}
    </div>
  )
}

export function FeedPost({ post }: { post: Post }) {
  return (
    <article className="bg-[#fefefe]">
      {/* header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="h-[38px] w-[38px] overflow-hidden rounded-full">
          <Image
            src={post.avatar || '/placeholder.svg'}
            alt={post.name}
            width={38}
            height={38}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 leading-tight">
          <p className="text-[14px] font-bold text-[#595c5f]">{post.name}</p>
          <p className="text-[14px] text-[#9aa7b2]">{post.handle}</p>
        </div>
        <button
          type="button"
          aria-label="Más opciones"
          className="text-[#c2c6ca] transition-opacity hover:opacity-60"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* media */}
      <div className="relative aspect-[4/3] w-full bg-[#e9e9e9]">
        <Image
          src={post.image || '/placeholder.svg'}
          alt={`Publicación de ${post.name}`}
          fill
          sizes="(max-width: 460px) 100vw, 402px"
          className="object-cover"
        />
        {post.slides && post.slides > 1 ? (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 rounded-full bg-black/25 px-2 py-1 backdrop-blur-sm">
              {Array.from({ length: post.slides }).map((_, i) => (
                <span
                  key={i}
                  className={`h-[5px] w-[5px] rounded-full ${
                    i === (post.currentSlide ?? 0) ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* action row */}
      {post.coins ? (
        <div className="flex items-center gap-4 px-4 pt-3">
          {post.coins.map((c, i) => (
            <button
              key={i}
              type="button"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              <Coin size={20} />
              <span className="text-[13px] text-[#a2aeb9]">{c.value}</span>
            </button>
          ))}
          <div className="ml-auto">
            {post.slides ? <Dots total={post.slides} current={post.currentSlide ?? 0} /> : null}
          </div>
        </div>
      ) : null}

      {/* carousel button (e.g. 1/4) */}
      {post.slides && !post.coins ? (
        <div className="px-4 pt-3">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#dbe2da] bg-[#f3f6f6] px-3 py-1.5">
            <Coin size={18} />
            <span className="text-[15px] text-[#b8c3c8]">
              {(post.currentSlide ?? 0) + 1}/{post.slides}
            </span>
          </div>
        </div>
      ) : null}

      {/* caption */}
      {post.caption ? (
        <div className="px-4 pt-2 text-[12px] leading-relaxed text-[#828282]">
          <span className="font-bold text-[#616161]">{post.caption.username} </span>
          <span>{post.caption.text} </span>
          <button type="button" className="text-[#b9b9b9]">
            more
          </button>
        </div>
      ) : null}

      {/* add comment */}
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="h-6 w-6 overflow-hidden rounded-full bg-[#e9e9e9]">
          <Image
            src={post.avatar || '/placeholder.svg'}
            alt=""
            width={24}
            height={24}
            className="h-full w-full object-cover"
          />
        </div>
        <input
          type="text"
          placeholder="Add comment..."
          className="flex-1 bg-transparent text-[12px] text-[#808080] placeholder:text-[#ccc] focus:outline-none"
        />
        <button type="button" aria-label="Enviar comentario" className="text-[#c2c6ca]">
          <Send className="h-4 w-4" />
        </button>
      </div>

      {post.timeAgo ? (
        <p className="px-4 pb-4 text-[10px] text-[#d2d2d2]">{post.timeAgo}</p>
      ) : null}
    </article>
  )
}
