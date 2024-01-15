var amount=0;
var amountAfterConversion = 0;
var currencySelector = '';
var conversionForm = document.querySelector(".conversionForm");
conversionForm.onsubmit = function (event) {
    event.preventDefault();
    amount = Number(document.querySelector(".amountField").value);
    currencySelector = document.querySelector(".currencySelector").value;
    if (currencySelector == 'dollar') {
        amountAfterConversion = amount / 3.75;
    }
    else if(currencySelector=='dinar'){
        amountAfterConversion = amount / 5.2;
    }
    else {
        amountAfterConversion = amount;
    }
    document.querySelector('p.result').innerHTML = `Amount after conversion is = ${amountAfterConversion}`;
}