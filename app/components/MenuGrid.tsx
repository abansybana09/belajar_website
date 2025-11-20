"use client";
import MenuCard from "./MenuCard";

const sample = [
  { name: 'Sorabi Original', price: 'Rp 10.000', img: 'https://images.unsplash.com/photo-1604908177522-1f4c3c2f9b47?q=80&w=800&auto=format&fit=crop' , desc:'Sorabi manis hangat, klasik.'},
  { name: 'Sorabi Keju', price: 'Rp 14.000', img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop', desc:'Taburan keju leleh.'},
  { name: 'Tempe Krispi', price: 'Rp 8.000', img: 'https://images.unsplash.com/photo-1604908177522-1f4c3c2f9b47?q=80&w=800&auto=format&fit=crop', desc:'Tempe goreng renyah.'},
  { name: 'Sorabi Cokelat', price: 'Rp 15.000', img: 'https://images.unsplash.com/photo-1599785209707-10b1f3e9d6db?q=80&w=800&auto=format&fit=crop', desc:'Saus cokelat pilihan.'},
  { name: 'Paket Hemat 4pcs', price: 'Rp 35.000', img: 'https://images.unsplash.com/photo-1542444459-db5f5b79b9c9?q=80&w=800&auto=format&fit=crop', desc:'Campuran sorabi & tempe.'},
  { name: 'Es Teh Manis', price: 'Rp 5.000', img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop', desc:'Segar menemani.'}
];

export default function MenuGrid() {
  return (
    <section className="section container" aria-labelledby="menu-heading">
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, marginBottom:16}}>
        <div>
          <h2 id="menu-heading">Menu Kami</h2>
          <p style={{margin:0, color:'var(--muted)'}}>Pilihan enak & segar untuk menemani hari Anda.</p>
        </div>

        <div className="controls" role="group" aria-label="Filter menu">
          <button className="btn btn-ghost" aria-pressed="true">Semua</button>
          <button className="btn btn-ghost">Manis</button>
          <button className="btn btn-ghost">Gurih</button>
          <button className="btn btn-ghost">Minuman</button>
        </div>
      </header>

      <div className="grid" role="list">
        {sample.map((m) => (
          <div key={m.name} role="listitem">
            <MenuCard name={m.name} price={m.price} img={m.img} desc={m.desc} />
          </div>
        ))}
      </div>
    </section>
  );
}
