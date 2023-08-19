function calculateTriangleArea() {
  const baseField = document.getElementById("triangle-base").value;
  const baseValue = parseFloat(baseField);
  //   console.log(baseValue);
  const heightField = document.getElementById("triangle-height").value;
  const heightValue = parseFloat(heightField);
  //   console.log(heightValue);
  const area = (baseValue * heightValue) / 2;
  //   console.log(area);
  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = area;
  //adding calculation entry
  calculateArea("triangle", area);
}

function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width").value;
  const lengthField = document.getElementById("rectangle-length").value;
  const area = widthField * lengthField;
  // niser 2 ta ine deya na deya eki
  // const widthValue = parseFloat(widthField);
  // const lengthValue = parseFloat(lengthField);
  // const area = widthValue * lengthValue;
  // console.log(typeof areas);
  if (isNaN(widthField) || isNaN(lengthField)) {
    alert("Please enter a number");
  } else {
    const rectangleArea = document.getElementById("rectangle-area");
    rectangleArea.innerText = area;
  }
  //adding calculation entry
  calculateArea("rectangle", area);
}

// reusable function to  get input value
// function getInput(id) {
//   const inputId = document.getElementByI(id);
//   const input = inputId.value;
//   console.log(input);
//   return input;
//   //
// }

// function calculateParallelogramArea() {
//   const base = getInput("parallelogram-base");
//   const height = getInput("parallelogram-height");
//   const area = base.value * height.value;
//   const parallelogramArea = document.getElementById("parallelogram-area");
//   parallelogramArea.innerText = area;
// }
// Reusable function to get input value
function getInput(id) {
  const input = document.getElementById(id).value;
  return input;
  // const area = base * height;
  // const input = document.getElementById(id);
  //  const area = base .value * height.value;
}

function calculateParallelogramArea() {
  const base = getInput("parallelogram-base");
  const height = getInput("parallelogram-height");

  // console.log(area);
  // console.log(typeof area);
  // const parallelogramArea = document.getElementById("parallelogram-area");
  if (isNaN(base) || isNaN(height)) {
    alert("Please enter a number");
    return;
  }
  const area = base * height;
  // parallelogramArea.innerText = area;
  // niser function diyr try korb
  setElementInnerText("parallelogram-area", area);

  //adding calculation entry
  calculateArea("parallelogram", area);
}
// Reusable function to get and set p , div,etc for .innerText
function setElementInnerText(id, area) {
  const element = document.getElementById(id);
  element.innerText = area;
}
//
function calculateEllipseArea() {
  const major = getInput("ellipse-major-redus");
  const minor = getInput("ellipse-minor-redus");
  const area = 3.1416 * major * minor;
  const areaToDecimal = area.toFixed(2);
  setElementInnerText("ellipse-area", areaToDecimal);
  //adding calculation entry
  calculateArea("ellipse", area);
}

// add to calculation entry
// get the element you want to add to
//if needs to add some class to the element
//set the element's inner html. this dynamic template strings
function calculateArea(AreaType, area) {
  // console.log(AreaType + " " + area);
  const calculateEntry = document.getElementById("calculateEntry");
  const count = calculateEntry.childElementCount;
  // add count
  const p = document.createElement("p");
  // add class
  p.classList.add("my-4");
  // p.innerHTML = AreaType + " " + area;
  p.innerHTML = `${
    count + 1
  }.${AreaType}: ${area} cm² <button class="btn btn-sm btn-error">Convert</button>`;
  calculateEntry.appendChild(p);
}
