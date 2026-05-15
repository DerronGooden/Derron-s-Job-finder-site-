function calculateMortgage() {
    let P = parseFloat(document.getElementById("loanAmount").value);
    let annualRate = parseFloat(document.getElementById("interestRate").value);
    let years = parseInt(document.getElementById("loanYears").value);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    let r = (annualRate / 100) / 12;
    let n = years * 12;

    let monthlyPayment = (P * r * Math.pow(1 + r, n)) /
                         (Math.pow(1 + r, n) - 1);

    document.getElementById("result").innerHTML =
        "$" + monthlyPayment.toFixed(2);
}
