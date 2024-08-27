function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;

  if (name.trim() === "") {
    showError("Name cannot be empty");
    return false;
  }

  if (email.trim() === "") {
    showError("Email cannot be empty");
    return false;
  }

  if (phone.trim() === "" || isNaN(phone) || phone.length !== 10) {
    showError("Phone should be at least 10 digits");
    return false;
  }

  if (subject === "0") {
    showError("Please provide your expertise");
    return false;
  }

  function showError(message) {
    const errorElement = document.getElementById("demo");
    errorElement.style.color = "red";
    errorElement.style.textAlign = "center";
    errorElement.textContent = message;
  }
}
