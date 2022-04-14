const h1 = document.getElementById('main-title');
console.log(h1.textContent);
h1.textContent = 'Some new text!';
h1.className = 'title';
console.log(h1.className);
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const input = document.querySelector('input');
console.dir(input);
// That doesn't change the value-attribute of the input-tag
input.value = 'Some other input the user might have entered';
console.dir(input);
h1.id = 'new-id';
console.log(h1.id);
input.setAttribute('value', 'some other default text');
console.log(input.value);
input.value = input.getAttribute('value');

// Old way to select all Elements
// const allListElements = document.querySelectorAll('li');

// New way to select all Elements
const allListElements = document.getElementsByTagName('li');
for (const listItem of allListElements) {
  console.dir(listItem);
}
const lastListElement = document.querySelector('li:last-of-type');
lastListElement.textContent += ' (Changed!)';

// Traversing Child Nodes
let ul = document.querySelector('ul');
console.dir(ul.children); // .children selects all child-nodes excluding text-nodes
console.dir(ul.children[1]);
console.dir(ul.childNodes); // .childNodes selects all child-nodes including text-nodes
console.dir(ul.firstChild); // text-node
console.dir(ul.firstElementChild); // first li-element
console.dir(ul.lastChild); // text-node
console.dir(ul.lastElementChild); // last li-element

// Using parentNode & parentElement
let firstListElement = document.querySelector('li');
console.dir(firstListElement.parentNode); // selects the ul-element
console.dir(firstListElement.closest('body')); // selects the "nearest" anchestor matching a specific css-selector

// Selecting Sibling Elements
console.dir(ul.previousSibling); // text-node
console.dir(ul.previousElementSibling); // header-element
console.dir(ul.nextSibling); // text-node
console.dir(ul.nextElementSibling); // input-element

// DOM Traversal vs. Query Methods
// do not do this everytime because it is required to know the html-structure and failures if html-code is changing
// ul = document.body.firstElementChild.nextElementSibling;
// firstListElement = ul.firstElementChild;
// console.dir(firstListElement);

// Styling DOM Elements
const section = document.querySelector('section');
const button = document.querySelector('button');
// section.style.backgroundColor = 'blue'; // set inline-style for the selected section-element
// section.className = 'red-bg';
button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invinsible';  
  // } else {
  //   section.className = 'red-bg visible';
  // }
  section.classList.toggle('visible');
  section.classList.toggle('invinsible');
});

// replaces all descendant elements within this section
section.innerHTML = '<h2>A new title!</h2>';

const addingElementsList = document.getElementById('adding-elements-list');
// add new content but still rerender the previous elements and its old content (not good)
// addingElementsList.innerHTML = addingElementsList.innerHTML + '<li>Item 4</li>';
const div = document.querySelector('div');
// to access the new paragraph it has to be selected via a new query method and its not available native in the div constant
div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');

const createElementList = document.getElementById('create-element-list');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
createElementList.appendChild(newLi);