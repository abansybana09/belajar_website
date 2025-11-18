import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Order() {
  const waNumber = '6281234567890';
  const text = encodeURIComponent('Halo, saya ingin memesan dari Warung Sorabi & Tempe. Saya pesan: ');
  return (
    <main>
      <Navbar />
      <section className="container" style={{padding:'20px 0'}}>
        <h1>Pemesanan Online</h1>
        <p>Klik tombol di bawah untuk memesan via WhatsApp. Isi pesanan Anda di chat.</p>
        <a className="cta" href={`https://wa.me/${waNumber}?text=${text}`} target="_blank" rel="noreferrer">Pesan via WhatsApp</a>
      </section>
      <Footer />
    </main>
  );
}
