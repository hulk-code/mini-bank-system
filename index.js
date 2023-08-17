document.getElementById('submit-btn').addEventListener('click',function(){
   const emailField=document.getElementById('email-field');
   const email=emailField.value;
   const passwordField=document.getElementById('password-field');
   const password=passwordField.value;
   // console.log(email,password);
   if(email==='akash@gmail.com' && password ==='123456' ){
     window.location.href='main.html'
      
      emailField.value='';
      passwordField.value='';
   }
   else{
      alert('invalid user')
      emailField.value='';
      passwordField.value='';
   }
})