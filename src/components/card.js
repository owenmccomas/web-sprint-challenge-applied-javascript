import axios from "axios"

const Card = (article) => {

  const cardWrap = document.createElement('div')
  const headlineEl = document.createElement('div')
  const authorEl = document.createElement('div')
  const imgDiv = document.createElement('div')
  const authImg = document.createElement('img')
  const authName = document.createElement('span')

  cardWrap.classList.add('card')
  headlineEl.classList.add('headline')
  authorEl.classList.add('author')
  imgDiv.classList.add('img-container')
  
  authImg.src = article.authorPhoto
  headlineEl.textContent = article.headline
  authName.textContent = `By ${article.authorName}`

  cardWrap.appendChild(headlineEl)
  cardWrap.appendChild(authorEl)
  authorEl.appendChild(imgDiv)
  authorEl.appendChild(authName)
  imgDiv.appendChild(authImg)

  cardWrap.addEventListener('click', e => {
    console.log(e.target.headline)
  })

  return cardWrap



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    console.log(res)
      res.data.articles.bootstrap.forEach(article => document.querySelector(selector).appendChild(Card(article)))
      res.data.articles.javascript.forEach(article => document.querySelector(selector).appendChild(Card(article)))
      res.data.articles.jquery.forEach(article => document.querySelector(selector).appendChild(Card(article)))
      res.data.articles.node.forEach(article => document.querySelector(selector).appendChild(Card(article)))
      res.data.articles.technology.forEach(article => document.querySelector(selector).appendChild(Card(article)))
  }) .catch(bad => console.error(bad))

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
