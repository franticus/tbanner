const firstMonth = document.querySelector('#first');
const secondMonth = document.querySelector('#second');
const thirdMonth = document.querySelector('#third');
const continueBtn = document.querySelector('.continue')
const pro = document.querySelector('.graph_pro')
const cross = document.querySelector('.cross')
const sliderItem = document.querySelectorAll('.slider_item')
const swiperSlide = document.querySelectorAll('.swiper_slide')
const monthItem = document.querySelectorAll('.month_item')
const wrapper = document.querySelector('.wrapper_container')
const copyright = document.querySelector('.copyright')


const swiper = new Swiper(".mySwiper", {
    observer: true,
    observeParents: true,
    loop: true,
    // spaceBetween: 10,
    slidesPerView: 3,
    initialSlide: 10,
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

continueBtn.addEventListener('click', (e) => {
    !continueBtn.hasAttribute('target', '_blank') &&
    alert('Choose the plan please!')
})

const activePlan = (plan, link) => {
    plan.addEventListener('click', () => {
        resetChoose()
        plan.classList.add('active')
        continueBtn.setAttribute("target", '_blank');
        continueBtn.setAttribute("href", link);
    })
}
activePlan(firstMonth, "https://www.google.com/search?q=1")
activePlan(secondMonth, "https://www.google.com/search?q=2")
activePlan(thirdMonth, 'https://www.google.com/search?q=3')


cross.addEventListener('click', () => {
    wrapper.classList.toggle('dark')
    copyright.classList.toggle('dark')
    sliderItem.forEach((item) => {
        item.classList.toggle('dark')
    })
    monthItem.forEach((item) => {
        item.classList.toggle('dark')
    })
    swiperSlide.forEach((item) => {
        item.style.background = '#000';
    })
})