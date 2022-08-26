const form = document.getElementById("form");
const input = document.getElementById("input");
const lastH2 = document.getElementById("last-h2");
const errorShow = document.getElementById("error-show");

errorShow.style.display = "none";
let data;

addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue === "") {
    errorShow.style.display = "block";
    setTimeout(() => {
      errorShow.style.display = "none";
    }, 1500);
  } else {
    lastH2.innerText = inputValue;
  }
  input.value = "";
});
