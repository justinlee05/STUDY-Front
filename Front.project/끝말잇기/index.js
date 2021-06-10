var inputfirst = '뭘봐'
var inputlast = '봐리';
var repeat = 1;
while(1){
    if (repeat==1){
        inputfirst = prompt(inputlast+' => ');
        console.log(inputfirst[0] ,inputlast[inputlast.length - 1])
        if(inputfirst[0] == inputlast[inputlast.length - 1]){
            alert("통과!");
            console.log("정답!")
        }
        else{
            alert("탈락!");
            console.log("탈락!")
            break;
        }
        repeat = 0;
    }
    else{
        inputlast = prompt(inputfirst+' => ');
        console.log(inputfirst[0] ,inputlast[inputlast.length - 1])
        if(inputlast[0] == inputfirst[inputfirst.length - 1]){
            alert("통과!");
            console.log("정답!")
        }
        else{
            alert("탈락!");
            console.log("탈락!")
            break;
        }
        repeat = 1;
    }
}