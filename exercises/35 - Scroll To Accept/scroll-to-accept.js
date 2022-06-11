// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');

//   if (!terms) {
//     return;
//   }
//   terms.addEventListener('scroll', (e) => {
//     console.log(e);
//   });
// }

// scrollToAccept();

// terms.addEventListener('scroll', (e) => {
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
//   });

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('removing disabled');
    ob.unobserve(terms.lastElementChild);
  } else {
    button.disabled = true;
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
