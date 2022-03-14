const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hi there!');
}

function greetUser(username) {
    alert(`Hello ${username}!`);
}

function combine(string1, string2, string3) {
    return `${string1} ${string2} ${string3}`;
}

greet();
greetUser('Timo');

task3Element.addEventListener('click', greet);

alert(combine('Hi', 'there', '!'));