const netPrice = document.getElementById('net-price');
const vatRate = document.getElementById('vat-rate');
const incAmount = document.getElementById('inc-amount');
const vatAmount = document.getElementById('vat-amount');
const calcBtn = document.getElementById('calc-btn');


function VATInclusiveAmount(price, rate){
    let totalAmount = price + (price * (rate / 100));
    return totalAmount.toFixed(2);
}
function VATAmount(price, rate){
    let taxAmount = price * (rate / 100)
    return taxAmount.toFixed(2)
}

calcBtn.addEventListener('click', function(){
    if(netPrice.value === "" || isNaN(netPrice.value)){
        // showing red border for invalid input
        netPrice.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            netPrice.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        netPrice.value = "";
    }

    if(vatRate.value === "" || isNaN(vatRate.value)){
        // showing red border for invalid input
        vatRate.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            vatRate.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        vatRate.value = "";
    }

    let finalAmount = VATInclusiveAmount(Number(netPrice.value), Number(vatRate.value));
    incAmount.value = finalAmount;
    let taxAmount = VATAmount(Number(netPrice.value), Number(vatRate.value));
    vatAmount.value = taxAmount;
})

