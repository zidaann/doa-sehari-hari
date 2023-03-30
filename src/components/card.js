const card = (data) => {
  return `
          <div class="card">
          <div class="card-header">${data.doa}</div>
          <div class="card-body">
            <div class="card-ayat">
            ${data.ayat}
            </div>
            <div class="card-arti">
              <span>Artinya:</span>
              ${data.artinya}
            </div>
          </div>
        </div>
  `;
};
export default card;
