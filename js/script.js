document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(function (dropdown) {
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");
      const userIcon = dropdown.querySelector(".user-icon");
  
      userIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
      });
  
      document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  });
  