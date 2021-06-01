let a = 0
console.log(a) //0

a = 1
console.log(a) //1

console.log(b) //undefined 변수 초기화 단계까지 진행
var b = 0 //할당 단계 진행

var b = 1 //재선언 가능
console.log(b) //1

const c = 0
console.log(c) //0

c = 2
console.log(c) //오류. 할당 불가능
