// JavaScript function to show/hide fields based on the selected operation
function showFields() {
    var operation = document.getElementById("operation").value;

    // Hide all fields, result, and buttons
    document.getElementById("addFields").classList.add("hidden");
    document.getElementById("multiplyFields").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("addBtn").classList.add("hidden");
    document.getElementById("multiplyBtn").classList.add("hidden");

    // Show fields based on selected operation
    if (operation === "add") {
      document.getElementById("addFields").classList.remove("hidden");
      document.getElementById("addBtn").classList.remove("hidden");
    } else if (operation === "multiply") {
      document.getElementById("multiplyFields").classList.remove("hidden");
      document.getElementById("multiplyBtn").classList.remove("hidden");
    }
  }

  // JavaScript function to calculate and display the result for addition
  function calculateAdd() {
    var resultElement = document.getElementById("output");
    var num1 = parseFloat(document.getElementById("num1Add").value);
    var num2 = parseFloat(document.getElementById("num2Add").value);
    var result = num1 + num2;
    resultElement.textContent = result;
    document.getElementById("result").classList.remove("hidden");
  }

  // JavaScript function to calculate and display the result for multiplication
  function calculateMultiply() {
    var resultElement = document.getElementById("output");
    var num1 = parseFloat(document.getElementById("num1Multiply").value);
    var num2 = parseFloat(document.getElementById("num2Multiply").value);
    var result = num1 * num2;
    resultElement.textContent = result;
    document.getElementById("result").classList.remove("hidden");
  }


  