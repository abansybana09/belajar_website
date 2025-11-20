export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo" aria-hidden>🍽️</div>
          <div>
            <strong>Warung Sorabi & Tempe</strong>
            <div className="muted" style={{marginTop:6}}>Makanan tradisional lezat — nikmati rasa kampung</div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Alamat</h4>
            <p>Jl. Contoh No.1, Kota</p>
            <p>Jam Buka: 09:00 — 21:00</p>
          </div>

          <div className="footer-col">
            <h4>Kontak</h4>
            <p>WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></p>
            <p>Email: <a href="mailto:info@warungsorabi.example">info@warungsorabi.example</a></p>
          </div>

          <div className="footer-col">
            <h4>Sosial</h4>
            <ul className="social-list">
              <li><a href="#">Instagram <span aria-hidden>📸</span> <span className="muted">@warungsorabi</span></a></li>
              <li><a href="#">Facebook <span aria-hidden>👍</span> <span className="muted">Warung Sorabi & Tempe</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">© {year} Warung Sorabi & Tempe — Semua hak dilindungi.</div>
      </div>
    </footer>
  );
}
