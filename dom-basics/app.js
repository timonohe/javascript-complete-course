const h1 = document.getElementById('main-title');
console.log(h1.textContent);
h1.textContent = 'Some new text!';
h1.className = 'title';
console.log(h1.className);
h1.style.color = 'white';
h1.style.backgroundColor = 'red';