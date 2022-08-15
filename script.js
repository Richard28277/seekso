function validateForm() {
  var x = document.forms["web search"]["q"].value;
  if (x == "") {
    return false;
  }
}
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
