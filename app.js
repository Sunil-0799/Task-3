function convert() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var outputTemp;
  
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      outputTemp = (inputTemp * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      outputTemp = (inputTemp - 32) * 5/9;
    } else {
      outputTemp = inputTemp; // If both units are the same
    }
  
    document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}
  