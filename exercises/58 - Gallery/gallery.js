// closure, a closure is the ability to build a function and that function has scope,
// so if we make a function here called gallery, this function has a scope
// then we make a function inside called showNextImage
//
function Gallery(gallery) {
  //   const buttons = gallery.querySelectorAll('button');
  //   function showNextImage() {}
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  //   console.log(images);
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Opening Modal...');
    // check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return;
    }
    modal.classList.add('open');

    // event listeners to be bound when we open the modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showImage(el) {
    if (!el) {
      console.log('no image to show');
      return;
    }
    // update the modal with this info.
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    // show image
    currentImage = el;
    openModal();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function handleImageClick(event) {
    showImage(event.currentTarget);
  }

  // event listeners
  images.forEach((image) => image.addEventListener('click', handleImageClick));

  images.forEach((image) => {
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });
  modal.addEventListener('click', handleClickOutside);
}

// use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
