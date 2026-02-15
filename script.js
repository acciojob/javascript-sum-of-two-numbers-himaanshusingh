let input1 = parseInt(prompt("Enter the first number:"));
let input2 = parseInt(prompt("Enter the second number:"));

function isValidNumber(value) {
  return !isNaN(value) && value !== "";
}

if (isValidNumber(input1) && isValidNumber(input2)) {
  let sum = input1 + input2;
  alert(`The sum of ${input1} and ${input2} is ${sum}.`);
} else alert("Invalid input. Please enter a valid number.");
