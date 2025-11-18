import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapEmbed from '../components/MapEmbed';

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="container" style={{padding:'20px 0'}}>
        <h1>Kontak</h1>
        <p>Hubungi kami via WhatsApp untuk pemesanan cepat.</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <div style={{background:'#fff', padding:12, borderRadius:8}}>
            <h4>Alamat</h4>
            <div>Jl. Contoh No.1, Kota</div>
            <h4 style={{marginTop:12}}>Telepon / WhatsApp</h4>
            <div>+62 812-3456-7890</div>
          </div>
          <div>
            <MapEmbed />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
