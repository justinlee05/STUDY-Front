const todo = {
    input : document.getElementById('input'),
    add : document.getElementById('add'),
    insert : document.getElementById('insert'),
    delete : document.getElementById('delete'),
    text : document.getElementById('text'),
    line : document.getElementById('line'),
    hide : document.getElementById('fix-modal'),
    input_fix : document.getElementById('fix-modal-input'),
    test : document.getElementsByClassName('text'),
    
    fixtarget : document.getElementsByClassName('fix')
}


todo.add.addEventListener("click" , () => {
    console.log(todo.insert.value)
    if(todo.insert.value !=""){
        todo.input.insertAdjacentHTML('beforeend' ,
        `
        <div class="lists">
                <div class="check">
                    <input type="checkbox">
                    <p id="text">${todo.insert.value}</p>
                </div>
                <button id="delete" onclick="Delete(event)">삭제</button>
                <button onclick="Fix()">수정</button>
            </div>
        `
        )
    }
    todo.insert.value = null;
})


insert.onkeydown = function(){
    if( event.keyCode==13 && todo.insert.value !=""){
        todo.input.insertAdjacentHTML('beforeend' , 
        `
            <div class="lists">
                <div class="check">
                    <input type="checkbox">
                    <p id="text" class="text">${todo.insert.value}</p>
                </div>
                <button id="delete" onclick="Delete(event)">삭제</button>
                <button onclick="Fix(event)">수정</button>
            </div>
            `
            )
        todo.insert.value = null;
        event.keyCode=null;
    }
    console.log(event.keyCode)
}

function Delete(e){
    console.log("wdfasf")
    e.currentTarget.parentElement.remove()
}

function Fix(e){
    todo.hide.style.display = 'flex';
    e.currentTarget.parentElement.children.classList.add('fix') ;
    console.log("passed")
}

function Fixend(event){
    document.getElementsByClassName('fix').innerHTML = todo.input_fix.value;
    todo.hide.style.display = 'none';
    todo.input_fix.value = null;
    document.querySelector('.fix').classList.remove('fix') ;
    console.log("passed")

}