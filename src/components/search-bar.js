class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }
      input[type="search"] {
        padding: 15px 20px;
        width: 500px;
        border-radius: 30px;
        font-size: 1em;
        color: #0a111f;
        font-family: var(--font-inter);
        letter-spacing: 1.5px;
        outline: none;
        border: none;
        margin-right: 5px;
      }
      #btn-search {
        padding: 15px 30px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        background-color: var(--button-color);
        color: white;
        font-size: 1em;
      }
    </style>
    <div class="search-container" id="search-container">
        <input
        type="search"
        id="searchElement"
        placeholder="Cari..."
        />
        <button type="submit" id="btn-search">Cari</button>
  </div>
    `;
    this.shadowDOM
      .querySelector("#btn-search")
      .addEventListener("click", this._clickEvent);
  }
}
customElements.define("search-bar", SearchBar);
