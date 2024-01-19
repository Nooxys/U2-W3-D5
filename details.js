const adress = new URLSearchParams(location.search)
console.log(adress)
const gameId = adress.get('gameId')
console.log(gameId)
const myURL = 'https://striveschool-api.herokuapp.com/api/product/'
fetch(`${myURL}/${gameId}`, {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY',
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nella chiamata del server!')
    }
  })
  .then((game) => {
    document.getElementById('imgUrl').src = game.imageUrl
    document.getElementById('nameCard').innerText = game.name
    document.getElementById('descriptionCard').innerText = game.description
    document.getElementById('brandCard').innerText = game.brand
    document.getElementById('priceCard').innerText = game.price + '€'
    document.getElementById('deleteButton').addEventListener('click', () => {
      fetch(`${myURL}/${gameId}`, {
        method: 'DELETE',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY',
        },
      })
        .then((response) => {
          if (response.ok) {
            alert('Game successful deleted!')
            location.assign('./index.html')
          } else {
            alert('Error! Game not deleted!'),
              new Error('Error! Game not deleted!')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    })

    document
      .getElementById('editButton')
      .setAttribute('href', './backoffice.html?gameId=' + game._id)
  })
  .catch((error) => {
    console.log(error)
  })
