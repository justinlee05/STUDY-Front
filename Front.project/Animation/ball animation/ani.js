var contain = document.getElementById('container')
const ball = {
    ball1 : document.getElementById('circle'),
    ball2 : document.getElementById('circle2'),
    ball3 : document.getElementById('circle3'),
    ball4 : document.getElementById('circle4'),
}
var test =


  ! function test(e) {
    setTimeout(function() {
        ball.ball1.style.transform = `translate(${Math.floor(Math.random() * 2001)}px,${Math.floor(Math.random() * 901)}px)`;
        var size= Math.floor(Math.random() * 500);
        ball.ball1.style.width = `${size}px`
        ball.ball1.style.height = `${size}px`
        ball.ball2.style.transform = `translate(${Math.floor(Math.random() * 2001)}px,${Math.floor(Math.random() * 901)}px)`;
        var size= Math.floor(Math.random() * 500);
        ball.ball2.style.width = `${size}px`
        ball.ball2.style.height = `${size}px`
        ball.ball3.style.transform = `translate(${Math.floor(Math.random() * 2001)}px,${Math.floor(Math.random() * 901)}px)`;
        var size= Math.floor(Math.random() * 500);
        ball.ball3.style.width = `${size}px`
        ball.ball3.style.height = `${size}px`
        ball.ball4.style.transform = `translate(${Math.floor(Math.random() * 2001)}px,${Math.floor(Math.random() * 901)}px)`;
        var size= Math.floor(Math.random() * 500);
        ball.ball4.style.width = `${size}px`
        ball.ball4.style.height = `${size}px`
        test();
    }, 1000);
 }()