"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-card" style={{display:'flex', gap:20, alignItems:'center', padding:20}}>
        <div style={{flex:1}}>
          <h1>Warung Sorabi & Tempe</h1>
          <p style={{marginBottom:16}}>Rasakan sorabi panas dan tempe goreng renyah, dibuat setiap hari dengan bahan pilihan.</p>
          <div style={{display:'flex', gap:10}}>
            <a className="btn btn-primary" href="/menu">Lihat Menu</a>
            <a className="btn btn-ghost" href="/order">Pesan via WhatsApp</a>
          </div>
        </div>
        <div style={{flex:'0 0 520px', display:'flex', justifyContent:'center'}}>
          <img src="/images/hero.jpg" alt="Sorabi panas" style={{width:'100%', maxWidth:520, borderRadius:12, boxShadow:'0 12px 30px rgba(91,58,41,0.12)'}} />
        </div>
      </div>
    </section>
  );
}
