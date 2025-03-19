"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

// Definições de tipos para a API do YouTube
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (elementId: string, options: any) => {
        playVideo: () => void;
        pauseVideo: () => void;
        setVolume: (volume: number) => void;
        mute: () => void;
        unMute: () => void;
        destroy: () => void;
      };
      PlayerState: {
        PLAYING: number;
      };
    };
  }
}

interface MusicPlayerProps {
  title: string
  videoId: string
  isPremium: boolean
}

export function MusicPlayer({ title, videoId, isPremium }: MusicPlayerProps) {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 1. Carregar a API do YouTube se ainda não estiver carregada
    if (typeof window !== 'undefined' && !window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // ID único para o container do player
    const playerId = `youtube-player-${Date.now()}`
    
    // 2. Criar um div para o player
    if (containerRef.current) {
      const playerDiv = document.createElement('div')
      playerDiv.id = playerId
      playerDiv.style.width = '100%'
      playerDiv.style.height = '100%'
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(playerDiv)
    }

    // 3. Inicializar o player quando a API estiver pronta
    const initializePlayer = () => {
      if (!containerRef.current) return
      
      playerRef.current = new window.YT.Player(playerId, {
        videoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            // Definir o volume para 10% imediatamente
            event.target.setVolume(10)
            // Iniciar a reprodução
            event.target.playVideo()
            setIsLoaded(true)
          },
          onStateChange: (event: any) => {
            // Verificar se o vídeo está tocando
            if (event.data === window.YT.PlayerState.PLAYING) {
              // Definir o volume novamente por segurança
              event.target.setVolume(10)
            }
          },
        },
      })
    }

    // 4. Definir o callback para quando a API estiver pronta
    if (window.YT && window.YT.Player) {
      // A API já está carregada, inicializar o player diretamente
      initializePlayer()
    } else {
      // A API ainda não está carregada, definir o callback
      window.onYouTubeIframeAPIReady = initializePlayer
    }

    // 5. Intervalo para verificar e corrigir o volume
    const volumeInterval = setInterval(() => {
      if (playerRef.current && isLoaded) {
        playerRef.current.setVolume(10)
      }
    }, 1000) // Verificar a cada segundo

    // 6. Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
      clearInterval(volumeInterval)
      window.onYouTubeIframeAPIReady = () => {}
    }
  }, [videoId])

  return (
    <Card className="p-4 bg-white shadow-md">
      <div className="flex flex-col space-y-4">
        {/* Título da música */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>

        {/* Player do YouTube */}
        <div className="relative w-full pt-[56.25%]">
          <div 
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 