const netPrice = document.getElementById('net-price');
const vatRate = document.getElementById('vat-rate');
const incAmount = document.getElementById('inc-amount');
const vatAmount = document.getElementById('vat-amount');
const bruttoBtn = document.getElementById('brutto-btn');
const nettoBtn = document.getElementById('netto-btn');


function VATInclusiveAmount(price, rate){
    let totalAmount = price + (price * (rate / 100));
    return totalAmount.toFixed(2);
}
function VATAmount(price, rate){
    let taxAmount = price * (rate / 100)
    return taxAmount.toFixed(2)
}
function VATExclusiveAmount(price, rate){
    let nettoAmount =  price/(1+(rate / 100));
    return nettoAmount.toFixed(2);
}

bruttoBtn.addEventListener('click', function(){
    if(netPrice.value === "" || isNaN(netPrice.value)){
        netPrice.style.border = "1px solid red";
        setTimeout(function(){
            netPrice.style.border = "1px solid transparent";
        }, 1500);

        netPrice.value = "";
    }

    if(vatRate.value === "" || isNaN(vatRate.value)){
        vatRate.style.border = "1px solid red";

        setTimeout(function(){
            vatRate.style.border = "1px solid transparent";
        }, 1500);

        vatRate.value = "";
    }

    let bruttoAmount = VATInclusiveAmount(Number(netPrice.value), Number(vatRate.value));
    incAmount.value = bruttoAmount;
    let taxAmount = VATAmount(Number(netPrice.value), Number(vatRate.value));
    vatAmount.value = taxAmount;
})
nettoBtn.addEventListener('click', function(){
    if(incAmount.value === "" || isNaN(incAmount.value)){
        incAmount.style.border = "1px solid red";
        setTimeout(function(){
            incAmount.style.border = "1px solid transparent";
        }, 1500);

        incAmount.value = "";
    }

    if(vatRate.value === "" || isNaN(vatRate.value)){
        vatRate.style.border = "1px solid red";

        setTimeout(function(){
            vatRate.style.border = "1px solid transparent";
        }, 1500);

        vatRate.value = "";
    }

    let nettoAmount = VATExclusiveAmount(Number(incAmount.value), Number(vatRate.value));
    netPrice.value = nettoAmount;
    let taxAmount = VATAmount(Number(incAmount.value), Number(vatRate.value));
    vatAmount.value = taxAmount;
})
