const storeCookieBtn = document.getElementById('store-btn');
const retrCookieBtn = document.getElementById('retrieve-btn');

storeCookieBtn.addEventListener('click', () => {
  const userId = 'u123';
  document.cookie = `uid=${userId}`;
});

retrCookieBtn.addEventListener('click', () => {
  console.log(document.cookie);
});