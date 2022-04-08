const sayHello = yourName => console.log(`Hi ${yourName}`);
const sayDynamicHello = (yourName, greetPrefixText) => console.log(`${greetPrefixText} ${yourName}`);
const sayStaticHello = () => console.log('Hi Timo');
const getGreeting = yourName => `Hi ${yourName}`;
const sayDefaultHello = (yourName, greetPrefixText = 'Hi') => console.log(`${greetPrefixText} ${yourName}`);
const checkInput = (emptyGreetHandler, ...greetingTextParts) => {
  if (greetingTextParts.length === 0) {
    emptyGreetHandler();
  }
}
const callbackGreeting = () => console.log('Hello there');

sayHello('Timo');
sayDynamicHello('Timo', 'Hi');
sayStaticHello();
console.log(getGreeting('Timo'));
sayDefaultHello('Timo');
checkInput(callbackGreeting);
checkInput(callbackGreeting, 'Hi', 'Timo');