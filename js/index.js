
const routes = {
   "/": "pages/home.html",
   "/universe": "pages/universe.html",
   "/exploration": "pages/exploration.html",
   404: "pages/404.html"
}

function route(event) {
   event = event || window.event
   event.preventDefault()

   // Pegar no histórico do window a url para meu pathname 
   window.history.pushState({}, "", event.target.href)

   handle()
}

function handle() {
   const { pathname } = window.location
   const route = routes[pathname] || routes[404]
   
   // 1. fetch() = vai buscar está rota | then() = quando concluir, execute essa função
   // 2. text() = retorna os dados em forma de texto
   // O primeiro then() pega os dados e transforma em texto, e no segundo then() pega o texto e transforma em HTML
   fetch(route)
   .then((data) => data.text())
   .then((html) => {
      document.querySelector('#app').innerHTML = html
   })
}


// Para já iniciar o projeto na página Home
handle()

// Para poder navegar pelas rotas nas setinhas do navegador
window.onpopstate = () => handle()


// Adicionando na window o route como uma função para poder disparar a função do route().
// Porque quando coloquei os dados dentro do index.js ele não está conseguindo ler o evento de click(onclick) que eu coloquei no HTML para retornar minha função de callback
// Posso colocar o route() como uma função que vai disparar a função do route()
window.route = () => route()