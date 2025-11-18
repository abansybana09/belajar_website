"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav container" style={{ position: "relative" }}>
      <div className="brand">
        <div className="logo" aria-hidden="true" />
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Warung Sorabi & Tempe</div>
          <div style={{ fontSize: 12, color: "#6b5e57" }}>Kuliner Tradisional</div>
        </div>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <nav
        id="primary-navigation"
        role="navigation"
        aria-label="Navigasi utama"
        className={`links ${open ? "open" : ""}`}
      >
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
