// step-01: add click event handler with the submit button

document.getElementById("submit-button").addEventListener("click",function(){

// step-02: get the email address inside the email input field
// always rememberto use .value to get text from an input field

   const emailField=document.getElementById("email-field");
   const email=emailField.value;

// step-03: get password
// 03.a: set id on  the html element 
// 03.b: get the element
// 03.c: get the value from the element 

   const passField=document.getElementById("password-field");
   const password=passField.value;

// DANGER: DO NOT VERIFY email & password on the client side
// step-04: Verify email and password

   if(email==="sayedvai2028@gmail.com" && password=="sayed2428"){
    window.location.href="bank.html"
   }else if(email==="tamilashikdar06@gmail.com" && password=="sayed242806"){
    window.location.href="bank.html"
   }else if(email==="sayed28082000@gmail.com" && password=="sayed2028"){
    window.location.href="bank.html"
   }else{
    alert("invalid email or password");
   }
})