const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let expression = "";


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    expression += btn.textContent;
    display.value = expression;
  });
});

equal.addEventListener("click", () => {
  display.value = eval(expression);
  expression = display.value;
});

clear.addEventListener("click", () => {
  expression = "";
  display.value = "";
});
