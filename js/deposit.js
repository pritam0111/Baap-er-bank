// 1.add event listen to the deposit button ///
// 2.get deposit amount from the deposit input field////
// 3.clear the deposit input field after getting the value
// 4.get the previous total
// 5.calculate new  deposit total and set the value to the deposit total
// 6.get the current balance total
// 7.calculate the new balance and set it to the balance total element
document.getElementById('btn-deposit').addEventListener('click', function(){
  
   //  step-2//
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString);
    console.log(newDepositAmount);  
    // // step-3///
depositField.value= '';

// step-4//
const depositTotalElement =document.getElementById("deposit-total");
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
// step-5
const newDepositTotal= previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = newDepositTotal;

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;
})
   


