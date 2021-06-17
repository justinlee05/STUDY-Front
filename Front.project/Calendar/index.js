   let today = new Date();
		//오늘 날짜
	let year = today.getFullYear();
		//올 해
	let month = today.getMonth();
		//이번 달
	YM = year + "년" + (month+1) + "월"; 
		// JS는 0~11월로 표시해서 +1을 해준다. (달력의 월을 표시해주기 위함)
		//HEAD태그에 script를 두고하면 작동 안한다. body 맨 밑에서 할 것!
	let first_date = new Date(year,month,1).getDate();
		// 이번달 첫째날 구하기
	let last_date = new Date(year,month+1,0).getDate();
		// 이번달 마지막날 구하기 (다음달의 0번째 일은 이번달의 마지막날과 같다.)
	let first_day = new Date(year,month,1).getDay();

   const ym = document.getElementById("YM")
   ym.innerHTML = YM
   const Date_Today = new Date().getDate()
   const Month_Today = new Date().getMonth() +1
   const Year_Today = new Date().getFullYear()


    function removecalender(){
        var del = document.getElementById("col1");
        del.parentNode.removeChild(del);
        del = document.getElementById("col2");
        del.parentNode.removeChild(del);
        del = document.getElementById("col3");
        del.parentNode.removeChild(del);
        del = document.getElementById("col4");
        del.parentNode.removeChild(del);
        del = document.getElementById("col5");
        del.parentNode.removeChild(del);
        del = document.getElementById("col6");
        del.parentNode.removeChild(del);
        calendar.insertAdjacentHTML('beforeend' ,`<tr id="col1"></tr>`)
        calendar.insertAdjacentHTML('beforeend' ,`<tr id="col2"></tr>`)
        calendar.insertAdjacentHTML('beforeend' ,`<tr id="col3"></tr>`)
        calendar.insertAdjacentHTML('beforeend' ,`<tr id="col4"></tr>`)
        calendar.insertAdjacentHTML('beforeend' ,`<tr id="col5"></tr>`)
        calendar.insertAdjacentHTML('beforeend' ,`<tr id="col6"></tr>`)
    }


function makecalender(){
        calendar = document.getElementById("calendar");
        let num=-first_day+1;
        const col = {
            col1 : document.getElementById(`col1`),
            col2 : document.getElementById(`col2`),
            col3 : document.getElementById(`col3`),
            col4 : document.getElementById(`col4`),
            col5 : document.getElementById(`col5`),
            col6 : document.getElementById(`col6`)
        }  
        for (let j=0;j<7;j++){
            if( num>0 && num<=last_date){
                if (Date_Today == num && Month_Today == (month+1) && Year_Today == year)
                col.col1.insertAdjacentHTML('beforeend' ,`<td id="to_day">${num}</td>`)
                else
                col.col1.insertAdjacentHTML('beforeend' ,`<td>${num}</td>`)
            }
            else
            col.col1.insertAdjacentHTML('beforeend' ,`<td></td>`)

            num++;
        }
        for (let j=0;j<7;j++){
            if( num>0 && num<=last_date){
                if (Date_Today == num && Month_Today == (month+1) && Year_Today == year)
                col.col2.insertAdjacentHTML('beforeend' ,`<td id="to_day">${num}</td>`)
                else
                col.col2.insertAdjacentHTML('beforeend' ,`<td>${num}</td>`)
            }
            else
            col.col2.insertAdjacentHTML('beforeend' ,`<td></td>`)

            num++;
        }
        for (let j=0;j<7;j++){
            if( num>0 && num<=last_date){
                if (Date_Today == num && Month_Today == (month+1) && Year_Today == year)
                col.col3.insertAdjacentHTML('beforeend' ,`<td id="to_day">${num}</td>`)
                else
                col.col3.insertAdjacentHTML('beforeend' ,`<td>${num}</td>`)
            }
            else
            col.col3.insertAdjacentHTML('beforeend' ,`<td></td>`)
            
            num++;
        }
        for (let j=0;j<7;j++){
            if( num>0 && num<=last_date){
                if (Date_Today == num && Month_Today == (month+1) && Year_Today == year)
                col.col4.insertAdjacentHTML('beforeend' ,`<td id="to_day">${num}</td>`)
                else
                col.col4.insertAdjacentHTML('beforeend' ,`<td>${num}</td>`)
            }
            else
            col.col4.insertAdjacentHTML('beforeend' ,`<td></td>`)

            num++;
        }
        for (let j=0;j<7;j++){
            if( num>0 && num<=last_date){
                if (Date_Today == num && Month_Today == (month+1) && Year_Today == year)
                col.col5.insertAdjacentHTML('beforeend' ,`<td id="to_day">${num}</td>`)
                else
                col.col5.insertAdjacentHTML('beforeend' ,`<td>${num}</td>`)
            }
            else
            col.col5.insertAdjacentHTML('beforeend' ,`<td></td>`)

            num++;
        }
        for (let j=0;j<7;j++){
            if( num>0 && num<=last_date){
                if (Date_Today == num && Month_Today == (month+1) && Year_Today == year)
                col.col6.insertAdjacentHTML('beforeend' ,`<td id="to_day">${num}</td>`)
                else
                col.col6.insertAdjacentHTML('beforeend' ,`<td>${num}</td>`)
            }
            else
            col.col6.insertAdjacentHTML('beforeend' ,`<td></td>`)

            num++;
        }
    
}
    makecalender();





    function nextmonth(){
        removecalender();
        if (month<11)
        month++;
        else{
        month=0;
        year++;
        }
        YM = year + "년" + (month+1) + "월"; 
        first_date = new Date(year,month,1).getDate();
        last_date = new Date(year,month+1,0).getDate();
        first_day = new Date(year,month,1).getDay();
        ym.innerHTML = YM
        makecalender();
    }

    function pastmonth(){
        removecalender();
        if (month>0)
        month--;
        else{
        month=11;
        year--;
        }
        YM = year + "년" + (month+1) + "월"; 
        first_date = new Date(year,month,1).getDate();
        last_date = new Date(year,month+1,0).getDate();
        first_day = new Date(year,month,1).getDay();
        ym.innerHTML = YM
        makecalender();
    }