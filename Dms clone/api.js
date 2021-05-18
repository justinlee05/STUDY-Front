let date = new Date()

let year = date.getFullYear();
let month = date.getMonth() + 1
let day = date.getDate();
let day2 = date.getDate();
let yoil = date.getDay();
let menu_day = document.getElementById("menu-date");


if(month < 10 ) {
    month = "0" + month
}

if (day < 10) {
    day = "0" + day
}

let realDate = year + "-" + month + "-" + day

const meal_list = {
    breakfast_list : document.getElementById('breakfast'),
    lunch_list : document.getElementById('lunch'),
    dinner_list : document.getElementById('dinner')
}

function load() {
    fetch(`https://api.dsm-dms.com/meal/${realDate}`)
    .then(res => res.json())
    .then(res => {
        const meal = res[realDate]
        let breakfast = meal.breakfast
        let lunch = meal.lunch
        let dinner = meal.dinner
    
        console.log(breakfast, lunch, dinner)
        
        for(let i = 0; i< breakfast.length; i++) {
            console.log(breakfast[i])
            const list_breakfast = `
                <li>${breakfast[i]}</li>
            `;
    
            meal_list.breakfast_list.insertAdjacentHTML("beforeend", list_breakfast)
        }
        for(let i=0;i<lunch.length;i++){
            const list_lunch = `<li>${lunch[i]}</li>`
            meal_list.lunch_list.insertAdjacentHTML("beforeend", list_lunch)
        }
        for(let i=0;i<dinner.length;i++){
            const list_dinner = `<li>${dinner[i]}</li>`
            meal_list.dinner_list.insertAdjacentHTML("beforeend", list_dinner)
        }
    
    })
    

}

load()

  function remove()  {
    // 1. <ul> element 선택
    const ul = document
      .getElementById('breakfast');
    
    // 2. <li> 목록 선택
    const items = ul.getElementsByTagName('li');
  
    // 3. <li> 목록 중 첫번째 item 삭제
    while(items.length>0)  {
      items[0].remove();
    }

    const ul1 = document
      .getElementById('lunch');
    
    // 2. <li> 목록 선택
    const items1 = ul1.getElementsByTagName('li');
    
    // 3. <li> 목록 중 첫번째 item 삭제
    while(items1.length>0)  {
      items1[0].remove();
    }

    const ul2 = document
      .getElementById('dinner');
    
    // 2. <li> 목록 선택
    const items2 = ul2.getElementsByTagName('li');
    
    // 3. <li> 목록 중 첫번째 item 삭제
    while(items2.length>0)  {
      items2[0].remove();
    }

}
Printdate()
function Printdate(){
switch(yoil){
    case 0:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 일요일');
        break;
    case 1:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 월요일');
        break;
    case 2:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 화요일');
        break;
    case 3:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 수요일');
        break;
    case 4:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 목요일');
        break;
    case 5:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 금요일');
        break;
    case 6:
        document.getElementById("menu-date").innerHTML=(year+'년 '+month+'월 '+day2+'일 토요일');
    }

}
function Yoilbf(){
    if (yoil>0)
    yoil--;
    else
    yoil=6;
}
function Yoilaf(){
    if (yoil<6)
    yoil++;
    else
    yoil=0;
}

function DateBefore(){

    if (day2>1){
        day2-=1;
        console.log(day2)
        if (day2<10)
        realDate = year + "-" + month + "-" + ('0'+day2);
        else
        realDate = year + "-" + month + "-" + day2;
        Yoilbf()
        remove()
        Printdate()
        load()
    }
    else
    alert("더이상 페이지를 넘길 수 없습니다.")
}

function DateAfter(){
    if (day2<29){
        day2+=1;
        console.log(day2)
        if (day2<10)
        realDate = year + "-" + month + "-" + ('0'+day2);
        else
        realDate = year + "-" + month + "-" + day2;
        Yoilaf()
        Printdate()
        remove()
        load()

    }
    else
    alert("더이상 페이지를 넘길 수 없습니다.")

}