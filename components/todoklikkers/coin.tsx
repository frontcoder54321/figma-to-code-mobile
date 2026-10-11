export function Coin({ size = 20 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #f6d78a 0%, #e9b84c 55%, #c8922f 100%)',
        boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.45), inset 0 -1px 2px rgba(0,0,0,0.15)',
      }}
    >
      <span
        className="font-bold leading-none text-[#8a5a1a]"
        style={{ fontSize: size * 0.52 }}
      >
        K
      </span>
    </span>
  )
}
