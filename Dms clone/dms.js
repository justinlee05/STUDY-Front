let loginButton = document.getElementById('login-button')
let loginModal = document.getElementById('login-modal')
let loginWrapper = document.getElementById('login-wrapper')
let close = document.getElementById('x')
let body = document.getElementById('body_');

function modalClickHandler(){
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        body.style.overflow = 'hidden';
    })
}

function modalClose() {
    close.addEventListener('click', () => {
        loginModal.style.display = 'none';
        body.style.overflow = 'auto';
    })
}

let apply = document.getElementById('apply');
let apply1 = document.getElementById("apply1");
let applyImg = document.getElementById("apply-imgs")
let apply2 = document.getElementById("apply2")
let applyImg2 = document.getElementById("apply-img2")
let apply3 = document.getElementById("apply3")
let applyImg3 = document.getElementById("apply-img3")
let apply4 = document.getElementById("apply4")
let applyImg4 = document.getElementById("apply-img4")



function onMouse1() { 
    applyImg.style.display = 'block'
    apply.style.backgroundImage = "url(./assets/app-background1.jpg)"
}

function outMouse1() {
   applyImg.style.display = 'none';
   apply.style.backgroundImage = 'none'
}

function onMouse2() { 
    applyImg2.style.display = 'block'
    apply.style.backgroundImage = "url(./assets/app-background2.jpg)"
}

function outMouse2() {
   applyImg2.style.display = 'none';
   apply.style.backgroundImage = 'none'
}

function onMouse3() { 
    applyImg3.style.display = 'block'
    apply.style.backgroundImage = "url(./assets/app-background3.jpg)"
}

function outMouse3() {
   applyImg3.style.display = 'none';
   apply.style.backgroundImage = 'none'
}

function onMouse4() { 
    applyImg4.style.display = 'block'
    apply.style.backgroundImage = "url(./assets/app-background4.jpg)"
}

function outMouse4() {
   applyImg4.style.display = 'none';
   apply.style.backgroundImage = 'none'
}

let back1 = document.getElementById("back-1")
let back2 = document.getElementById("back-2")
let back3 = document.getElementById("back-3")
let back4 = document.getElementById("back-4")

function backIn1(){
    back1.style.display = 'block';
}
function backOut1(){
    back1.style.display = 'none';
}
function backIn2(){
    back2.style.display = 'flex';
}
function backOut2(){
    back2.style.display = 'none';
}
function backIn3(){
    back3.style.display = 'flex';
}
function backOut3(){
    back3.style.display = 'none';
}
function backIn4(){
    back4.style.display = 'flex';
}
function backOut4(){
    back4.style.display = 'none';
}