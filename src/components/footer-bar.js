class FooterBar extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        footer {
            padding: 20px;
            color: white;
            background-color: #031e3d;
            text-align: center;
            font-weight: bold;
          }
        </style>
  
        <footer>
        <p>Belajar Fundamental FrontEnd Web Development &#169; 2023, Dicoding Academy</p>
        </footer>
          `
  }
}

customElements.define('footer-bar', FooterBar)
