var text;

function validate(){

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  const error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
    
    if (name.length==0) {
      text="please enter valid name";
      error_message.innerHTML=text;
      return false;
    }
    if(isNaN(phone) || phone.length != 11){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
      
    }
    
    text = "Thank You";
      error_message.innerHTML = text;
    return true;

    
    
  }
 
/*******************************************/
  function validateAR(){
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    const error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    if (name.length==0) {
      text="الرجاء إدخال اسم صحيح";
      error_message.innerHTML=text;
      return false;
    }
    if(isNaN(phone) || phone.length != 11){
      text = "الرجاء إدخال رقم هاتف صحيح";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "الرجاء إدخال بريد إلكتروني صحيح";
      error_message.innerHTML = text;
      return false;
    }
    
    text = "شكرا لك";
    error_message.innerHTML = text;
    return true;
  }
  /*******************************************/
  function myFunction(language) {
    if(language === 'arabic'){
    location.replace("HomeAR")
  }
  else if(language === 'english') {
    location.replace("Home")
  }
};

window.addEventListener('scroll',reveal);
function reveal(){
  var reveals=document.querySelectorAll('.reveal');

  for (var i=0; i < reveals.length; i++){

    var windowheight= window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active'); 
    }
    else{
      reveals[i].classList.remove('active'); 
    }
  }
}
/*************************************************************/

