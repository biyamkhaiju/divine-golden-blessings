import { useState, useEffect, RefObject } from "react";

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
  isRevealed: boolean;
}

export function MusicPlayer({ audioRef, isRevealed }: Props) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isRevealed) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, [isRevealed]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
    } else {
      a.volume = 0.32;
      a.play().catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause background music" : "Play background music"}
      title={playing ? "Pause music" : "Play music"}
      className="music-player-button"
      style={{
        position: "fixed",
        bottom: "22px",
        right: "22px",
        zIndex: 100,
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: `1.5px solid ${playing ? "rgba(212,175,55,0.7)" : "rgba(212,175,55,0.35)"}`,
        background: "rgba(28,6,8,0.78)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: playing
          ? "0 0 16px rgba(212,175,55,0.55), 0 0 4px rgba(212,175,55,0.25)"
          : "0 2px 12px rgba(0,0,0,0.4)",
        transition: "all 0.4s ease",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 9v6h4l5 5V4L7 9H3Z" fill="#D4AF37" />
          <path
            d="M16.5 12A4.5 4.5 0 0 0 14 8.07v7.86A4.5 4.5 0 0 0 16.5 12Z"
            fill="#D4AF37"
            opacity=".7"
          />
          <path
            d="M14 3.23v2.06A7 7 0 0 1 19 12a7 7 0 0 1-5 6.71v2.06A9 9 0 0 0 21 12 9 9 0 0 0 14 3.23Z"
            fill="#D4AF37"
            opacity=".4"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 9v6h4l5 5V4L7 9H3Z" fill="#D4AF37" opacity=".45" />
          <line
            x1="23"
            y1="9"
            x2="17"
            y2="15"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="17"
            y1="9"
            x2="23"
            y2="15"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {playing && (
        <span
          className="music-player-ring"
          style={{
            position: "absolute",
            inset: "-5px",
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.38)",
            animation: "mp-ring 3.2s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
      )}
      <style>{`@keyframes mp-ring { 0%,100%{transform:scale(1);opacity:.55} 50%{transform:scale(1.3);opacity:0} }`}</style>
    </button>
  );
}
