function appendValue(value) {
  document.getElementById("display").value += value;
}

let openParenCount = 0;

function insertParenthesis() {
  const display = document.getElementById("display");

  // Insert '(' if unbalanced, else insert ')'
  const value = display.value;
  const openCount = (value.match(/\(/g) || []).length;
  const closeCount = (value.match(/\)/g) || []).length;

  if (openCount > closeCount) {
    display.value += ')';
  } else {
    display.value += '(';
  }
}


function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}


function toggleNegative() {
  const display = document.getElementById("display");
  let value = display.value.trim();

  // If the value ends with a number or closing parenthesis
  // Find the last number or wrapped expression
  let match = value.match(/(\(-?\d+(\.\d+)?\)|\d+(\.\d+)?)$/);

  if (match) {
    let num = match[0];
    let start = value.lastIndexOf(num);
    let before = value.slice(0, start);

    if (num.startsWith("(-")) {
      // It's already negative → unwrap it
      num = num.slice(2, -1); // remove ( and )
    } else {
      // Wrap it as negative
      num = `(-${num})`;
    }

    display.value = before + num;
  }
}