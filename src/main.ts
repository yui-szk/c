const countUpBtn = document.getElementById("count-up");
const countDownBtn = document.getElementById("count-down");
const countResetBtn = document.getElementById("count-reset");
const valueElm = document.getElementById("count-value");
const result = () => {
  if (valueElm) {
    valueElm.innerHTML = String(value);
  }
};

let value = 0;

countUpBtn?.addEventListener("click", () => {
  value++;
  result();
});

countDownBtn?.addEventListener("click", () => {
  value--;
  result();
});

countResetBtn?.addEventListener("click", () => {
  value = 0;
  result();
});
