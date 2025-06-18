 const container = document.querySelector('.container-comingsoon');
 const next = document.getElementById('next');
 const prev = document.getElementById('prev');

  next.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });