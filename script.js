function sendMail(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (validateName(name) && validateEmail(email)) {
    emailjs.send("service_su4d5pj", "template_j9d7kb9", params).then(
      function (response) {
        alert("Message sent successfully!");
        location.reload();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
  } else {
    if (validateName(name)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Please enter a valid name.");
    }
  }
  
}

function validateName(name) {
  const namePattern = /^[A-Za-z\s]+$/;
  return namePattern.test(name);
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.getElementById("contactForm").addEventListener("submit", sendMail);


