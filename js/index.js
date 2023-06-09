import bgChange from "./bgChange.js"

const routes = {
   "/": "pages/home.html",
   "/universe": "pages/universe.html",
   "/exploration": "pages/exploration.html",
   404: "pages/404.html"
}

function route(event) {
   event = event || window.event
   event.preventDefault()
   
   window.history.pushState({}, "", event.target.href)
   
   handle()

   const getPathname = () => {
      const path = window.location.pathname
      return path.charAt(0) === '/' ? path.slice(1) : path
   }

   function setBodyBackground() {
      const body = document.body
      const pathname = getPathname()
   
      switch(pathname) {
         case 'home':
            body.style.backgroundImage = 'url("/images/bg-home.png")'
            break;
         
         case 'universe':
            body.style.backgroundImage = 'url("/images/bg-universe.png")'
            break;
         
         case 'exploration':
            body.style.backgroundImage = 'url("/images/bg-exploration.png")'
            break;
         
         default:
            body.style.backgroundImage = 'url("/images/bg-home.png")'
            break;
      }
   }

   setBodyBackground()
}

function handle() {
   const { pathname } = window.location
   const route = routes[pathname] || routes[404]
   
   fetch(route)
   .then((data) => data.text())
   .then((html) => {
      document.querySelector('#app').innerHTML = html
   })
}


handle()


window.onpopstate = () => handle()
window.route = () => route()


const getPathname = () => {
   const pathname = window.location.pathname
   return pathname.charAt(0) === '/' ? pathname.slice(1) : pathname
 }
