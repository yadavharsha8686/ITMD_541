const billTotalInput = document.getElementById("billTotal");
const tipPercentageInput = document.getElementById("tipPercentage");
const tipAmountInput = document.getElementById("tipAmount");
const totalBillInput = document.getElementById("totalBill");
const errorMessage = document.getElementById("error-message");

const tipForm = document.getElementById("tipForm");

billTotalInput.addEventListener("input", updateCalculator);
tipPercentageInput.addEventListener("input", updateCalculator);

function updateCalculator() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = tipPercentageInput.value;
    
    if (isNaN(billTotal)) {
        errorMessage.style.display = "block";
        return;
    }
    errorMessage.style.display = "none";
    
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalBill = billTotal + tipAmount;
    
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillInput.value = totalBill.toFixed(2);
}
