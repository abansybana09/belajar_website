"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav container" style={{position:'relative'}}>
      <div className="brand">
        <div className="logo" aria-hidden />
        <div>
          <div style={{ fontWeight: 700, fontSize:16 }}>Warung Sorabi & Tempe</div>
          <div style={{ fontSize: 12, color: "#6b5e57" }}>Kuliner Tradisional</div>
        </div>
      </div>
      <button aria-label="menu" onClick={() => setOpen((v) => !v)} className="menu-toggle">☰</button>
      <nav className={`links ${open ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">Tentang</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/gallery">Galeri</Link>
        <Link href="/testimonials">Testimoni</Link>
        <Link href="/contact">Kontak</Link>
      </nav>
    </header>
  );
}
