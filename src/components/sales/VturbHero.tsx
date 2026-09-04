import { useEffect, useRef } from "react";

export function VturbHero() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    const existing = document.getElementById("vturb-hero-script");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "vturb-hero-script";
    s.src = "https://scripts.converteai.net/0f8477cd-e3e0-47cf-9163-945270490e3f/players/6a9723d3c1db2ea9dd29178b/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div ref={ref} className="w-full">
      <vturb-smartplayer
        id="vid-6a9723d3c1db2ea9dd29178b"
        style={{
          display: "block",
          margin: "0 auto",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <div
          className="vturb-player-placeholder"
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "177.77777777777777%",
            zIndex: 0,
            backgroundColor: "black",
          }}
        />
      </vturb-smartplayer>
    </div>
  );
}
