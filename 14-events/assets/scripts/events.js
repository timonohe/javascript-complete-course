const button = document.querySelector('button');
// button.onclick = function() {
//   alert('Hello there!');
// }
const buttonClickHandler = () => {
  alert('Button was clicked!');
};
const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;
button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler);
}, 2000);