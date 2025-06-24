//  Untuk arrow slide bar new release
 const container = document.querySelector('.container-comingsoon');
 const next = document.getElementById('next');
 const prev = document.getElementById('prev');

  next.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });

  // Untuk notifikasi contact

    document.getElementById('formcontact').addEventListener('submit', function(e) {
      e.preventDefault(); // Mencegah reload halaman

      // Validasi sederhana (opsional, karena sudah pakai required di input)
      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      if (nama && email && subject && pesan) {
        alert("Terima kasih sudah chat kami 😊");
        this.reset(); // reset form setelah dikirim
      } else {
        alert("Harap lengkapi semua field.");
      }
    });
