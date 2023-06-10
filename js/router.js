import { bgChange } from "./bgChange.js"

export class Router {

   // Variável recebendo um objeto vazio para as minhas funções
   routes = {}

   // add() serve para adicionar a propriedade(routeName) e o valor(page) do meu objeto modelado
   add(routeName, page) {
      this.routes[routeName] = page
   }

   route(event) {
      event = event || window.event
      event.preventDefault()
      
      const test = window.history.pushState({}, "", event.target.href)
      
      this.handle()
      
      const getPathname = () => {
         const pathname = window.location.pathname
         return pathname.charAt(0) === '/' ? pathname.slice(1) : pathname
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

   handle() {
      const { pathname } = window.location
      const route = this.routes[pathname] || this.routes[404]
      
      fetch(route)
      .then((data) => data.text())
      .then((html) => {
         document.querySelector('#app').innerHTML = html
      })
   }

}