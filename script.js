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

const convertToRoman = (num) => {};

convertBtn.addEventListener("click", () => {
  showOutput();
  removeErrorClass();
  if (!checkInputIsValid()) {
    addErrorClass();
    return;
  }
});
