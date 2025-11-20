import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapEmbed from '../components/MapEmbed';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="hero container" style={{paddingTop:18, paddingBottom:6}}>
        <div className="hero-card" style={{padding:18}}>
          <div style={{display:'flex', gap:20, alignItems:'center', flexWrap:'wrap'}}>
            <div style={{flex:1, minWidth:260}}>
              <h1>Kontak Kami</h1>
              <p>Butuh bantuan atau mau pesan cepat? Hubungi kami langsung lewat WhatsApp atau kunjungi lokasi warung.</p>

              <div style={{display:'flex', gap:12, marginTop:12, flexWrap:'wrap'}}>
                <a className="btn btn-primary" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Kirim Pesan via WhatsApp</a>
                <a className="btn btn-ghost" href="/menu">Lihat Menu</a>
              </div>
            </div>

            <div style={{flex:'0 0 360px', minWidth:240}}>
              <div style={{background:'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))', padding:16, borderRadius:12}}>
                <h3 style={{marginBottom:6}}>Informasi Kontak</h3>
                <div style={{display:'grid', gap:10}}>
                  <div className="card" style={{padding:12}}>
                    <strong className="title">Alamat</strong>
                    <div>Jl. Contoh No.1, Kota</div>
                  </div>

                  <div className="card" style={{padding:12}}>
                    <strong className="title">Telepon / WhatsApp</strong>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" style={{color:'var(--brown-medium)', textDecoration:'none'}}>+62 812-3456-7890</a>
                  </div>

                  <div className="card" style={{padding:12}}>
                    <strong className="title">Jam Buka</strong>
                    <div>09:00 — 21:00 (Setiap hari)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Lokasi & Arah</h2>
        <p style={{marginBottom:14}}>Temukan kami dengan mudah — peta di samping menampilkan lokasi perkiraan, ganti embed map pada komponen bila perlu.</p>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
          <div>
            <div className="card" style={{padding:16}}>
              <h3 style={{marginTop:0}}>Kirim Pesan Cepat</h3>
              <p style={{color:'var(--muted)'}}>Gunakan tombol WhatsApp untuk bertanya tentang menu, ketersediaan, atau pemesanan.</p>
              <div style={{marginTop:10}}>
                <a className="btn btn-primary" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Chat WhatsApp</a>
                <a className="btn btn-ghost" href="mailto:info@warungsorabi.example" style={{marginLeft:10}}>Kirim Email</a>
              </div>
            </div>

            <div style={{marginTop:12}} className="card">
              <h4 style={{margin:8}}>Catatan</h4>
              <div style={{padding:'0 8px 12px 8px', color:'var(--muted)'}}>Jika peta tidak akurat, silakan tekan tombol WhatsApp untuk meminta petunjuk arah langsung dari kami.</div>
            </div>
          </div>

          <div>
            <MapEmbed />
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
