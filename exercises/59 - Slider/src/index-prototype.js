function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No Slider passed in');
  }
  // select the elements needed for the sliders
  this.slides = slider.querySelector('.slides');
  // slider passed in need to be assigned to this.
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  this.startSlider();
  this.applyClasses();
  // event listeners
  // key, bind
  this.move = this.move.bind(this);
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', this.move);
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};
//

Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
  const classesToRemove = ['current', 'prev', 'next'];
  this.current.classList.remove(...classesToRemove); // spread the array
  this.prev.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

window.dogSlider = dogSlider;

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
