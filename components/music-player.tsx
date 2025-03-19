"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MusicPlayerProps {
  title: string
  videoId: string
  isPremium: boolean
}

export function MusicPlayer({ title, videoId, isPremium }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Inicia a música automaticamente após 1 segundo
    const timer = setTimeout(() => {
      setIsPlaying(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-gray-500" onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
          {title}
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500" onClick={toggleMute}>
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=${isMuted ? 1 : 0}&volume=5`}
        width="0"
        height="0"
        allow="autoplay"
        style={{ display: 'none' }}
      />
    </div>
  )
} 