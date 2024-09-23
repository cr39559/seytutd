window.addEventListener('DOMContentLoaded', () => {
    const images = [
        'images/epoxy.JPG',
        'images/flake.JPG',
        'images/metallic.JPG',
        'images/overlay.JPG',
        'images/stain.JPG'
    ]

    let i = 0

    setInterval(() => {
        const banner = document.querySelector('.banner')
        i = (i + 1) % images.length
        banner.style.background = `url(${images[i]})`
        banner.style.backgroundSize = 'cover'
    }, 4000)
})