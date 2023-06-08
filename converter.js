function convertTemperature() {
    var temperature = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result = document.getElementById("result");

    if (inputUnit === outputUnit) {
        result.innerText = "selected input and output units are same";
        return;
    }

    var convertedTemp;
    if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            convertedTemp = (temperature * 9 / 5) + 32;
        } else if (outputUnit === "kelvin") {
            convertedTemp = temperature + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            convertedTemp = (temperature - 32) * 5 / 9;
        } else if (outputUnit === "kelvin") {
            convertedTemp = (temperature - 32) * 5 / 9 + 273.15;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            convertedTemp = temperature - 273.15;
        } else if (outputUnit === "fahrenheit") {
            convertedTemp = (temperature - 273.15) * 9 / 5 + 32;
        }
    }

    result.innerText = temperature + " " + inputUnit + " = " + convertedTemp.toFixed(2) + " " + outputUnit;
}