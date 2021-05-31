const options = document.querySelector(".options");
const openOptions = document.querySelector(".open-options");
const closeOptions = document.querySelector(".close-options");

openOptions.addEventListener("click", () => {
  options.classList.add("active");
});
closeOptions.addEventListener("click", () => {
  options.classList.remove("active");
});


console.log('.,');