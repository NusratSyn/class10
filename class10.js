const input= document.getElementsByClassName('maindiv');

for(let index=0; index < input.length; index++) {
    const element=input[index];

    element.addEventListener('click',(e)=>{

        const clickinput= element.getElementsByClassName('inputTypeNum')[0];
        const totalPrice=element.getElementsByClassName('totalPrice')[0];
        const unitPrice=element.getElementsByClassName('unitPrice')[0];

        if(e.target.classList.contains('plus')){
            
            clickinput.value= Number(clickinput.value)+1;
            totalPrice.innerText= Number(clickinput.value)*Number(unitPrice.innerText);
            getTotalQty();
            getTotalPrice();
        }else if(e.target.classList.contains('minus')){
            if(clickinput.value>0){
               
            clickinput.value=Number(clickinput.value)-1;
            totalPrice.innerText= Number(clickinput.value)*Number(unitPrice.innerText);
            getTotalQty();
            getTotalPrice();
            }
            
        }
    })
}

function getTotalQty(){
    const clickinput= document.getElementsByClassName('inputTypeNum');
    const totalQty= document.getElementById('totalQty');
    let total=0;
    for (let index=0; index<clickinput.length; index++){
        const element= clickinput[index];
        total= Number(element.value)+total
        totalQty.innerText= `Total Qty: ${total}`;
    }
}
function getTotalPrice(){
    const clickinput= document.getElementsByClassName('inputTypeNum');
    const totalQty= document.getElementById('totalQty');
    const totalPrice=document.getElementsByClassName('totalPp');
    let totalP=0;
    for(let index=0; index<totalPrice.length; index++){
        const element=totalPrice[index];
        totalP=Number(element.innerText)+totalP
        totalPrice.innerText=`Total Price:${totalP}`;
    }
}