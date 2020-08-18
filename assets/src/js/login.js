var members = ["john"];

document.getElementById("output").innerHTML = members;

function login() {
  
  var x = document.getElementById("loginForm").elements.namedItem("fname").value;
  

  document.getElementById("output").innerHTML = members;
  
  members.push(x);

  window.location.href = "Kalender.html";

    
  
        
    
}


  
  
  



