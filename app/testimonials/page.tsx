import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Testimonials() {
  const data = [
    {name:'Siti', text:'Sorabi enak dan hangat, favorit keluarga!'},
    {name:'Budi', text:'Tempenya gurih banget.'}
  ];
  return (
    <main>
      <Navbar />
      <section className="container" style={{padding:'20px 0'}}>
        <h1>Testimoni</h1>
        <div style={{display:'grid', gap:12}}>
          {data.map((t, i) => (
            <div key={i} style={{padding:12, background:'#fff', borderRadius:8}}>
              <strong>{t.name}</strong>
              <p style={{margin:6}}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
