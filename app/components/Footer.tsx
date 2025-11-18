export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'flex', gap:20, flexWrap:'wrap'}}>
        <div className="col">
          <strong>Warung Sorabi & Tempe</strong>
          <div style={{marginTop:8}}>Alamat: Jl. Contoh No.1, Kota</div>
          <div>Jam Buka: 09:00 - 21:00</div>
        </div>
        <div className="col">
          <strong>Kontak</strong>
          <div style={{marginTop:8}}>WhatsApp: +62 812-3456-7890</div>
          <div>Email: info@warungsorabi.example</div>
        </div>
        <div className="col">
          <strong>Sosial</strong>
          <div style={{marginTop:8}}>Instagram: @warungsorabi</div>
          <div>Facebook: Warung Sorabi & Tempe</div>
        </div>
      </div>
    </footer>
  );
}
