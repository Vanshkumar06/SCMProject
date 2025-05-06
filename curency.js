function convertCurrency() {
  // Get the selected currencies
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = document.getElementById('amount').value;

  if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
  }
// 
  // Show loading state
  document.getElementById('loading').style.display = 'block';
  document.getElementById('convertedAmount').textContent = '';

  // Simulating currency conversion (Replace this with an API in real use)
  setTimeout(() => {
      // Updated conversion rates including INR
      const exchangeRates = {
          "USD": { "EUR": 0.85, "GBP": 0.75, "AUD": 1.35, "CAD": 1.25, "CHF": 0.92, "JPY": 110, "CNY": 6.5, "INR": 82 },
          "EUR": { "USD": 1.18, "GBP": 0.88, "AUD": 1.59, "CAD": 1.47, "CHF": 1.08, "JPY": 129, "CNY": 7.65, "INR": 90.5 },
          "GBP": { "USD": 1.33, "EUR": 1.14, "AUD": 1.81, "CAD": 1.67, "CHF": 1.23, "JPY": 146, "CNY": 8.7, "INR": 102 },
          "AUD": { "USD": 0.74, "EUR": 0.63, "GBP": 0.55, "CAD": 0.92, "CHF": 0.67, "JPY": 81, "CNY": 5.3, "INR": 55.5 },
          "CAD": { "USD": 0.80, "EUR": 0.68, "GBP": 0.60, "AUD": 1.09, "CHF": 0.73, "JPY": 88, "CNY": 5.8, "INR": 63.5 },
          "CHF": { "USD": 1.09, "EUR": 0.93, "GBP": 0.81, "AUD": 1.49, "CAD": 1.37, "JPY": 120, "CNY": 7.9, "INR": 90 },
          "JPY": { "USD": 0.0091, "EUR": 0.0078, "GBP": 0.0068, "AUD": 0.012, "CAD": 0.011, "CHF": 0.0083, "CNY": 0.066, "INR": 0.61 },
          "CNY": { "USD": 0.15, "EUR": 0.13, "GBP": 0.11, "AUD": 0.19, "CAD": 0.17, "CHF": 0.13, "JPY": 15.15, "INR": 12.3 },
          "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0098, "AUD": 0.018, "CAD": 0.016, "CHF": 0.011, "JPY": 1.64, "CNY": 0.081 }
      };

      // Get the conversion rate
      const conversionRate = exchangeRates[fromCurrency][toCurrency];
      const convertedAmount = (amount * conversionRate).toFixed(2);

      // Display the result
      document.getElementById('convertedAmount').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

      // Hide loading spinner
      document.getElementById('loading').style.display = 'none';
  }, 1500); // Simulating a delay for the conversion
}
