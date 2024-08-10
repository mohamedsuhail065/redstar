function sendMail(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  let params = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  clearErrors();

  let valid = true;

  if (!validateName(name)) {
    showError("nameError", "Please enter a valid name.");
    valid = false;
  }

  if (!validateEmail(email)) {
    showError("emailError", "Please enter a valid email address.");
    valid = false;
  }

  if(subject==""){
    showError("subjectError", "Please enter a subject.");
    valid = false;
  }

  if(message==""){
    showError("messageError", "Please enter a message.");
    valid = false;
  }

  if (valid) {
    emailjs.send("service_su4d5pj", "template_j9d7kb9", params).then(
      function (response) {
        alert("Message sent successfully!");
        location.reload();
      },
      function (error) {
        showError("formError", "Failed to send message. Please try again.");
      }
    );
  }
}

function validateName(name) {
  if (name != "") {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
  }
}

function validateEmail(email) {
  if (email != "") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(function (error) {
    error.textContent = "";
    error.style.display = "none";
  });
}

document.getElementById("contactForm").addEventListener("submit", sendMail);
