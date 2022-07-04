const storeCookieBtn = document.getElementById('store-btn');
const retrCookieBtn = document.getElementById('retrieve-btn');

storeCookieBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {
    name: 'Timo',
    age: 31
  };
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrCookieBtn.addEventListener('click', () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data);
  console.log(data[1].split('=')[1]);
});