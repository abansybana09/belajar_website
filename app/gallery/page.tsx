import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
  const imgs = [
    'https://images.unsplash.com/photo-1542444459-db5f5b79b9c9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599785209707-10b1f3e9d6db?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1604908177522-1f4c3c2f9b47?q=80&w=1200&auto=format&fit=crop'
  ];

  return (
    <main>
      <Navbar />
      <section className="container" style={{padding:'20px 0'}}>
        <h1>Galeri</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
          {imgs.map((s,i)=>(<img key={i} src={s} alt={`galeri-${i}`} style={{width:'100%',borderRadius:8}}/>))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
