const aside = document.querySelector("aside"),
  openAside = document.querySelector(".open-aside"),
  closeAside = document.querySelector(".close-aside");

openAside.addEventListener("click", () => {
  aside.classList.add("active");
});
closeAside.addEventListener("click", () => {
  aside.classList.remove("active");
});
