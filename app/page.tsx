import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import MenuGrid from './components/MenuGrid';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MapEmbed from './components/MapEmbed';

export default function Home() {
  const slides = [
    '/images/slide1.svg',
    '/images/slide2.svg',
    '/images/slide3.svg'
  ];

  return (
    <main>
      <Navbar />
      <Hero />
      <Carousel items={slides} />
      <MenuGrid />
      <MapEmbed />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
