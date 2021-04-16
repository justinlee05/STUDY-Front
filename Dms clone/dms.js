let loginButton = document.getElementById('login-button')
let loginModal = document.getElementById('login-modal')
let loginWrapper = document.getElementById('login-wrapper')
let close = document.getElementById('x')

function modalClickHandler(){
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    })
}

function modalClose() {
    close.addEventListener('click', () => {
        loginModal.style.display = 'none';
    })
}