console.log('Hello World');
// The next line document.addEventListener....
// tells the browser to execute the javascript in the function after
// the DOMContentLoaded event is complete, i.e. the browser has
// finished loading the full webpage
document.addEventListener("DOMContentLoaded", function (event) {
    var col1 = ["Full time student checking (Age 22 and under) ", "Customers over age 65", "Below  $500.00", "extra"];
    var col2 = ["None", "None", "$8.00"];
    var col3 = ["1", "2", "3"];
    var col4 = ["A", "B", "C"];
    var TheInnerHTML = "";
    for (var j = 0; j < col1.length; j++) {
        TheInnerHTML += "<tr><td>" + col1[j] + "</td><td>" + col2[j] + "</td><td>" + col3[j] + "</td><td>" + col4[j] + "</td></tr>";
    }
    document.getElementById("TheBody").innerHTML = TheInnerHTML;
});