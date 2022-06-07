// const button = document.querySelector('button');
const buttons = document.querySelectorAll('button');

// button.onclick = function() {
//   alert('Hello there!');
// }
const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event);
};
const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;
// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => btn.addEventListener('click', buttonClickHandler));