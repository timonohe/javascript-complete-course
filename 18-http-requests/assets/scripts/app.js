const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
      resolve(xhr.response);
    };
    
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

  // const listOfPosts = xhr.response;
  // xhr.response returns a JSON-Object not a native array --> whould throws an error
  // listOfPosts.push({});
  
  // this line is not necessary if responseType is 'json'
  // const listOfPosts = JSON.parse(xhr.response);

  const listOfPosts = responseData;
  // console.log(listOfPosts);

  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }
  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchPosts();
createPost('DUMMY', 'A dummy post!');