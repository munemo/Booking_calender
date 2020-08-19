/*var members = [""];//Array for storing users

function login() //Function shows users in the array
{
  var x = document.getElementById("loginForm").elements.namedItem("fname").value;
  
  var regex = /^((?!(0))[0-9]{9})$/g; //regex for checking 9 digit number that does not start from 0
  
  if (reg.IsMatch(x))
  {
    members.push(x); //adds new value to array
    document.getElementById("output").innerHTML = "Format is good";
  }

  else 
  {

    document.getElementById("output").innerHTML = "Format is not good";
  }

}
//  window.location.href = "Kalender.html";


*/

// /^(19|20)?(\d{6}(-|\s)\d{4}|(?!19|20)\d{10})$/; regex swedish for person number


function ValidateEmail(email) //email validation function
{
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(regex))
{
  window.location.href = "kalender.html";
  document.form1.text1.focus();
  //window.location.href = "kalender.html";
//return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}