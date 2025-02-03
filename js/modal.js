const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const galleryItems = document.querySelectorAll('.works__item-image img');
let scrollPosition = 0;
function openModal(imageSrc) {
  scrollPosition = window.scrollY;

  document.body.classList.add('no-scroll');
  document.body.style.top = `-${scrollPosition}px`;

  modal.style.display = 'block';
  modalImage.src = imageSrc;
}

function closeModalWindow() {
  modal.style.display = 'none';

  document.body.classList.remove('no-scroll');
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
}


galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imageSrc = item.getAttribute('src');
    openModal(imageSrc);
  });
});

closeModal.addEventListener('click', closeModalWindow);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalWindow();
  }
});