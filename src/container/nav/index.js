class Nav {
  static #HOME_PAGE = 'https://www.google.com.ua'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return locarion.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректне URL')
      console.log(e)
    }
  }

  static init = () => {
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
