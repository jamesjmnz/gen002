import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "Arjun Mehta",
    username: "@arjdev",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Sara Lin",
    username: "@sara.codes",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Devon Carter",
    username: "@devninja",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Priya Shah",
    username: "@priyacodes",
    img: "https://images.unsplash.com/photo-1544005313942-b8d87734a5a2?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Leo Martin",
    username: "@leobuilds",
    img: "https://images.unsplash.com/photo-1472099644761-15a19d654956?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Chloe Winters",
    username: "@chloewinters",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Ayaan Malik",
    username: "@ayaan_dev",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "Monica Reeves",
    username: "@monicareeves",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face",
  },
  {
    name: "James Roy",
    username: "@jamesrdev",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop&crop=face",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialCard = ({
  img,
}: {
  img: string
}) => {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl">
      <img
        src={img || "/placeholder.svg"}
        alt="User testimonial"
        className="h-80 w-96 object-cover aspect-video grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-black to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-black to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Testimonials</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            What our users say
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            From intuitive design to powerful features, our app has become an essential tool for users around the world.
          </p>
        </div>

        <div className="my-16 flex max-h-[800px] justify-center gap-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="-mt-8 flex justify-center">
          <button className="group relative inline-flex items-center gap-2 rounded-full border border-black/30 bg-black/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-black/60 hover:bg-black/10 active:scale-95">
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
            <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
            Share your experience
          </button>
        </div>
      </div>
    </section>
  )
}
