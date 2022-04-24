const modalWork = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    let intervalIDOne
    let intervalIDTwo
    let countOne = -100
    let countTwo = 0

    modal.style.display = 'block'
    modal.style.transform = 'translateX(-100%)'

    const animate = () => {
        countOne++
        modal.style.transform = `translateX(${countOne}%)`
        if (countOne >= 0) {
            clearInterval(intervalIDOne)
        }
    }
    const closeAnimate = () => {
        countTwo--
        modal.style.transform = `translateX(${countTwo}%)`
        if (countTwo <= -100) {
            clearInterval(intervalIDTwo)
        }
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', () =>{
            intervalIDOne = setInterval(animate, 10)
        })
    })
    
    // closeBtn.addEventListener('click',() => {
    //     intervalIDTwo = setInterval(closeAnimate, 10)
    // })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            intervalIDTwo = setInterval(closeAnimate, 10)
        }
    })
}

export default modalWork