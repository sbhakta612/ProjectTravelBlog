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
