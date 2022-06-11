const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  console.log(card);
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc);
  const desc = card.dataset.description;
  console.log(desc);
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info
  modalInner.innerHTML = `
    <img width='600' height='600' src="${imgSrc.replace(
      '200',
      '600'
    )}" alt="${name}"/>
    <p>${desc}</p>
  `;
  // show the model
  modalOuter.classList.add('open');
}

cardButtons.forEach((button) =>
  button.addEventListener('click', handleButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

// only click outer will trigger the function
modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner'); // check in or out
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  console.log('keydown');
  if (event.key === 'Espace') {
    closeModal();
  }
});
