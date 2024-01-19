const myKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY'
const myURL = 'https://striveschool-api.herokuapp.com/api/product/'

const getCards = (cards) => {
  cards.forEach((card) => {
    const col = document.createElement('div')
    col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3')
    col.innerHTML = `<div class="card" >
    <img src="${
      card.imageUrl
    }" class="card-img-top" alt="copertina_videogame" />
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <h6 class="card-title"> Developer: ${card.brand}</h6>
      <p class="card-text">${card.description}</p>
      <div>
      <a href="#" class="btn btn-primary"><i class="bi bi-cart-plus"></i> - ${
        card.price || 'sold-out'
      }€</a>
      <a href="./details.html?gameId=${
        card._id
      }" class="btn btn-secondary mt-2"><i class="bi bi-info-square"></i> - 
      Find out more
      </a>
      </div>
    </div>`

    const cardRow = document.getElementById('cardRow')
    cardRow.appendChild(col)
  })
}

const getVideogames = () => {
  fetch(myURL, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY',
    },
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nella chiamata del server!')
      }
    })
    .then((data) => {
      console.log(data)
      getCards(data)
    })
    .catch((error) => {
      console.log(error)
    })
}

getVideogames()
