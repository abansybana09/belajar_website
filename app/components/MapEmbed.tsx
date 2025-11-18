export default function MapEmbed() {
  return (
    <div className="container" style={{marginTop:16}}>
      <h3>Lokasi Kami</h3>
      <div style={{width:'100%', height:320, borderRadius:8, overflow:'hidden', marginTop:8}}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.123456789!2d106.7!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDEyJzAwLjAiUyAxMDZCMCcwJzAwLjAiRQ!5e0!3m2!1sid!2sid!4v0000000000000"
          width="100%"
          height="100%"
          style={{border:0}}
          loading="lazy"
        />
      </div>
      <div style={{fontSize:13, color:'#6b5e57', marginTop:8}}>Catatan: ganti embed map dengan lokasi warung Anda.</div>
    </div>
  );
}
