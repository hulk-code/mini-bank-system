document.getElementById('withdraw-btn').addEventListener('click',function(){

   const withdrawInput=document.getElementById('withdraw-input');
   const withdrawInputString=withdrawInput.value ;
   const newWithdraw=parseFloat(withdrawInputString);
   
   const balanceTotal=document.getElementById('balance-total');
   const balanceTotalString=balanceTotal.innerText;
   const pretotalBalance=parseFloat(balanceTotalString);

   if (newWithdraw > pretotalBalance){
      alert('insufficient fund')
      return;
   }


   const withdrawField=document.getElementById('withdraw-field');
   const withdrawFieldString=withdrawField.innerText;
   const preWithdrawInput=parseFloat(withdrawFieldString);
   
   
   const withdraw=newWithdraw+preWithdrawInput;
   withdrawField.innerText=withdraw;

   withdrawInput.value='';

   const newBalance=pretotalBalance-newWithdraw;
   balanceTotal.innerText=newBalance;





})