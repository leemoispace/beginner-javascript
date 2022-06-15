const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = []; // array

function handleSubmit(e) {
  e.preventDefault();

  const name = e.currentTarget.item.value; // dir shows the properties
  console.log(name);
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push the items into our state
  items.push(item);
  console.log(`there are now ${items.length} in your state`);
  // clear the form
  e.target.reset();
  // display the item in state
  displayItems();
  // fire off a custom event that will tell anyone else who cares that the items have been updated.
  // custom event
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input value="${item.id}" type="checkbox"
      ${item.complete ? 'checked' : ''}
      >
      <span class="itemName">${item.name}</span>
      <button aria-lable="Remove ${item.name}"
        value="${item.id}"
      >&times</button>
  </li>`
    )
    .join('');
  console.log(html);
  list.innerHTML = html; // display on list
}

function mirrorToLocalStorage() {
  console.log('saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items)); // local storage text only. object to string, need JSON
}
function restoreFromLocalStorage() {
  console.info('restoring from LS');
  const lsItems = JSON.parse(localStorage.getItem('items')); // from text to array
  if (lsItems.length) {
    // items = lsItems;
    // items.push(...lsItems);
    lsItems.forEach((item) => items.push(item));
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('deleting item', id);
  // update
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// event delegation, listen on the click on the list<ul> but then delegate the click over to the button
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
  //   console.log(e.target, e.currentTarget);
});

restoreFromLocalStorage();

// changed to use event delegation, every time list renewed it's not working
// const buttons = list.querySelectorAll('button');
// console.log(buttons);
// buttons.forEach((button) => button.addEventListener('click', deleteItem));
