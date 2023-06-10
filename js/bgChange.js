export function bgChange() {
  const getPathname = () => {
    const pathname = window.location.pathname
    return pathname.charAt(0) === '/' ? pathname.slice(1) : pathname
  }

  function setBodyBackground() {
    const body = document.body
    const pathname = getPathname()

    // Verifica o pathname e define o background do body de acordo
    switch (pathname) {
      case 'universe':
        body.style.backgroundImage =
          'url("/images/bg-universe.png")'
        break
      case 'exploration':
        body.style.backgroundImage =
          'url("/images/bg-exploration.png")'
        break
      default:
        // Define um background padrão para outras páginas
        body.style.backgroundImage =
          'url("/images/bg-home.png")'
        break
    }
  }

  setBodyBackground()
}