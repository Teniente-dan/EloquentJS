/* 
ctrl shift k        = delete
alt shift up/down   = duplica linea

alt up/down         = mueve linea

ctrl f2             = modifica todas las ocurrencias
ctrl alt up/down    = modificacion en bloque

ctrl }              = comenta linea
shift alt a         = bloque de comentario
*/

/* Minimum */

let min = function (a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(min(7, 3));

/* Recursion */

function isEven(value) {
    a = Math.abs(value)
    if (a == 0) {
        return true;
    } else if (a == 1) {
        return false;
    } else {
        return isEven(a - 2);
    }
}
console.log(isEven(-2));

function isEven1(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 10) {
        return isEven(- n);
    } else {
        return isEven(n - 2);
    }
}
console.log(isEven(-2));

/* Bean Counting */
function countBs(inText, lVal) {
    let counter = 0;
    for (let char = 0; char <= inText.length - 1; char++) {
        temp = inText[char];
        if (inText[char] === lVal) {
            counter++;
        };
    }
    return counter;
}
console.log(countBs("arrB", "b"));

function countChar(stext, ch) {
    let counter1 = 0;
    for (let i = 0; i < stext.length; i++) {
        if (stext[i] == ch) {
            counter1 += 1;
        }
    }
    return counter1;
}
console.log(countChar("arrB", "b"));
