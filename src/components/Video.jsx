"use client";
import { useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function Video({videoLink}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    isPlaying ? videoRef.current.pause() : videoRef.current.play(); // 3. Use the ref to call DOM functions
    setIsPlaying(!isPlaying); // switch between playing and paused
  }
  return (
    <div>
      <button onClick={handleClick}> {isPlaying ? "Pause" : "Play"} </button>

      <video width="320" height="240" controls ref={videoRef}>
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
}
