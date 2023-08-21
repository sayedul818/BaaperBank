// step-01: Add event listener to the deposit button
document.getElementById("deposit-btn").addEventListener("click",function(){

// step-02: get the deposit ammount from the deposit input field
// For input field use .value
const depositInputField=document.getElementById("deposit-input-field");
const newDepositRequest=depositInputField.value;

// step-03: get the current deposit total Balance
// for non input (element other than input,textarea) use innertext to get the text
const depositTotalAmount=document.getElementById("deposit-total-amount");
const previousDepositTotalAmount=depositTotalAmount.innerText;

// step-04:add numbers to set the total deposite
const currentDepositTotalAmount=parseFloat(newDepositRequest)+parseFloat(previousDepositTotalAmount);
depositTotalAmount.innerText=currentDepositTotalAmount;

// step-05:
const bankBalanceTotal=document.getElementById("bank-balance-total");
const previousBankBalanceTotal=bankBalanceTotal.innerText;
const currentBankBalanceTotal=parseFloat(newDepositRequest)+parseFloat(previousBankBalanceTotal);
bankBalanceTotal.innerText=currentBankBalanceTotal;

// clear the deposit input field
depositInputField.value="";
})
