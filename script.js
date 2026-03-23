function validateForm() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  if (name === "") {
    alert("Name required");
    return false;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}
