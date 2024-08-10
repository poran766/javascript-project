var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// Contact Name validation

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write your full name please";
    return false;
  }
  nameError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

// Phone number validation

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is Required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "Phone Number should be 11 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Please use only digits";
    return false;
  }
  phoneError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

// Email Validation

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }

  // if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Invalid email address";
    return false;
  }
  emailError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

// Message Validation

function validateMsg() {
  var msg = document.getElementById("contact-msg").value;
  const required = 30;
  const left = required - msg.length;

  if (left > 0) {
    msgError.innerHTML = left + "More charecter is Required";
    return false;
  }

  msgError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please complete the form again";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
