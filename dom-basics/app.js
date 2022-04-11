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