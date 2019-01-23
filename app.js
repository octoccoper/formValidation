// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[A-Za-z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else { 
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
 
}

function validateEmail() {
  const email = document.getElementById('email');
 
}

function validatePhone() {
  const phone = document.getElementById('phone');
 
}