import { animate } from './helper'

const modalWork = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const content = document.querySelector('.popup-content')

    console.log(content)
   

    modal.style.display = 'block'
    modal.style.transform = 'translateX(-100%)'
    modal.style.background = `rgba(0,0,0,.0)`
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () =>{
        console.log('eg')
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    console.log(progress);
                    modal.style.transform = `translateX(${100 * (progress-1)}%)`
                    modal.style.background = `rgba(0,0,0,.5)`
                }
              });
        })
    })
 
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.transform = `translateX(${-100 * progress}%)`
                }
              });
        }
    })
}

export default modalWork