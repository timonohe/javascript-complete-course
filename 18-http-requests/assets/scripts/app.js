const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json';

xhr.onload = function() {
  // const listOfPosts = xhr.response;
  // xhr.response returns a JSON-Object not a native array --> whould throws an error
  // listOfPosts.push({});
  
  // this line is not necessary if responseType is 'json'
  // const listOfPosts = JSON.parse(xhr.response);

  const listOfPosts = xhr.response;
  // console.log(listOfPosts);

  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
};

xhr.send();