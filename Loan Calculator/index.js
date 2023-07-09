function calculateLoan(){
    loanAmountValue = document.querySelector("#loan-amount").value;
    interestRateValue = document.querySelector("#interest-rate").value;
    monthsToPayValue = document.querySelector("#months-to-pay").value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    monthlyPayment = (loanAmountValue / (monthsToPayValue + interest)).toFixed(3);

    document.querySelector("#payment").innerHTML = `Monthly Payment : ${monthlyPayment}`;
}