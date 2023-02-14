

function createPostCallback(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  },
    2000)
}

// createPostCallback allows createPost_1 and createPostCallback to print their results by preventing getPosts() from running until they run, and then callsback then getPosts()


createPostCallback({ title: 'Post four', body: 'This is post four' }, getPosts)

