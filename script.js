function calculate() {
    var equationSelect = document.getElementById("equation-select");
    var equationValue = equationSelect.value;
    var resultElement = document.getElementById("result");
    var result;

    if (equationValue === "force") {
        var mass1 = parseFloat(document.getElementById("mass1").value);
        var acceleration = parseFloat(document.getElementById("acceleration").value);
        if (!isNaN(mass1) && !isNaN(acceleration)) {
            result = mass1 * acceleration;
            unit = "N"; 
        } else {
            result = "Invalid input";
        }
        resultElement.innerHTML = isNaN(result) ? "Result: " + result : "The force is " + result + " " + unit;
    } else if (equationValue === "kinetic-energy") {
        var mass2 = parseFloat(document.getElementById("mass2").value);
        var velocity = parseFloat(document.getElementById("velocity").value);
        if (!isNaN(mass2) && !isNaN(velocity)) {
            result = 0.5 * mass2 * velocity ** 2;
            unit = "J"; 
        } else {
            result = "Invalid input";
        }
        resultElement.innerHTML = isNaN(result) ? "Result: " + result : "The kinetic energy is " + result + " " + unit;
    } else if (equationValue === "voltage") {
        var current = parseFloat(document.getElementById("current").value);
        var resistance = parseFloat(document.getElementById("resistance").value);
        if (!isNaN(current) && !isNaN(resistance)) {
            result = current * Math.pow(resistance, 2);
            unit = "V"; 
        } else {
            result = "Invalid input";
        }
        resultElement.innerHTML = isNaN(result) ? "Result: " + result : "The voltage is " + result + " " + unit;
    } else if (equationValue === "velocity") {
        var init_velocity = parseFloat(document.getElementById("init_velocity").value);
        var acceleration1 = parseFloat(document.getElementById("acceleration1").value);
        var time = parseFloat(document.getElementById("time").value);
        if (!isNaN(init_velocity) && !isNaN(acceleration1) && !isNaN(time)) {
            result = init_velocity + acceleration1 * time;
            unit = "m/s"; 
        } else {
            result = "Invalid input";
        }
        resultElement.innerHTML = isNaN(result) ? "Result: " + result : "The velocity is " + result + " " + unit;
    }
}

// Show corresponding inputs and equation details based on selected equation
document.getElementById("equation-select").addEventListener("change", function () {
    var selectedEquation = this.value;
    document.getElementById("equation1").style.display = selectedEquation === "force" ? "block" : "none";
    document.getElementById("equation2").style.display = selectedEquation === "kinetic-energy" ? "block" : "none";
    document.getElementById("equation3").style.display = selectedEquation === "voltage" ? "block" : "none";
    document.getElementById("equation4").style.display = selectedEquation === "velocity" ? "block" : "none";
    document.getElementById("equation-details").style.display = selectedEquation !== "" ? "block" : "none";
    document.getElementById("calculate-button").style.display = selectedEquation !== "" ? "block" : "none";


    // Display selected equation text
    var equationImage = "";
    if (selectedEquation === "force") {
        equationImage = "<img src='force_equation.png' alt='Force Equation'>";
    } else if (selectedEquation === "kinetic-energy") {
        equationImage = "<img src='kinetic_energy_equation.png' alt='Kinetic Energy Equation'>";
    } else if (selectedEquation === "voltage") {
        equationImage = "<img src='voltage_equation.png' alt='Voltage Equation'>";
    } else if (selectedEquation === "velocity") {
        equationImage = "<img src='velocity_equation.png' alt='Velocity Equation'>";
    }
    document.getElementById("equation-image").innerHTML = equationImage;
});