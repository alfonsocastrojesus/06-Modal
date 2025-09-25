'use strict';
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
function closeM() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
modal.addEventListener('click', closeM);
overlay.addEventListener('click', closeM);

function handleEscapeKey(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeM();
}
document.addEventListener('keydown', handleEscapeKey);
