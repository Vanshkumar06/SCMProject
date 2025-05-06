// Conversion factors for each category
const conversions = {
    length: {
        meters: { kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
        kilometers: { meters: 1000, miles: 0.621371, feet: 3280.84 },
        miles: { meters: 1609.34, kilometers: 1.60934, feet: 5280 },
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394 }
    },
    temperature: {
        celsius: { fahrenheit: (value) => (value * 9/5) + 32, kelvin: (value) => value + 273.15 },
        fahrenheit: { celsius: (value) => (value - 32) * 5/9, kelvin: (value) => (value - 32) * 5/9 + 273.15 },
        kelvin: { celsius: (value) => value - 273.15, fahrenheit: (value) => (value - 273.15) * 9/5 + 32 }
    },
    volume: {
        liters: { milliliters: 1000, cubic_meters: 0.001, gallons: 0.264172 },
        milliliters: { liters: 0.001, cubic_meters: 1e-6, gallons: 0.000264172 },
        cubic_meters: { liters: 1000, milliliters: 1e6, gallons: 264.172 },
        gallons: { liters: 3.78541, milliliters: 3785.41, cubic_meters: 0.00378541 }
    },
    area: {
        square_meters: { square_kilometers: 1e-6, square_miles: 3.861e-7, square_feet: 10.7639 },
        square_kilometers: { square_meters: 1e6, square_miles: 0.386102, square_feet: 10763910.4 },
        square_miles: { square_meters: 2.59e6, square_kilometers: 2.59, square_feet: 27878400 },
        square_feet: { square_meters: 0.092903, square_kilometers: 9.2903e-8, square_miles: 3.587e-8 }
    },
    weight: {
        kilograms: { grams: 1000, pounds: 2.20462, ounces: 35.274 },
        grams: { kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274 },
        pounds: { kilograms: 0.453592, grams: 453.592, ounces: 16 },
        ounces: { kilograms: 0.0283495, grams: 28.3495, pounds: 0.0625 }
    },
    time: {
        seconds: { minutes: 1/60, hours: 1/3600, days: 1/86400 },
        minutes: { seconds: 60, hours: 1/60, days: 1/1440 },
        hours: { seconds: 3600, minutes: 60, days: 1/24 },
        days: { seconds: 86400, minutes: 1440, hours: 24 }
    }
};

// Populate unit options based on selected category
function updateUnits() {
    const category = document.getElementById('category').value;
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');

    // Clear previous options
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    const units = Object.keys(conversions[category]);

    units.forEach(unit => {
        let optionFrom = document.createElement('option');
        optionFrom.value = unit;
        optionFrom.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        fromUnitSelect.appendChild(optionFrom);

        let optionTo = document.createElement('option');
        optionTo.value = unit;
        optionTo.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        toUnitSelect.appendChild(optionTo);
    });

    // Trigger conversion when units are updated
    convertUnits();
}

// Convert function
function convertUnits() {
    const category = document.getElementById('category').value;
    const value = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (!isNaN(value) && value !== '') {
        let result;
        // Handle special conversion for temperature (since it's formula-based)
        if (category === "temperature") {
            result = conversions[category][fromUnit][toUnit](value);
        } else {
            result = value * conversions[category][fromUnit][toUnit];
        }
        document.getElementById('outputValue').innerText = result.toFixed(4);
    } else {
        document.getElementById('outputValue').innerText = '0';
    }
}

// Initialize with default category (length)
updateUnits();
