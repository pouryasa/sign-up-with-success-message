 function validateEmail() {
  let txt = document.getElementById("emailName").value;
  let filter =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  if (!filter.test(txt)) {
    //alert ("please proviade")
    document.getElementById("emailName").style.backgroundColor = '#FEE9E8';
    document.getElementById("emailName").style.borderColor = '#BE7F7A';
    document.getElementById("notValidEmail").style.visibility = "visible";
  }
  else {
    window.location.assign("success-page.html");
  }
}

//let txt = document.getElementById("emailName").value;
//document.getElementById("demo").innerHTML = txt;

//var value = prompt(txt)
//localStorage.setItem("inputValue", value)


function backHome() {
  window.location.assign("index.html")
}




