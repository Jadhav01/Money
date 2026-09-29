function convertCurrency() {
  const inrInput = document.getElementById('inr');
  const output = document.getElementById('conversion');

  if (!inrInput || !output) return;

  const amountInr = Number(inrInput.value) || 0;
  const usdValue = amountInr * 0.012;
  output.textContent = `₹${amountInr.toFixed(2)} = $${usdValue.toFixed(2)}`;
}

function calculateFD() {
  const amountInput = document.getElementById('amount');
  const rateInput = document.getElementById('rate');
  const yearsInput = document.getElementById('years');
  const output = document.getElementById('result');

  if (!amountInput || !rateInput || !yearsInput || !output) return;

  const principal = Number(amountInput.value) || 0;
  const rate = Number(rateInput.value) || 0;
  const years = Number(yearsInput.value) || 0;

  const maturity = principal * Math.pow(1 + rate / 100, years);
  const interest = maturity - principal;

  output.textContent = `Maturity Amount: ₹${maturity.toFixed(2)} | Interest Earned: ₹${interest.toFixed(2)}`;
}
