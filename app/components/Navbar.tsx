"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { totalItems } = useCart();

  return (
    <header className="nav container" style={{ position: "relative" }}>
      <div className="brand">
        <div className="logo" aria-hidden="true">🍽️</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Warung Sorabi & Tempe</div>
          <div style={{ fontSize: 12, color: "#6b5e57" }}>Kuliner Tradisional</div>
        </div>
      </div>

      <button
        type="button"
        className={`menu-toggle ${open ? "open" : ""}`}
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav
        id="primary-navigation"
        role="navigation"
        aria-label="Navigasi utama"
        className={`links ${open ? "open" : ""}`}
      >
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>Tentang</Link>
        <Link href="/menu" className={pathname === "/menu" ? "active" : ""}>Menu</Link>
        <Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>Galeri</Link>
        <Link href="/testimonials" className={pathname === "/testimonials" ? "active" : ""}>Testimoni</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Kontak</Link>
        <Link href="/order" style={{ marginLeft: 8, position: "relative", display: "inline-flex", alignItems: "center" }}>
          <span aria-hidden="true" style={{ fontSize: 20 }}>🛒</span>
          {totalItems > 0 && (
            <span style={{
              background: "#ff4d4f",
              color: "white",
              borderRadius: 999,
              padding: "2px 6px",
              fontSize: 12,
              marginLeft: 6,
            }}>{totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}
