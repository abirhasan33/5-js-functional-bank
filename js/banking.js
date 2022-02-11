/* function doubleIt(num){
    const result = num * 2;
    return result;
} 
const first = doubleIt(5);
const second = doubleIt(7); */

function getInpurValur(inputId){
    const inputField = document.getElementById(inputId);
    const depoditAmount = inputField.value;
    const newDepoditText = parseFloat(depoditAmount);
    inputField.value= '';
    return newDepoditText;
}

function updeteTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalnce(){
    const balanceTotal = document.getElementById("balance-total");
    const priveBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(priveBalanceTotal);
    return newBalanceTotal;
}

function updeteBlnce(amount, isAdd){
    const balanceTotal = document.getElementById("balance-total");
    // const priveBalanceTotal = balanceTotal.innerText;
    // const newBalanceTotal = parseFloat(priveBalanceTotal);
    const newBalanceTotal = getCurrentBalnce();
    if(isAdd== true){
        balanceTotal.innerText = newBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = newBalanceTotal - amount;
    }
}

document.getElementById("depodit-button").addEventListener("click", function(){
    const depositAmount = getInpurValur("depodit-input");
    if(depositAmount > 0){
        updeteTotalField('deposit-total',depositAmount);
    updeteBlnce(depositAmount, true)
    }
});

document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawAmount= getInpurValur("withdraw-input");
    const currentBalnce = getCurrentBalnce();
    if(withdrawAmount > 0 && withdrawAmount < currentBalnce){
        updeteTotalField('withdraw-total', withdrawAmount);
    updeteBlnce(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalnce){
        console.log("You cal not withdraw more then what you have in your account");
    }
})


// new        
/* document.getElementById("depodit-button").addEventListener('click', function(){
    // get the amount deposit 
        const depositInput = document.getElementById("depodit-input");
        const newdepositAmountText = depositInput.value;
        const newdepositAmount = parseFloat(newdepositAmountText);
    // update deposit total 
        const depositTolale = document.getElementById('deposit-total');
        const previousDepositText = depositTolale.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        const newDepositTotal = previousDepositAmount + newdepositAmount;
    
        depositTolale.innerText = newDepositTotal;
    // updat account balnach 
        const balanceTotal = document.getElementById("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(balanceTotalText);
        const allBalance = newBalanceTotal + newdepositAmount;
    
        balanceTotal.innerText = allBalance;
    
        // clear the deposit input field 
        depositInput.value= ' ';
    });
    
    document.getElementById("withdraw-button").addEventListener('click', function(){
        const withdrawinput = document.getElementById("withdraw-input");
        const withdrawAmountText = withdrawinput.value;
        const newWithdrawAmount = parseFloat(withdrawAmountText);
        console.log(withdrawAmountText);
    // set withdraw Tolal 
        const withdrawTolal = document.getElementById("withdraw-total");
        const previousWithdrawText = withdrawTolal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawText);
        const newpreviousWithdrawTolal = previousWithdrawTotal + newWithdrawAmount;  
        
        withdrawTolal.innerText= newpreviousWithdrawTolal;
    
        // update balance 
        const balanceTolal = document.getElementById("balance-total");
        const previousBalanceText = balanceTolal.innerText;
        const previousBalanceTolal = parseFloat(previousBalanceText);
        const newpreviousBalance = previousBalanceTolal - newWithdrawAmount;
    
        balanceTolal.innerText = newpreviousBalance;
    
        // clear Withdraw input 
        withdrawinput.value= '';
    }) */
