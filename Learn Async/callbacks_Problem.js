

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post Two' }

]



function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output
  }, 1000);
}


function createPost_1(post) {
  setTimeout(() => {
    posts.push(post)
  },
    2000)
}


getPosts()

createPost_1({ title: 'Post Three', body: 'This is post Three' })


// 📌

// notice that post three NOT posted because it takes 2000ms compared to the 1000ms that it takes for the already existing const posts

// this is the problem that async programming solves
