import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect, useCallback } from "react";
import { GoldenPetals } from "@/components/GoldenPetals";
import { SpinningMandala } from "@/components/SpinningMandala";
import { GaneshReveal } from "@/components/GaneshReveal";
import { MusicPlayer } from "@/components/MusicPlayer";
import Home from "@/components/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aashish & Aayushi — Shubha Vivah" },
      {
        name: "description",
        content: "You are warmly invited to celebrate the wedding of Aashish & Aayushi.",
      },
      { property: "og:title", content: "Aashish & Aayushi — Shubha Vivah" },
      {
        property: "og:description",
        content: "You are warmly invited to celebrate the wedding of Aashish & Aayushi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = useCallback(() => {
    const a = audioRef.current;
    if (a) {
      a.volume = 0.32;
      a.play().catch(() => {});
    }
    setIsRevealed(true);
  }, []);

  const handleDismiss = useCallback(() => setShowHome(true), []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.32;
    // Try to autoplay immediately (works when the browser allows it).
    a.play().catch(() => {});
    // Browsers often block autoplay until the first user gesture — start
    // music on the very first interaction anywhere if it is still paused.
    const startOnGesture = () => {
      if (a.paused) {
        a.play().catch(() => {});
      }
      window.removeEventListener("pointerdown", startOnGesture);
      window.removeEventListener("keydown", startOnGesture);
      window.removeEventListener("touchstart", startOnGesture);
    };
    window.addEventListener("pointerdown", startOnGesture);
    window.addEventListener("keydown", startOnGesture);
    window.addEventListener("touchstart", startOnGesture);
    return () => {
      window.removeEventListener("pointerdown", startOnGesture);
      window.removeEventListener("keydown", startOnGesture);
      window.removeEventListener("touchstart", startOnGesture);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsRevealed(true), 5200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" />
      <GoldenPetals />
      <SpinningMandala intensity={isRevealed ? 0.66 : 0.92} />
      <GaneshReveal isRevealed={isRevealed} onPlay={handlePlay} onDismiss={handleDismiss} />
      {showHome && (
        <div className="relative z-20 site-enter">
          <Home />
        </div>
      )}
      <MusicPlayer audioRef={audioRef} isRevealed={showHome} />
    </>
  );
}
