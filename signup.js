function validateForm(onsubmit) {
    
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var Mobile = document.getElementById("Mobile").value;
    var age = document.getElementById("age").value;
    var pass = document.getElementById("pass").value;
  
    if (!validateName(Name)) {
      alert("Please enter a valid name");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (!validateMobileNumber(Mobile)) {
      alert("Please enter a valid mobile number");
      return false;
    }
  
    if (!validateAge(age)) {
      alert("Please enter a valid age");
      return false;
    }
  
    if (!validatePassword(pass)) {
      alert("Please enter a valid password");
      return false;
    }
  
    return true;
  }
  
  function validateName(Name) {
    if (!name) {
      return false;
    }
    var regex = /^[a-zA-Z ]+$/;
    return regex.test(Name);
  }
  
  function validateEmail(email) {
    if (!email) {
      return false;
    }
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
  }
  
  function validateMobileNumber(Mobile) {
    if (!Mobile) {
      return false;
    }
    var regex = /^[0-9]{10}$/};