//Navigation
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
})
//Greeting
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 0){
    greeting = "Good Morning"
}else if (hourNow > 12){
    greeting = "Good Afternoon"
}else if (hourNow > 18){
    greeting = "Good Evening"
}else {
    greeting = "Welcome"
}
greet =  (greeting);   
var cName = document.getElementById('greeting');
cName.textContent = greet;
 var eluser = document.getElementById('Username');
 eluser.addEventListener('blur', checkUser, false)
 function setup(){
  var user = document.getElementById('Username');
  user.focus();
 }
 window.addEventListener('load', setup, false);
 var today = new Date();
 var date = today.getFullYear();
 var hour = today.getHours();
 var minutes = today.getMinutes();
 var seconds = today.getSeconds();
 var full = date + hour + minutes + seconds;


//Calculator
  function calculator(){
      document.getElementById('calculator').style.width="350px";
      document.getElementById('calculator').style.display="block";
      document.getElementById('calbutton').style.display="none";
      document.getElementById('main_sec').style.opacity="0.4";

  }
  function doneed(){
      document.getElementById('calculator').style.display="none";
      document.getElementById('calculator').style.width="0";
      document.getElementById('calbutton').style.display="block";
      document.getElementById('main_sec').style.opacity="1";
  }
  
  const result = document.getElementById('result');
  
  function append(value) {
    result.value += value;
}

  function clearInput() {
      result.value = '';
  }

  function deleteLast() {
      result.value = result.value.slice(0, -1);
  }



  function calculate() {
      try {
          result.value = eval(result.value);
      } catch (error) {
          result.value = 'Error';
      }
  }