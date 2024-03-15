import numpy as np
import matplotlib.pyplot as plt

# Define the equation
def calculate_U_over_a(f, hp, s, ms, D, di, d, er):
    w = 2 * np.pi * f  # Calculate angular frequency from frequency
    Ap = np.pi * (D**2 - di**2) / 4  # Calculate the area of piezo
    e = er * 8.854e-12 # Calculate the permittivity
    alpha = -(e * Ap) / (ms * (w ** 2) * d * hp)
    rhs = (((hp * s * ms * (w ** 2) * alpha) / Ap) + d - alpha) ** -1
    result = (rhs / (w ** 2)) * 1000 * 10
    return result

# Function to calculate U/a values for a given supplier
def calculate_U_over_a_values(start_freq, end_freq, num_points, hp, s, ms, D, di, d, er):
    # Generate frequency values
    frequency_values = np.linspace(start_freq * 1000, end_freq * 1000, num_points)  # Convert Hz to kHz
    
    # Initialize an empty list to store U/a values
    U_over_a_values = []
    
    # Calculate U/a for each frequency value
    for freq in frequency_values:
        U_over_a_values.append(calculate_U_over_a(freq, hp, s, ms, D, di, d, er))
    
    return frequency_values, U_over_a_values

# Prompt user for input for Supplier-1
print("Enter parameters for Supplier-1:")
supplier_name1 = input("Enter name for Supplier-1: ")
hp1 = float(input("Enter the height or thickness of piezo, hp (in m): "))
s1 = float(input("Enter the elastic compliance, s (in m^2N): "))
ms1 = float(input("Enter the mass of seismic body, ms (in kg): "))
D1 = float(input("Enter the outer diameter of piezo, D (in m): "))
di1 = float(input("Enter the inner diameter of piezo, di (in m): "))
d1 = float(input("Enter the charge constant, d (in C/N): "))
er1 = float(input("Enter the relative permittivity, er (No unit): "))
start_freq1 = float(input("Enter the start frequency range (in kHz): "))
end_freq1 = float(input("Enter the end frequency range (in kHz): "))
num_points1 = int(input("Enter the number of points for frequency range: "))

# Calculate U/a values for Supplier-1
freq_values1, U_over_a_values1 = calculate_U_over_a_values(start_freq1, end_freq1, num_points1, hp1, s1, ms1, D1, di1, d1, er1)

# Prompt user for input for Supplier-2
print("\nEnter parameters for Supplier-2:")
supplier_name2 = input("Enter name for Supplier-2: ")
hp2 = float(input("Enter the height or thickness of piezo, hp (in m): "))
s2 = float(input("Enter the elastic compliance, s (in m^2N): "))
ms2 = float(input("Enter the mass of seismic body, ms (in kg): "))
D2 = float(input("Enter the outer diameter of piezo, D (in m): "))
di2 = float(input("Enter the inner diameter of piezo, di (in m): "))
d2 = float(input("Enter the charge constant, d (in C/N): "))
er2 = float(input("Enter the relative permittivity, er (No unit): "))
start_freq2 = float(input("Enter the start frequency range (in kHz): "))
end_freq2 = float(input("Enter the end frequency range (in kHz): "))
num_points2 = int(input("Enter the number of points for frequency range: "))

# Calculate U/a values for Supplier-2
freq_values2, U_over_a_values2 = calculate_U_over_a_values(start_freq2, end_freq2, num_points2, hp2, s2, ms2, D2, di2, d2, er2)

# Plot the result for both suppliers
plt.plot(freq_values1 / 1000, U_over_a_values1, label=supplier_name1)
plt.plot(freq_values2 / 1000, U_over_a_values2, label=supplier_name2)
plt.xlabel('Frequency, f (kHz)')
plt.ylabel('Sensitivity,U/a (mV/g)')
plt.title('Sensitivity vs Frequency')
plt.legend()
plt.grid(True)
plt.show()