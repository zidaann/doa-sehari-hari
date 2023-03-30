const Data = require('../scripts/data/data-source.js')
class CardItem extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set card(card) {
    this._card = card
    render()
  }

  render() {
    this.shadowDOM.innerHTML = `
    <div class="card">
            <div class="card-header">awdawd</div>
            <div class="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus laudantium, ipsa aut repudiandae, perspiciatis modi
              nostrum aliquam, adipisci esse quidem cumque minima quo aperiam
              praesentium at nesciunt illum impedit ab.
            </div>
          </div>
    `
  }
}

customElements.define('card-item', CardItem)
