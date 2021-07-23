// DOM Document Object Model
// Modelo(modelagem) do documento HTML em objetos JavaScript


// Quando clicar no icone de abrir e fechar menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}


// Quando clicar em algum item do menu
const menu = document.querySelectorAll('nav .title')

for (const element of menu) {
    element.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// Mudar o header da página quando der scroll

const header = document.querySelector("#header")
// Deslocamento da altura
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')

    }
})

// Testimonials carousel slider - swiper

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    //mousewheel: true,
    keyboard: true
});

// ScrollReveal: mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .text, #home .image, 
     #about .text,#about .image,
     #services .card, #services header, 
     #testimonials .testimonials, #testimonials header,
     #about .links, #contact .text 

    `,
    { interval: 100 }
)