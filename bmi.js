function calculateBMI() {
  // Get the input values
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;

  // Validate inputs
  if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
      alert("Please enter valid numbers for weight, height, and age.");
      return;
  }

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Display result
  document.getElementById('result').style.display = 'block';
  document.getElementById('bmi-value').textContent = bmi.toFixed(2);

  // Determine BMI status
  let status = "";
  if (bmi < 18.5) {
      status = "Underweight";
      document.getElementById('status').classList.add('underweight');
  } else if (bmi >= 18.5 && bmi < 24.9) {
      status = "Normal weight";
      document.getElementById('status').classList.add('normal');
  } else if (bmi >= 25 && bmi < 29.9) {
      status = "Overweight";
      document.getElementById('status').classList.add('overweight');
  } else {
      status = "Obese";
      document.getElementById('status').classList.add('obese');
  }

  document.getElementById('status').textContent = status;

  // Reset previous status classes
  document.getElementById('status').classList.remove('underweight', 'normal', 'overweight', 'obese');
}
