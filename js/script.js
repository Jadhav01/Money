function calculateFD() {
  let principal = parseFloat(document.getElementById('amount').value);
  let rate = parseFloat(document.getElementById('rate').value);
  let years = parseFloat(document.getElementById('years').value);

  let maturity = principal * Math.pow((1 + rate/100), years);

  document.getElementById('result').innerText =
    "Maturity Amount: ₹" + maturity.toFixed(2);
}

function convertCurrency() {
  let inr = parseFloat(document.getElementById('inr').value);
  let usdRate = 0.012; // demo conversion rate
  let usd = inr * usdRate;
  document.getElementById('conversion').innerText =
    inr + " INR = $" + usd.toFixed(2) + " USD";
}

