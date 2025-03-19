"use client"

import { Card } from "@/components/ui/card"

interface MusicPlayerProps {
  title: string
  videoId: string
  isPremium: boolean
}

export function MusicPlayer({ title, videoId, isPremium }: MusicPlayerProps) {
  return (
    <Card className="p-4 bg-white shadow-md">
      <div className="flex flex-col space-y-4">
        {/* Título da música */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>

        {/* Player do YouTube */}
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&volume=5`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Card>
  )
} 