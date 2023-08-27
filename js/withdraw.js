// step-01: Add event listener to the withdraw button
document.getElementById("withdraw-btn").addEventListener("click",function(){
    // step-02:  get the withdraw ammount from the withdraw input field
    // For input field use .value
        const withdrawInputField=document.getElementById("withdraw-input-field");
        const newWithdrawRequest=parseFloat(withdrawInputField.value);
    // step-03: clear the withdraw input field
        withdrawInputField.value="";

        if(isNaN(newWithdrawRequest)){
            alert("please provide a valid number");
            return;
        }
    // step-04:
        const withdrawTotalBalance=document.getElementById("withdraw-total-amount");
        const previousTotalWithdrawBalance=withdrawTotalBalance.innerText;
    // step-06:
        const bankBalanceTotal=document.getElementById("bank-balance-total");
        const previousBankBalanceTotal=bankBalanceTotal.innerText;
        if(newWithdrawRequest>previousBankBalanceTotal){
            alert("insufficient Balance");
            return;
        }
    // step-05:
        const currentWithdrawTotalBalance=parseFloat(newWithdrawRequest)+parseFloat(previousTotalWithdrawBalance);
        withdrawTotalBalance.innerText=currentWithdrawTotalBalance;
    // step-07:
        const currentBankBalanceTotal=parseFloat(previousBankBalanceTotal)-parseFloat(newWithdrawRequest);
        bankBalanceTotal.innerText=currentBankBalanceTotal;
    })