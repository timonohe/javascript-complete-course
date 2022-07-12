const fs = require('fs');

const userName = 'Timo';
console.log(`Hi ${userName}!`);

fs.writeFile('user-data.txt', 'username=Timo', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote to file!');
  }
});

fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.toString());
});