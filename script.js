const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const parseInput = () => {
  return parseInt(numberInput.value);
};

const showOutput = () => {
  output.classList.remove("hide");
};

const addErrorClass = () => {
  output.classList.add("error");
};

const removeErrorClass = () => {
  output.classList.remove("error");
};

const checkInputIsValid = () => {
  const parsedInput = parseInput();

  if (isNaN(parsedInput)) {
    output.textContent = "Please enter a valid number";
    return false;
  }

  if (parsedInput < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return false;
  }

  if (parsedInput > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return false;
  }

  return true;
};

const convertToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  if (num === 0) {
    return "";
  }

  for (const numeral of romanNumerals) {
    if (num >= numeral.value) {
      return numeral.symbol + convertToRoman(num - numeral.value);
    }
  }
};

convertBtn.addEventListener("click", () => {
  showOutput();
  removeErrorClass();
  if (!checkInputIsValid()) {
    addErrorClass();
    return;
  }
  output.textContent = convertToRoman(parseInput());
});
