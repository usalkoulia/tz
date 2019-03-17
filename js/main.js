var contact_button = document.querySelector("#contact-button");
var contact_form = document.querySelector("#contact-form");
var close_contact_button = document.querySelector("#close-contact-button");

contact_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  contact_form.classList.add("backdrop--active");
})

close_contact_button.addEventListener("click", function() {
  contact_form.classList.remove("backdrop--active");
})

contact_form.addEventListener("click", function(evt) {
  contact_form.classList.remove("backdrop--active");
})

var user_button = document.querySelector("#user-button");
var user_form = document.querySelector("#user-form");
var close_user_button = document.querySelector("#close-user-button");

user_button.addEventListener("click", function() {
  user_form.classList.add("backdrop--active");
})

close_user_button.addEventListener("click", function() {
  user_form.classList.remove("backdrop--active");
})

user_form.addEventListener("click", function(evt) {
  user_form.classList.remove("backdrop--active");
})
