const boldBtn = document.querySelector('#bold-btn')
const underlineBtn = document.querySelector('#underline-btn')
const italicBtn = document.querySelector('#italic-btn')
const colorBtn = document.querySelector('#color-btn')

boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
})