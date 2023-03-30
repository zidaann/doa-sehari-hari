import axios from 'axios'
import card from '../../components/card.js'
const main = () => {
  const baseUrl = 'https://doa-doa-api-ahmadramadhan.fly.dev/api'
  const content = document.getElementById('content')
  const btnSearch = document.getElementById('btn-search')
  const btnScroll = document.getElementById('scrollUp')

  btnSearch.addEventListener('click', function (e) {
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

  const getDoa = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}`)
      displayDoa(data)
    } catch (e) {
      console.log('Something went wrong!')
    }
  }
  const displayDoa = (data) => {
    const item = data.map((data) => {
      return card(data)
    })
    content.innerHTML = item
  }

  window.onscroll = function () {
    scrollFunction()
  }
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      btnScroll.style.display = 'block'
    } else {
      btnScroll.style.display = 'none'
    }
  }
  const handleScrollUp = document.getElementById('scrollUp')
  handleScrollUp.addEventListener('click', function () {
    const element = document.getElementById('menu')
    element.scrollIntoView({ behavior: 'smooth' })
  })
  getDoa()
}

export default main
