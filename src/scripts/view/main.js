import card from '../../components/card'

const main = () => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=7b4eaf195c0014cfc0c940e667d4d177&language=en-US&page=1'
  const content = document.getElementById('content')
  const btnSearch = document.getElementById('btn-search')
  const btnScroll = document.getElementById('scrollUp')

  btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    const keyword = document.getElementById('keyword').value.toLowerCase()
    const cardItems = document.querySelectorAll('.card')
    for (let i = 0; i < cardItems.length; i++) {
      const doaTitle = cardItems[i].getElementsByClassName('card-header')[0]
      if (doaTitle) {
        const textTitle = doaTitle.textContent || doaTitle.innerHTML
        if (textTitle.toLowerCase().indexOf(keyword) > -1) {
          cardItems[i].style.display = 'block'
        } else {
          cardItems[i].style.display = 'none'
        }
      }
    }
  })

  /*
    ~ Fetch Api belum beres , kena CORS
    ~ api pake ajax
  */
  // const getMovie = async () => {
  //   fetch(`${baseUrl}`, {
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       const data = result.items.slice(0, 20)
  //       displayMovie(data)
  //     })
  //     .catch((error) => console.log(error))
  // }

  const getMovie = async () => {
    try {
      const response = await fetch(`${baseUrl}`)
      const { results } = await response.json()
      console.log(results)
      displayMovie(results)
    } catch (error) {
      console.log('Something went wrong!')
    }
  }
  const displayMovie = (data) => {
    const item = data.map((data) => card(data)).join('')
    content.innerHTML = item
  }

  window.onscroll = () => {
    scrollFunction()
  }
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 500
      || document.documentElement.scrollTop > 500
    ) {
      btnScroll.style.display = 'block'
    } else {
      btnScroll.style.display = 'none'
    }
  }
  const handleScrollUp = document.getElementById('scrollUp')
  handleScrollUp.addEventListener('click', () => {
    const element = document.getElementById('menu')
    element.scrollIntoView({ behavior: 'smooth' })
  })
  getMovie()
}

export default main
