const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const btnEql = document.getElementById('btn=');
const btndot = document.getElementById('btn-dot');
const btnDiv = document.getElementById('btn/');
const btnMul = document.getElementById('btn*');
const btnAdd = document.getElementById('btn+');
const btnSub = document.getElementById('btn-');
const btnC = document.getElementById('btnc');


const history = document.getElementById('history');
const result = document.getElementById('result');

const clear = document.getElementById('clear');


clear.addEventListener('click',()=>{
   let form = document.querySelector('form');
   form.submit();
})


//Using click

btn1.addEventListener('click',()=>{
    result.value+= '1';
    result.style.color = 'white';
})

btn2.addEventListener('click',()=>{
    result.value+= '2';
    result.style.color = 'white';
})

btn3.addEventListener('click',()=>{
    result.value+= '3';
    result.style.color = 'white';
})


btn4.addEventListener('click',()=>{
    result.value+= '4';
    result.style.color = 'white';
})


btn5.addEventListener('click',()=>{
    result.value+= '5';
    result.style.color = 'white';
})


btn6.addEventListener('click',()=>{
    result.value+= '6';
    result.style.color = 'white';
})


btn7.addEventListener('click',()=>{
    result.value+= '7';
    result.style.color = 'white';
})


btn8.addEventListener('click',()=>{
    result.value+= '8';
    result.style.color = 'white';
})


btn9.addEventListener('click',()=>{
    result.value+= '9';
    result.style.color = 'white';
})


btn0.addEventListener('click',()=>{
    result.value+= '0';
    result.style.color = 'white';
})

btndot.addEventListener('click',()=>{
    result.value+= '.';
    result.style.color = 'white';
})


btnAdd.addEventListener('click',()=>{
    result.value+= '+';
    result.style.color = 'white';
})


btnDiv.addEventListener('click',()=>{
    result.value+= '/';
    result.style.color = 'white';
})


btnSub.addEventListener('click',()=>{
    result.value+= '-';
    result.style.color = 'white';
})


btnMul.addEventListener('click',()=>{
    result.value+= '*';
    result.style.color = 'white';
})


btnEql.addEventListener('click',()=>{
    history.value+=result.value+'='+ eval(result.value)+'\n';
    result.value=eval(result.value);
})

btnC.addEventListener('click',()=>{
    let val = result.value;
    result.value = val.substr(0,val.length-1);
})

//Using keypress
document.addEventListener('keydown', (event) => {
    if (event.key == "0") {
        result.value+= '0';
        result.style.color='white';
    }
    else if (event.key == "1") {
        result.value+= '1';
        result.style.color='white';
    }
    else if (event.key == "2") {
        result.value+= '2';
        result.style.color='white';
    }
    else if (event.key == "3") {
        result.value+= '3';
        result.style.color='white';
    }
    else if (event.key == "4") {
        result.value+= '4';
        result.style.color='white';
    }
    else if (event.key == "5") {
        result.value+= '5';
        result.style.color='white';
    }
    else if (event.key == "6") {
        result.value+= '6';
        result.style.color='white';
    }
    else if(event.key == "7") {
        result.value+= '7';
        result.style.color='white';
    }
    else if(event.key == "8") {
        result.value+= '8';
        result.style.color='white';
    }
    else if(event.key == "9") {
        result.value+= '9';
        result.style.color='white';
    }
    else if(event.key == "+") {
        result.value+= '+';
        result.style.color='white';
    }
    else if(event.key == "-") {
        result.value+= '-';
        result.style.color='white';
    }
    else if(event.key == "*") {
        result.value+= '*';
        result.style.color='white';
    }
    else if(event.key == "/") {
        result.value+= '/';
        result.style.color='white';
    }
    else if(event.key == ".") {
        result.value+= '.';
        result.style.color='white';
    }
    else if(event.key == "Backspace") {
        let val = result.value;
        result.value = val.substr(0,val.length-1);
    }
    
    else if(event.key == "Enter") {
        //result.value= eval(result.value);
       let val=eval(result.value);
       result.value = val;
        history.value+=result.value+'='+ val+'\n';
       
    }

    else{
        alert('please enter only numbers form keyboard');
    }
   
});

