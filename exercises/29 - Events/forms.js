const wesbos = document.querySelector('.wes');
wesbos.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('you clicked it');
  const shouldChangePage = confirm(
    'this website is evil! r u sure will go on?'
  );
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
  // validation
  const name = event.currentTarget.name.value;
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
  if (name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
}

signupForm.name.addEventListener('keyup', logEvent);
// keydown, focus, blur
