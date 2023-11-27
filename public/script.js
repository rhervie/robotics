const form =  document.getElementById('form');
const username=  document.getElementById('username');
const email =  document.getElementById('email');
const password=  document.getElementById('password');
const password2 =  document.getElementById('password2');

// Function for Validation  Error
 function showError(input, message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    console.log(message);
    small.innerText=message;
 }
 // Function for Success Input
 function showSuccess(input) {
   const formControl= input.parentElement;
   formControl.className='form-control success' 
 }
 // Email Validation
 function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
      showSuccess(input)
    } else {
      showError(input,'Email is not valid')
    }
 }
// Event Listener
    function checkRequired(inputArr){
        inputArr.forEach(function(input) {
           if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is Required`)
           }  else {
            showSuccess(input)
           }
        });
    }
    // Get field name
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    function checkLength(input,min,max){
       if(input.value.length < min) {
         showError(input,`${getFieldName(input)} must be at lease ${min} characters`);
       } else if(input.value.length > max){
         showError(input,`${getFieldName(input)} must not ne more than ${max} characters`)
       }  else{
        showSuccess(input)
       }
    }
        // Password Match
        function checkPasswordMatch(input1,input2){
          if (input1.value !== input2.value) {
            showError(input2,'Password does not match')
          }
        }
        document.addEventListener('DOMContentLoaded', function () {
          console.log('DOM content loaded');
        
        });  
    form.addEventListener('submit', function(e){ 
      e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordMatch(password,password2);
  });
