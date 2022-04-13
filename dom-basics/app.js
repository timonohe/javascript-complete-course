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
const ul = document.querySelector('ul');
console.dir(ul.children); // .children selects all child-nodes excluding text-nodes
console.dir(ul.children[1]);
console.dir(ul.childNodes); // .childNodes selects all child-nodes including text-nodes
console.dir(ul.firstChild); // text-node
console.dir(ul.firstElementChild); // first li-element
console.dir(ul.lastChild); // text-node
console.dir(ul.lastElementChild); // last li-element

// Using parentNode & parentElement
const firstListElement = document.querySelector('li');
console.dir(firstListElement.parentNode); // selects the ul-element
console.dir(firstListElement.closest('body')); // selects the "nearest" anchestor matching a specific css-selector

// Selecting Sibling Elements
console.dir(ul.previousSibling); // text-node
console.dir(ul.previousElementSibling); // header-element
console.dir(ul.nextSibling); // text-node
console.dir(ul.nextElementSibling); // input-element