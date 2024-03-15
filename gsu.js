// Define the equation
function calculateUOverA(f, hp, s, ms, D, di, d, er) {
    const w = 2 * Math.PI * f; // Calculate angular frequency from frequency
    const Ap = Math.PI * (D ** 2 - di ** 2) / 4; // Calculate the area of piezo
    const e = er * 8.854e-12; // Calculate the permittivity
    const alpha = -(e * Ap) / (ms * (w ** 2) * d * hp);
    const rhs = (((hp * s * ms * (w ** 2) * alpha) / Ap) + d - alpha) ** -1;
    const result = (rhs / (w ** 2)) * 1000 * 10;
    return result;
}

// Function to calculate U/a values for a given supplier
function calculateUOverAValues(startFreq, endFreq, numPoints, hp, s, ms, D, di, d, er) {
    // Generate frequency values
    const frequencyValues = Array.from({ length: numPoints }, (_, index) =>
        startFreq * 1000 + (endFreq * 1000 - startFreq * 1000) * index / (numPoints - 1)
    );

    // Initialize an empty array to store U/a values
    const UOverAValues = [];

    // Calculate U/a for each frequency value
    for (const freq of frequencyValues) {
        UOverAValues.push(calculateUOverA(freq, hp, s, ms, D, di, d, er));
    }

    return [frequencyValues, UOverAValues];
}

// Prompt user for input for Supplier-1
console.log("Enter parameters for Supplier-1:");
const supplierName1 = prompt("Enter name for Supplier-1: ");
const hp1 = parseFloat(prompt("Enter the height or thickness of piezo, hp (in m): "));
const s1 = parseFloat(prompt("Enter the elastic compliance, s (in m^2N): "));
const ms1 = parseFloat(prompt("Enter the mass of seismic body, ms (in kg): "));
const D1 = parseFloat(prompt("Enter the outer diameter of piezo, D (in m): "));
const di1 = parseFloat(prompt("Enter the inner diameter of piezo, di (in m): "));
const d1 = parseFloat(prompt("Enter the charge constant, d (in C/N): "));
const er1 = parseFloat(prompt("Enter the relative permittivity, er (No unit): "));
const startFreq1 = parseFloat(prompt("Enter the start frequency range (in kHz): "));
const endFreq1 = parseFloat(prompt("Enter the end frequency range (in kHz): "));
const numPoints1 = parseInt(prompt("Enter the number of points for frequency range: "), 10);

// Calculate U/a values for Supplier-1
const [freqValues1, UOverAValues1] = calculateUOverAValues(startFreq1, endFreq1, numPoints1, hp1, s1, ms1, D1, di1, d1, er1);

// Prompt user for input for Supplier-2
console.log("\nEnter parameters for Supplier-2:");
const supplierName2 = prompt("Enter name for Supplier-2: ");
const hp2 = parseFloat(prompt("Enter the height or thickness of piezo, hp (in m): "));
const s2 = parseFloat(prompt("Enter the elastic compliance, s (in m^2N): "));
const ms2 = parseFloat(prompt("Enter the mass of seismic body, ms (in kg): "));
const D2 = parseFloat(prompt("Enter the outer diameter of piezo, D (in m): "));
const di2 = parseFloat(prompt("Enter the inner diameter of piezo, di (in m): "));
const d2 = parseFloat(prompt("Enter the charge constant, d (in C/N): "));
const er2 = parseFloat(prompt("Enter the relative permittivity, er (No unit): "));
const startFreq2 = parseFloat(prompt("Enter the start frequency range (in kHz): "));
const endFreq2 = parseFloat(prompt("Enter the end frequency range (in kHz): "));
const numPoints2 = parseInt(prompt("Enter the number of points for frequency range: "), 10);

// Calculate U/a values for Supplier-2
const [freqValues2, UOverAValues2] = calculateUOverAValues(startFreq2, endFreq2, numPoints2, hp2, s2, ms2, D2, di2, d2, er2);

// Plot the result for both suppliers
plt.plot(freqValues1 / 1000, UOverAValues1, label = supplierName1)
plt.plot(freqValues2 / 1000, UOverAValues2, label = supplierName2)
plt.xlabel('Frequency, f (kHz)')
plt.ylabel('Sensitivity,U/a (mV/g)')
plt.title('Sensitivity vs Frequency')
plt.legend()
plt.grid(True)
plt.show()
