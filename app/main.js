"use strict";
// select elements
const depositBtn = document.getElementById("deposit-button");
const withdrawBtn = document.getElementById("withdraw-button");
// get input value
function getInputAmount(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountValue = inputField.value;
  const inputAmount = parseFloat(inputAmountValue);
  inputField.value = "";
  return inputAmount;
}
// update deposit or withdraw balance function
function updateBalance(textId, currentInputAmount) {
  const textField = document.getElementById(textId);
  const previusAmout = textField.innerText;
  const previusAmoutNumber = parseFloat(previusAmout);
  const total = previusAmoutNumber + currentInputAmount;
  textField.innerText = total;
}
// get total balance
const getTotalBalance = function () {
  const totalBalance = document.getElementById("total-balance");
  const previusBalance = totalBalance.innerText;
  const currentBalance = parseFloat(previusBalance);
  return currentBalance;
};

// total update balance
function totalUpdateBalance(totalBalanceId, currentInputAmount, isAdd) {
  const totalBalance = document.getElementById(totalBalanceId);
  const previusBalance = totalBalance.innerText;
  const currentBalance = parseFloat(previusBalance);
  if (isAdd == "true") {
    totalBalance.innerText = currentBalance + currentInputAmount;
  } else {
    totalBalance.innerText = currentBalance - currentInputAmount;
  }
}

// deposit button handler event

depositBtn.addEventListener("click", function () {
  const currentInputAmount = getInputAmount("deposit-input");
  if (currentInputAmount > 0) {
    updateBalance("total-deposit", currentInputAmount);
    totalUpdateBalance("total-balance", currentInputAmount, "true");
  } else {
    alert("Please enter a Number");
  }
});
// withdraw button handler event
withdrawBtn.addEventListener("click", function () {
  const currentInputAmount = getInputAmount("withdraw-input");
  if (currentInputAmount > 0 || getTotalBalance < currentInputAmount) {
    updateBalance("total-withdraw", currentInputAmount);
    totalUpdateBalance("total-balance", currentInputAmount, "false");
  } else {
    alert("Please enter a Number and less than Current Balance");
  }
});
