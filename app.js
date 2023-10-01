import home from "./views/home.js";
import about from "./views/about.js";
import idk from "./views/idk.js";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const links = document.querySelectorAll('a')
  const routes = {
    '': {view: home, index: 0},
    '#about': {view: about, index: 1},
    '#idk': {view: idk, index: 2}
  }

  render(window.location.hash)

  addClassLink()
  
  window.addEventListener('hashchange', () => {
    addClassLink()
    render(window.location.hash)
  })

  function render(hash) {
    const route = routes[hash] || routes['']
    app.innerHTML = route.view()
  }

  function clearClassLinks() {
    links.forEach(link => {
      link.classList.remove('active')
    })
  }

  function addClassLink() {
    const hash = window.location.hash
    clearClassLinks()
    const route = routes[hash] || routes['']
    links[route.index].classList.add('active')
  }
})