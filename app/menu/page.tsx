import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuGrid from '../components/MenuGrid';

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <section style={{padding:'20px 0'}}>
        <MenuGrid />
      </section>
      <Footer />
    </main>
  );
}
