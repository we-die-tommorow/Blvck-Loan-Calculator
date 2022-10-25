
let resultTM = document.getElementById("result")


function evaluateLoan ()  {

    let amount =   document.getElementById("amount").value
let interest = document.getElementById("interest").value
let months =   document.getElementById("months").value


let monthlyPayment = ((amount/months) + interest)
let totalInterest = (amount * (interest * 0.01)) / months
let totalPayment = (parseFloat(amount) + parseFloat(interest))

resultTM.innerHTML =  `<h2>Results : </h2>
<h4>Total payment : ${parseFloat(totalPayment).toFixed(2)}</h4> 
<h4>Monthly Payment : ${parseFloat(monthlyPayment).toFixed(2)}</h4>
<h4>Total Interest : ${parseFloat(totalInterest).toFixed(2)}</h4>`

}

function clearValue() {
    resultTM.innerHTML = "";
  }



