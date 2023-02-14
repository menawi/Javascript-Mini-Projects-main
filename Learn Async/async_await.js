

async function init() {
  await createPostPromise({ title: 'Post six', body: 'This is post six' })

  getPosts()
}

init()


// async + await + promise