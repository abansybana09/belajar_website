"use client";
type Props = { id?: string; name: string; price: string; img?: string; desc?: string };

export default function MenuCard({ name, price, img, desc }: Props) {
  const waNumber = "6281234567890"; // replace with your number
  const text = encodeURIComponent(`Halo, saya mau pesan: ${name}`);
  return (
    <article className="card fade-up" data-anim style={{display:'flex', flexDirection:'column'}}>
      <div style={{height:160, overflow:'hidden', borderRadius:8}}>
        <img src={img || "/images/slide1.svg"} alt={name} style={{width:'100%', height:'100%', objectFit:'cover'}} />
      </div>
      <div style={{padding:'8px 0 0 0'}}>
        <div className="title">{name}</div>
        <div style={{fontSize:14, color:'#7a6b61'}}>{desc}</div>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12}}>
        <div className="price">{price}</div>
        <a className="order" href={`https://wa.me/${waNumber}?text=${text}`} target="_blank" rel="noreferrer">Pesan</a>
      </div>
    </article>
  );
}
