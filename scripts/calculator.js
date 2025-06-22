// Loan Calculator
function calculateLoan() {
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('loanTerm').value) * 12;

    const monthlyPayment = (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - amount;

    document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').textContent = `$${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').textContent = `$${totalInterest.toFixed(2)}`;
    document.getElementById('loanResult').classList.remove('hidden');
}

// Compound Interest Calculator
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('annualRate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    const futureValue = principal * Math.pow(1 + rate, years);
    document.getElementById('futureValue').textContent = `$${futureValue.toFixed(2)}`;
    document.getElementById('interestResult').classList.remove('hidden');
}

// Initialize calculators on page load
document.addEventListener('DOMContentLoaded', () => {
    calculateLoan();
    calculateInterest();
});