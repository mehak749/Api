function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') // only 5 posts
    .then(response => response.json())
    .then(data => {
      const postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = ''; // clear previous content

      data.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        postsDiv.appendChild(postEl);
      });
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
      document.getElementById('posts').innerHTML = '<p>Failed to load posts.</p>';
    });
}
