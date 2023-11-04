let value = 0;

const valueElm = document.getElementById("count-value");
const result = () => {
  if (valueElm) {
    valueElm.innerHTML = String(value);
  }
};

const countUpBtn = document.getElementById("count-up");
countUpBtn?.addEventListener("click", () => {
  value++;
  result();
});

const countDownBtn = document.getElementById("count-down");
countDownBtn?.addEventListener("click", () => {
  value--;
  result();
});

const countResetBtn = document.getElementById("count-reset");
countResetBtn?.addEventListener("click", () => {
  value = 0;
  result();
});
