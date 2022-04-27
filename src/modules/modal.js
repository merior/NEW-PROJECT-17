import { animate } from './helper'

const modalWork = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
   

    modal.style.display = 'block'
    modal.style.transform = 'translateX(-100%)'
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () =>{
        console.log('eg')
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.transform = `translateX(${0 * progress}%)`
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