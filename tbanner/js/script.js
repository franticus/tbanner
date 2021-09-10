const firstMonth = document.querySelector('#first');
const secondMonth = document.querySelector('#second');
const thirdMonth = document.querySelector('#third');
const continueBtn = document.querySelector('.continue')
const pro = document.querySelector('.graph_pro')

const swiper = new Swiper(".mySwiper", {
    observer: true,
    observeParents: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const show = () => {
    setTimeout(() => {
        pro.classList.add('show')
    }, 1400)
}
show()

const resetChoose = () => {
    firstMonth.classList.remove('active')
    secondMonth.classList.remove('active')
    thirdMonth.classList.remove('active')
}
const activePlan = (plan, link) => {
    plan.addEventListener('click', () => {
        resetChoose()
        plan.classList.add('active')
        continueBtn.setAttribute("href", link);
    })
}

activePlan(firstMonth, "https://www.google.com/search?q=1")
activePlan(secondMonth, "https://www.google.com/search?q=2")
activePlan(thirdMonth, 'https://www.google.com/search?q=3')