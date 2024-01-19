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

  fetch(myURL, {
    method: 'POST',
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
        alert('VideoGame aggiunto!')
        nameInput.value = ''
        descriptionInput.value = ''
        brandInput.value = ''
        imageInput.value = ''
        priceInput.value = ''
      } else {
        alert('Attenzione, problema nel salvataggio dati!')
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
