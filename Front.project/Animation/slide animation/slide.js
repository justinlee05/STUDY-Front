let slide = document.getElementById('slide-wrapper-wrapper')
let button =document.getElementById('button')
var switching = 0;

function Onoff(){
    if (switching == 0){
        slide.style.transform = "translate(-93.5%,0px)";
        switching = 1;
    }
    else{
        slide.style.transform = "translate(0px,0px)";
        switching = 0;
    }
}