"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-card" style={{display:'flex', gap:20, alignItems:'center', padding:24, position:'relative'}}>
        <div className="col" style={{zIndex:2}}>
          <div style={{display:'flex', gap:10, alignItems:'center', marginBottom:12}}>
            <span className="hero-badge pulse">Terlaris</span>
            <span className="hero-highlight">Buka setiap hari</span>
          </div>

          <h1 style={{marginBottom:10}}>Warung <span style={{color:'var(--brown-medium)'}}>Sorabi</span> & <span style={{color:'var(--brown-medium)'}}>Tempe</span></h1>
          <p style={{marginBottom:16}}>Nikmati sorabi panas yang lembut dan tempe goreng renyah—resep tradisional, disajikan hangat setiap hari.</p>

          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <Link href="/menu" className="btn btn-primary hero-cta pulse">Lihat Menu</Link>
            <a className="btn btn-ghost hero-cta" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">Pesan via WhatsApp</a>
          </div>
        </div>

        <div className="col hero-figure" style={{flex:'0 0 520px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{position:'relative', width:'100%', maxWidth:520}}>
            <div className="hero-decor float" aria-hidden="true">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="160" height="160">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffe6d1" />
                    <stop offset="100%" stopColor="#ffd4a6" />
                  </linearGradient>
                </defs>
                <path fill="url(#g1)" d="M45.3,-49.6C58.8,-39.3,71.6,-29.2,75.1,-16.1C78.6,-3.1,72.9,13.9,62.3,25.7C51.6,37.5,36.1,44.1,21.6,49.6C7.1,55.1,-7.2,59.6,-20.7,58.2C-34.3,56.8,-47.1,49.5,-56.4,37.9C-65.8,26.3,-71.8,10.4,-71.3,-6.4C-70.8,-23.2,-63.8,-40.8,-50.2,-51.6C-36.5,-62.4,-18.2,-66.4,-0.6,-65.8C17.1,-65.1,34.2,-59.9,45.3,-49.6Z" transform="translate(100 100)"/>
              </svg>
            </div>

            <img src="/images/hero.jpg" alt="Sorabi panas" style={{width:'100%', maxWidth:520, borderRadius:12, boxShadow:'0 12px 30px rgba(91,58,41,0.12)', position:'relative', zIndex:3, transition:'transform 260ms ease'}} />
          </div>
        </div>

      </div>
    </section>
  );
}
