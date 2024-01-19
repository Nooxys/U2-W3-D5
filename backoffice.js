const myURL = 'https://striveschool-api.herokuapp.com/api/product/'
const resetButton = document.getElementById('resetButton')
const nameInput = document.getElementById('nameInput')
const descriptionInput = document.getElementById('descriptionInput')
const brandInput = document.getElementById('brandInput')
const imageInput = document.getElementById('imageInput')
const priceInput = document.getElementById('priceInput')
const myForm = document.getElementById('myForm')
const myKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY'

const address = new URLSearchParams(location.search)
const gameId = address.get('gameId')
if (gameId) {
  document.getElementById('formName').innerText =
    'Modify your Videogame card Here:'
  fetch(`${myURL}/${gameId}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((game) => {
      nameInput.value = game.name
      descriptionInput.value = game.description
      brandInput.value = game.brand
      imageInput.value = game.imageUrl
      priceInput.value = game.price
    })
    .catch((error) => {
      console.log(error)
    })
}

resetButton.addEventListener('click', () => {
  nameInput.value = ''
  descriptionInput.value = ''
  brandInput.value = ''
  imageInput.value = ''
  priceInput.value = ''
})

myForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const newGame = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
    price: priceInput.value,
  }

  let whatURL
  let method

  if (gameId) {
    method = 'PUT'
    whatURL = `${myURL}/${gameId}`
  } else {
    method = 'POST'
    whatURL = myURL
  }

  fetch(whatURL, {
    method: method,
    body: JSON.stringify(newGame),
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2UzNzE4N2U1YzAwMTgxNGM2MTUiLCJpYXQiOjE3MDU2NTU4NjQsImV4cCI6MTcwNjg2NTQ2NH0.YDDo3ILwfI1qiKr7z3jvtdfnQiSc-scwnwc9_ogvzaY',
    },
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        alert('VideoGame added!')
        nameInput.value = ''
        descriptionInput.value = ''
        brandInput.value = ''
        imageInput.value = ''
        priceInput.value = ''
      } else {
        alert('Warning, your data cannot be saved!')
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
