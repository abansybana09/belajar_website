"use client";
export default function WhatsAppButton() {
  const waNumber = "6281234567890"; // replace with owner number
  const text = encodeURIComponent("Halo, saya mau pesan dari website Warung Sorabi & Tempe.");
  return (
    <a className="whatsapp-fab" href={`https://wa.me/${waNumber}?text=${text}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12a11.9 11.9 0 001.64 6.04L0 24l6.19-1.63A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.18-3.48-8.52z" fill="#25D366" />
        <path d="M17.02 14.5c-.26-.13-1.53-.76-1.76-.85-.23-.09-.4-.13-.57.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.09-.4-2.07-1.28-.77-.69-1.29-1.55-1.44-1.81-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.4-.42-.57-.43-.15-.01-.33-.01-.5-.01-.17 0-.45.06-.69.32-.24.27-.94.92-.94 2.24 0 1.32.97 2.6 1.1 2.78.13.17 1.9 2.92 4.61 3.98 2.71 1.06 2.71.71 3.2.67.49-.04 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.26-.17-.52-.3z" fill="#fff" />
      </svg>
    </a>
  );
}
