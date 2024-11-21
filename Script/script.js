const btnModal = document.getElementById('btnModal');
const modalContato = document.getElementById('modalContato');
const closeModal = document.getElementById('closeModal');

btnModal.addEventListener('click', () => {
  modalContato.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modalContato.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalContato) {
    modalContato.style.display = 'none';
  }
});

document.querySelectorAll('a[href^="#sobremim"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#curriculoo"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#mecontate"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });