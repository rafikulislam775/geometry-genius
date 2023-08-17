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
  triangleArea.innerHTML = area;
}

function calculateRectangleArea() {
  const widthField = document.getElementById("rectangle-width").value;
  const widthValue = parseFloat(widthField);
  //   console.log(widthValue);
  const lengthField = document.getElementById("rectangle-length").value;
  const lengthValue = parseFloat(lengthField);
  //   console.log(heightValue);
  const area = widthValue * lengthValue;
  //   console.log(area);
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerHTML = area;
}
