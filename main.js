const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const email = e.target.email.value;
//   const password = e.target.password.value;

//   // Send the email and password to the server.

//   // If the login is successful, redirect the user to the home page.

//   // If the login is unsuccessful, display an error message.
// });
// Select tab content
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));


