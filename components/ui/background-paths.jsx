"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(0, 122, 255, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white dark:text-black"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.8}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.6, 0.8, 0.6],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({ title = ["bi0s", "CTF Team"] }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black dark:bg-neutral-50">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          {title.map((line, lineIndex) => (
            <h1
              key={lineIndex}
              className={`${
                lineIndex > 0 ? "mt-2" : ""
              } text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter`}
            >
              {line.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${lineIndex}-${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay:
                          lineIndex * 0.2 +
                          wordIndex * 0.1 +
                          letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300/80 dark:from-black dark:to-black/80"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          ))}

          {/* Buttons Section */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto 10 p-px rounded-2xl transition-shadow duration-300">
      {/* Discord Button */}
      <a
        href="https://discord.gg/JNhaMkeU7U"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors w-full sm:w-auto"
      >
        <FaDiscord className="text-base" />
        <span>Discord</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/GEE2JXLYvuYFHZ7zFvhbZI"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA955] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors w-full sm:w-auto"
      >
        <FaWhatsapp className="text-base" />
        <span>WhatsApp</span>
      </a>
    </div>

        </motion.div>
      </div>
    </div>
  );
}
