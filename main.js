document.getElementById('diposite-btn').addEventListener('click', function(){

   const depositeInput=document.getElementById('diposite-input');
   const depositeInputString=depositeInput.value ;
   const Newdeposite=parseFloat(depositeInputString);


   const depositeField=document.getElementById('Diposite-field');
   const depositeFieldString=depositeField.innerText;
   const previousDepo=parseFloat(depositeFieldString);

   const deposite=previousDepo+Newdeposite;
   depositeField.innerText=deposite;
   depositeInput.value='';
  

   const balanceTotal=document.getElementById('balance-total');
   const balanceTotalString=balanceTotal.innerText;
   const pretotalBalance=parseFloat(balanceTotalString);

   const remainingBlance=pretotalBalance+Newdeposite;

balanceTotal.innerText=remainingBlance;


})

