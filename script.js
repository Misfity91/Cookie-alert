const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')

const showCookie = () => {
    const cookieEaten = localStorage.getItem('cookie')
    console.log(cookieEaten);
    if (cookieEaten == 'true') {
        cookieBox.classList.add('hide')
    }
}

const hideCookieBox = () => {
    localStorage.setItem('cookie', 'true')
    cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', hideCookieBox)
showCookie()