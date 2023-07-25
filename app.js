const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block' 
})

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none'
// })
    
popup.addEventListener('click', event => {
    const classNamecLick = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    const showPopup = classNames.some(className => className === classNamecLick)

    if(showPopup) {
     
    popup.style.display = 'none'
    }
})