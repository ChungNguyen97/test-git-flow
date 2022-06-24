const url = 'https://jsonplaceholder.typicode.com/posts'

function getPost() {
  fetch(url)
    .then(res => res.json())
    .then(data => data)
}
getPost()


const list = document.querySelector('.list')

const render = async (info) => {
  const infomarion = await info()
  console.log(infomarion);
}

render(getPost)