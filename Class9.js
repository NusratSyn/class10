/*function incdec(para){
    if(para=='plus'){
        input.value=Number(input.value)+1;
    }else{
        if(input.value>0){
            input.value=Number(input.value)-1;
    
        }
    }
} */

const input = document.getElementById('inputTypeNum');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const input = document.getElementById('inputTypeNum1');
const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');
const input = document.getElementById('inputTypeNum2');
const plus2 = document.getElementById('plus2');
const minus2 = document.getElementById('minus2');

plus.addEventListener('click', ()=>{
input.value=Number(input.value)+1;
});

minus.addEventListener('click',()=>{
    if(input.value>0){
    input.value=Number(input.value)-1;
    }
});
plus1.addEventListener('click', ()=>{
    input.value=Number(input1.value)+1;
    });
    
    minus1.addEventListener('click',()=>{
        if(input.value>0){
        input.value=Number(input1.value)-1;
        }
    });
    plus2.addEventListener('click', ()=>{
        input.value=Number(input2.value)+1;
        });
        
        minus2.addEventListener('click',()=>{
            if(input.value>0){
            input.value=Number(input2.value)-1;
            }
        });