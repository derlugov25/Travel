import { Globe } from "@/components/ui/globe"

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-7xl items-center justify-center overflow-hidden rounded-lg border bg-background px-80 pb-[28rem] pt-12 md:pb-[36rem] md:shadow-xl mx-auto mt-8">
      <div className="flex flex-col items-center -mt-8">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-[10rem] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Expi
        </span>
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-600 to-gray-400 bg-clip-text text-center text-2xl font-medium leading-relaxed text-transparent mt-4">
          AI-Powered Travel Experiences
        </span>
      </div>
      <Globe className="top-48" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  )
}
