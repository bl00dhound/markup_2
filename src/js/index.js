( () => {

  let hamburger = document.querySelector('.hamburger.hamburger--slider')
  let currencies = document.querySelectorAll('input[name="item"]')
  let moreBtn = document.querySelector('#more_btn')
  let article = document.querySelector('#article')
  let title = article.querySelector('h2.title')
  let link = article.querySelector('a.link')
  let text = article.querySelector('.text')

  const createTextElement = (textArray) => {
    let textNew = document.createElement('div')
    textNew.className = 'text'
    textArray.forEach( pText => {
      let p = document.createElement('p')
      p.innerText = pText
      textNew.appendChild(p)
    })
    text = textNew
  }

  const changeArticle = (currency) => {
    let item = storage[currency]
    title.innerText = item.title
    link.href = item.link
    article.removeChild(text)
    createTextElement(item.text)
    article.appendChild(text)
  }

  moreBtn.addEventListener('click', () => {
    let height = window.innerHeight;
    window.scrollTo(0, height)
  })

  currencies.forEach( elem => {
    elem.addEventListener('change', event => {
      if (event.target.value) changeArticle(event.target.value)
    })
  })

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
  })

})()