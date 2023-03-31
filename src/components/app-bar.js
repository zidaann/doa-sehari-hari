class AppBar extends HTMLElement {
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
      header {
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        color: white;
        text-align: center;
      }
      </style>

        <header>
        <div class="jumbotron">
          <h1>Kumpulan Doa Sehari-hari</h1>
        </div>
      </header>
        `
  }
}

customElements.define('app-bar', AppBar)
