const card = (data) => `
    <div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
    <div class="card-header">${data.title}</div>
    <div class="card-body">
      <div class="card-body-rank">Rating: ${data.vote_average}</div>
      <div class="card-body-release">Release: ${data.release_date}</div>
    </div>
    </div>
  `
export default card
