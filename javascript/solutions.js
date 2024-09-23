window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.solutions--card_img')
    const showcase = document.querySelector('.showcase')
    const showcaseImg = document.querySelector('.showcase--img')

    function openShowcase(index) {
        showcase.style.display = 'flex'
        showcaseImg.src = images[index].src
    }

    function closeShowcase() {
        showcase.style.display = 'none'
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => openShowcase(index))
    })

    showcase.addEventListener('click', closeShowcase)
})