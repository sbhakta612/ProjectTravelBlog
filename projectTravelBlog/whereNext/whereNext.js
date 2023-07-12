const form = document.getElementById("myForm");
const submitButton = document.getElementById("buttonSubmit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "../endPage/engPage.html";
});
const airPlane = document.getElementById("airPlane");
const linksNav = document.querySelectorAll(".topNav a");

linksNav.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    airPlane.classList.add("animate");
  });

  link.addEventListener("mouseleave", () => {
    airPlane.classList.remove("animate");
  });
});
