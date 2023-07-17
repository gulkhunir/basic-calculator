const buttonsEl = document.querySelectorAll("button");
const resultEl = document.getElementById("input-value");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue == "C") {
      clearResult();
    } else if (buttonValue == "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  resultEl.value = "";
}
function calculateResult() {
  resultEl.value = eval(resultEl.value);
}

function appendValue(buttonValue) {
  resultEl.value += buttonValue;
}
