import { pages } from "../views/index.js";

let content = document.querySelector('#app')

const router = async (route) => {
  content.innerHTML = ''
  switch (route) {
    case '': {
      return content.innerHTML = pages.home()
    }
    case '#about':
      return content.innerHTML = pages.about()
    case '#idk':
      return content.innerHTML = pages.idk()
    default:
      return content.innerHTML = pages.notFound()
  }
}

export {router}