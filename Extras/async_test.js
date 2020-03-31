// function functionOne(varReturnVal) { 
//     console.log(varReturnVal); 
// }

// function functionTwo(val1, callback) {
//     callback(val1);		
// }

// functionTwo("Value, getting routed through the callback", functionOne);

var now=Date.now();

function fnCallbackCurrencyData (successCallback, failCallback) {
                setTimeout(successCallback, 1000);
                console.log('fnCallbackCurrencyData<BR>');
                console.log ((Date.now() - now)  + ' fnCallbackCurrencyData')

}

function fnCallbackFlightData (successCallback, failCallback) {
                setTimeout(successCallback, 3000);
                console.log('fnCallbackFlightData<BR>');
                console.log ((Date.now() - now)  + ' fnCallbackFlightData')
}

function fnCallbackTransactionData (successCallback, failCallback) {
                setTimeout(successCallback, 1000);
                console.log('fnCallbackTransactionData<BR>');
                console.log ((Date.now() - now)  + ' fnCallbackTransactionData')
}

var flagCurrencyReady = false;
var flagflightReady = false;
var flagTransactionReady = false;
let called = 0;

fnCallbackTransactionData(function () {
                flagTransactionReady=true;
                console.log('tran called')
                if (flagCurrencyReady && flagflightReady) {
                    console.log('tran ready called')
                               allReady();
                }

}, function () {
                console.log('error from callback 1');
});

fnCallbackCurrencyData(function () {
                flagCurrencyReady=true;
                console.log('curr called' + flagTransactionReady + flagflightReady)
                if (flagTransactionReady && flagflightReady) {
                    console.log('curr ready called')           
                    allReady();
                }

}, function () {
                console.log('error from callback 3');
});

fnCallbackFlightData(function () {
                flagflightReady=true;
                console.log('flight called')
                if (flagCurrencyReady && flagTransactionReady) {
                    console.log('flight ready called')           
                               allReady();
                }
}, function () {
                console.log('error from callback 2');
});

function allReady() {
                called =+ 1;
                // when all async actions are done...
                console.log('All callback examples executed, data from three data models can be displayed.<BR>');
                console.log ((Date.now() - now)  + ' end')
}


var start=Date.now();

var fnPromiseCurrencyData  = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1200);
    document.write('fnCallbackCurrencyData<BR>');
  console.log ((Date.now() - start)  + 'fnCallbackCurrencyData')

});

var fnPromiseFlightData  = new Promise(function(resolve, reject) {
  setTimeout(resolve, 5000);
  document.write('fnCallbackFlightData<BR>');
  console.log ((Date.now() - start)  + 'fnCallbackFlightData')
});

var fnPromiseTransactionData  = new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000);
  document.write('fnCallbackTransactionData<BR>');
  console.log ((Date.now() - start)  + 'fnCallbackTransactionData')
});


Promise.all([fnPromiseCurrencyData, fnPromiseFlightData, fnPromiseTransactionData]).then(function(values) {
  document.write(values);
  console.log ((Date.now() - start)  + 'end')
});
