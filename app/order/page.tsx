"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../components/CartContext';

export default function Order() {
  const { items, clearCart, totalPrice } = useCart();
  const waNumber = '6281234567890';

  const buildMessage = () => {
    if (items.length === 0) return 'Halo, saya ingin memesan dari Warung Sorabi & Tempe.';
    const list = items.map((it) => `- ${it.name} x${it.quantity} (${it.price})`).join('%0A');
    const totalFormatted = totalPrice > 0 ? `Total sekitar: Rp ${totalPrice.toLocaleString()}` : '';
    return encodeURIComponent(`Halo, saya ingin memesan:%0A${list}%0A${totalFormatted}`);
  };

  const checkoutUrl = `https://wa.me/${waNumber}?text=${buildMessage()}`;

  return (
    <main>
      <Navbar />
      <section className="container" style={{ padding: '20px 0' }}>
        <h1>Pemesanan Online</h1>
        {items.length === 0 ? (
          <p>Keranjang kosong. Silakan tambahkan menu terlebih dahulu.</p>
        ) : (
          <div>
            <ul>
              {items.map((it) => (
                <li key={it.name} style={{ marginBottom: 8 }}>
                  <strong>{it.name}</strong> x{it.quantity} — {it.price}
                </li>
              ))}
            </ul>
            <p><strong>Perkiraan total:</strong> Rp {totalPrice.toLocaleString()}</p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a className="cta" href={checkoutUrl} target="_blank" rel="noreferrer">Checkout via WhatsApp</a>
              <button className="btn" onClick={() => clearCart()}>Kosongkan Keranjang</button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
