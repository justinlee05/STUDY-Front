const el = {
    input : document.getElementById('input'),
    button : document.getElementById('button'),
    body : document.getElementById('body'),
    edit_modal : document.getElementById('edit_modal_wrapper'),
    edit_input : document.getElementById('Edit_input'),
    delete_modal :document.getElementById('delete_modal_wrapper')
}



function upload(){
    if(el.input.value != ""){
    console.log("success");
    el.body.insertAdjacentHTML('afterend',`
        <div class="activities" id="num">
            <div id="left">
                <input type="checkbox" onclick="Check()">
                <p>${el.input.value}</p>
            </div>    
            <div id="right">
                <img src="./x.png" alt="" onclick="Delete()">
                <img src="./edit.png" alt="" onclick="Edit()">
            </div>
        </div>
    `)
    el.input.value = null;
    }
    else{
        alert("해야 할 일을 입력해주세요.")
    }
}

insert.onkeydown = function(){
    if( event.keyCode==13){
        upload();
    }
}


var curtext;
function Edit(){
   var target = event.currentTarget;
    var mom = target.parentNode;
    var mom2 = mom.parentNode;
    var first = mom2.firstChild;
    var two = first.nextSibling;
    var divfirst = two.firstChild;
    var input = divfirst.nextSibling;
    var temp = input.nextSibling;
    var p = temp.nextSibling;
    console.log(p);
    curtext = p;
    el.edit_modal.style.display = 'flex';
    

}


function ConfigEdit(){
    curtext.innerHTML = el.edit_input.value;
    el.edit_input.value = "";
    el.edit_modal.style.display = 'none';
}

function CancleEdit(){
    el.edit_input.value = "";
    el.edit_modal.style.display = 'none';
}


var deltarget;
function Delete(){
    var target = event.currentTarget;
    var mom = target.parentNode;
    var mom2 = mom.parentNode;
    var temp1 = mom2.firstChild;
    var div = temp1.nextSibling;
    var temp2 = div.firstChild;
    var input = temp2.nextSibling;
    var result = input.checked;
    deltarget = mom;
    console.log(deltarget);
    console.log(input);
    if (result == true){
        deltarget.parentElement.remove()
        return;
    }
    else{
        el.delete_modal.style.display = "flex";
    }
    return;
}

function ConfigDelete(){
    deltarget.parentElement.remove();
    el.delete_modal.style.display = 'none';
}

function CancleDelete(){
    el.delete_modal.style.display = 'none';
}

function Check(){
    var check = event.currentTarget;
    var temp = check.nextSibling;
    var text = temp.nextSibling;
    var result= check.checked;
    if (result == true){
        text.style.textDecoration = 'line-through'
        
    }
    else{
        text.style.textDecoration = 'none'
    }
}