// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post Two' }

// ]

function createPostPromise(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if (!error) {
        resolve()
      } else {
        reject('Error: something wrong')
      }
    },
      2000)

  })
}

createPostPromise({ title: 'Post five', body: 'This is post five' })
  .then(getPosts)
  .catch(err => console.log(err))


const promise1 = Promise.resolve("Hello world")
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'goodbye')
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
)

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))




// what if you change !error into error?