const button = document.querySelector('button');
// const buttons = document.querySelectorAll('button');

// button.onclick = function() {
//   alert('Hello there!');
// }
// const buttonClickHandler = event => {
//   // event.target.disabled = true;
//   console.log(event);
// };
// const anotherButtonClickHandler = () => {
//   console.log('This was clicked!');
// };
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;
// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => btn.addEventListener('mouseenter', buttonClickHandler));

// window.addEventListener('scroll', event => {
//   console.log(event);
// });
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');
div.addEventListener('click', event => {
  console.log('CLICKED DIV');
  console.log(event);
});
button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
});