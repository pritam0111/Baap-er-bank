// 1.add event listen to the deposit button ///
// 2.get deposit amount from the deposit input field////
// 3.clear the deposit input field after getting the value
// 4.get the previous total
// 5.calculate new  deposit total and set the value to the deposit total
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


})
   


