import { AppHeader } from '@/components/todoklikkers/app-header'
import { StreamingsRow } from '@/components/todoklikkers/streamings-row'
import { FeedPost, type Post } from '@/components/todoklikkers/feed-post'
import { BottomNav } from '@/components/todoklikkers/bottom-nav'

const posts: Post[] = [
  {
    name: 'Paloma Rincón',
    handle: '@princon',
    avatar: '/figma/avatar-paloma.png',
    image: '/figma/post-1.png',
    slides: 4,
    currentSlide: 0,
  },
  {
    name: 'Ricardo Vega',
    handle: '@richvega',
    avatar: '/figma/avatar-ricardo.png',
    image: '/figma/stream-3.png',
    slides: 4,
    currentSlide: 0,
    coins: [
      { icon: 'coin', value: '100' },
      { icon: 'coin', value: '120' },
    ],
    caption: {
      username: 'Username',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    },
    timeAgo: '10 minutes ago',
  },
]

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center bg-[#eceef0]">
      <div className="flex min-h-screen w-full max-w-[430px] flex-col bg-[#fefefe] shadow-sm">
        <AppHeader />
        <main className="flex-1">
          <StreamingsRow />
          <div className="h-2 bg-[#f3f4f5]" />
          <div className="flex flex-col divide-y divide-[#f3f4f5]">
            {posts.map((post, i) => (
              <FeedPost key={i} post={post} />
            ))}
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
