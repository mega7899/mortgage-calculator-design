/** @format */

const clearBtn = document.getElementById("underline");
const mortgageInput = document.getElementById("mortgage-number");
const termInput = document.getElementById("mortgage-term");
const rateInput = document.getElementById("mortgage-rate");

const repaymentBox = document.getElementById("repayment-type");
const interestBox = document.getElementById("interest-type");
const submitBtn = document.getElementById("montgage-btn");

const startingPage = document.getElementById("results");
const resultPage = document.getElementById("acumulated-result-starting");

clearBtn.addEventListener("click", () => {
  mortgageInput.value = "";
  termInput.value = "";
  rateInput.value = "";
});

repaymentBox.addEventListener("click", () => {
  typeChecker("repayment-box", "interest-box");
});

interestBox.addEventListener("click", () => {
  typeChecker("interest-box", "repayment-box");
});

submitBtn.addEventListener("click", () => {
  hiddenOpener();
  functionChanger();
});

function functionChanger() {
  inputFunct(
    mortgageInput,
    "'/images/red/red money sign background.png'",
    "'/images/money sign background.png'"
  );
  inputFunct(
    termInput,
    "'/images/red/red years background.png'",
    "'/images/years background.png'"
  );
  inputFunct(
    rateInput,
    "'/images/red/red equal background.png'",
    "'/images/equal background.png'"
  );
}

function inputFunct(mortgage, pic1, pic2) {
  const errorField = document.querySelectorAll(".require");

  if (mortgage.value === "") {
    mortgage.style.borderColor = "hsl(4, 69%, 50%)";
    mortgage.style.backgroundImage = `url(${pic1})`;
    errorField.forEach((element) => {
      element.style.display = "inline-block";
    });
  } else {
    mortgage.style.borderColor = "hsl(203, 41%, 72%)";
    mortgage.style.backgroundImage = `url(${pic2})`;
    errorField.forEach((elemment) => {
      elemment.style.display = "none";
    });
  }
}

function typeChecker(type, opposite) {
  type.style.borderColor = "hsl(61, 70%, 52%)";
  type.style.backgroundColor = "hsl(61, 70%, 52%)";
  opposite.style.borderColor = "black";
  opposite.style.backgroundColor = "white";
}

function hiddenOpener() {
  startingPage.style.display = "none";
  startingPage.style.visibility = "hidden";
  resultPage.style.display = "inline-block";
  resultPage.style.visibility = "visible";
}
