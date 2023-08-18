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
}

function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width").value;
  // const widthValue = parseFloat(widthField);
  //   console.log(widthValue);
  const lengthField = document.getElementById("rectangle-length").value;
  // const lengthValue = parseFloat(lengthField);
  //   console.log(heightValue);
  // const area = widthValue * lengthValue;
  const areas = widthField * lengthField;
  // console.log(areas);
  // console.log(typeof areas);
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = areas;
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
  const input = document.getElementById(id);
  return input;
}

function calculateParallelogramArea() {
  const base = getInput("parallelogram-base");
  const height = getInput("parallelogram-height");
  const area = base.value * height.value;
  // console.log(area);
  // console.log(typeof area);
  // const parallelogramArea = document.getElementById("parallelogram-area");

  // parallelogramArea.innerText = area;
  // niser function diyr try korb
  setElementInnerText("parallelogram-area", area);
}
// Reusable function to get and set p , div,etc for .innerText
function setElementInnerText(id, area) {
  const element = document.getElementById(id);
  element.innerText = area;
}
