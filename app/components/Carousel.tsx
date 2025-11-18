"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Carousel({ items }: { items: string[] }) {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="container">
      <div className="carousel" style={{ marginBottom: 16 }}>
        <div className="slides" ref={ref} style={{ transform: `translateX(-${idx * 100}%)` }}>
          {items.map((src, i) => (
            <div key={i} style={{ minWidth: "100%" }}>
              <Image src={src} alt={`slide-${i}`} width={1400} height={500} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
