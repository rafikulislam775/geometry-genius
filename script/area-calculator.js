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
