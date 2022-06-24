const url = 'https://jsonplaceholder.typicode.com/posts'

function getPost() {
  fetch(url)
    .then(res => res.json())
    .then(data => render(data))
}
getPost()


const list = document.querySelector('.list')

const render = (data) => {
  console.log(data);
  data.map((item, i) => {
    return (
      list.innerHTML += `
        <div>${item.title}</div>
      `
    )
  })
}