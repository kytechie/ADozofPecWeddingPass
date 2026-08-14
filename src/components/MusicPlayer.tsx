"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/honeybee.mp3"
      />

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="
fixed
bottom-2
sm:bottom-4
md:bottom-6

right-2
sm:right-4
md:right-6

z-50
"
>
      <div
  className="
w-[180px]
sm:w-[220px]
md:w-auto

rounded-full
border
border-[#E8DDBF]
bg-white/90
backdrop-blur-xl
shadow-[0_12px_35px_rgba(0,0,0,0.12)]

px-3 md:px-5
py-2 md:py-4

flex
items-center
gap-3
"
>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="
flex
h-10 w-10
md:h-12 md:w-12
items-center
justify-center
rounded-full
bg-[#C9A96A]
text-white
transition
hover:scale-105
"
          >
            {isPlaying ? (
              <Pause size={15} />
            ) : (
              <Play size={15} className="ml-1" />
            )}
          </button>

          <div className="leading-tight flex-1 min-w-0">

            <p className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-[8px] md:text-[10px] text-[#C9A96A]">
              Now Playing
            </p>

           <p className="text-xs md:text-sm font-medium text-[#2F2A27] truncate">
  Honeybee
</p>

            <p className="text-[10px] md:text-xs text-[#8A817A] truncate">
  Olivia Dean
</p>

          </div>

          <Volume2
  size={16}
  className="text-[#C9A96A] shrink-0"
/>

        </div>
      </motion.div>
    </>
  );
}