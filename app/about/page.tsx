import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="container" style={{padding:'28px 0'}}>
        <h1>Tentang Kami</h1>
        <p>Warung Sorabi & Tempe didirikan untuk melestarikan rasa sorabi tradisional dan tempe goreng khas kampung. Kami memakai resep turun-temurun dan bahan lokal berkualitas.</p>
      </section>
      <Footer />
    </main>
  );
}
