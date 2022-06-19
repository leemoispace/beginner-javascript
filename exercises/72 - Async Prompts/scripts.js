function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely
  popup.remove();
}

function ask(options) {
  return new Promise(async (resolve) => {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
        <fieldset>
        <label>${options.title}</label>
        <input type ='text' name='input'/>
        <button type='submit'>Submit</button>
        </fieldset>
        `
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }

    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true } //
    );
    // when someone does submit, resolve the data that was in the input box!

    // insert that popup into the dom
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class
    // event loop

    setTimeout(() => {
      popup.classList.add('open');
    }, 50);
  });
}

// select all button that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset; // button.hasAttribute('data-cancel')
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

const answers = Promise.all([
  ask(questions[0]),
  ask(questions[1]),
  ask(questions[2]),
]);

// Promise.all((qPromises = questions.map(ask))).then((data) => {
//   console.log(data);
// });
// unlike map and foreach, for loop can await for something

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over our array
  for (const item of array) {
    results.push(await callback(item));
  }
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }
