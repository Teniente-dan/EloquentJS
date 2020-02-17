/* 
ctrl shift k        = delete
alt shift up/down   = duplica linea

alt up/down         = mueve linea

ctrl f2             = modifica todas las ocurrencias
ctrl alt up/down    = modificacion en bloque

ctrl }              = comenta linea
shift alt a         = bloque de comentario
*/

/* The sum of a range */
// Condición en parametro entra en efecto cuando el parametro va vaceo
function range(stNum, endNum, incNum = 1) {
    var rngNum = []
    // incNum = incNum == undefined ? 1 : incNum;
    if (stNum < endNum) {
        for (let idx = stNum; idx <= endNum; idx = idx + incNum) {
            rngNum.push(idx);
        }
    } else {
        for (let idx = stNum; idx >= endNum; idx = idx - Math.abs(incNum)) {
            rngNum.push(idx);
        }
    }
    return rngNum;
}
// JS answer
// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];

//     if (step > 0) {
//         for (let i = start; i <= end; i += step)
//             array.push(i);

//     } else {
//         for (let i = start; i >= end; i += step)
//             array.push(i);

//     }
//     return array;
// }

function sum(...inRange) {
    let total = 0;
    for (const member of inRange) {
        total = total + member;
    }
    return total;
}

// JS answer
function sum(...array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(range(5, 2, 2));
console.log(range(2, 5));
console.log(sum(... range(5, 2, -1)));
console.log(sum(... range(1, 10)));
console.log();

/* Reversing an Array */
// parametro ...toRever requiere llamada como 1,2,3 convierte a array
//             toRever requiere llamada como [1,2,3] toma el array como elemento
function reverseArray(toRever) {
    let revedArray = []
    for (const member of toRever) {
        revedArray.unshift(member);
    }
    return revedArray;
}
// JS answer
// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//       output.push(array[i]);
//     }
//     return output;
// }

// function reverseArrayInPlace(...toRever) {
//     for (const member of toRever) {
//         toRever.shift(member);
//         toRever.push(member);
//     }
//     return toRever;
// }

// JS answer
function reverseArrayInPlace(...array) {
    test = Math.floor(array.length / 2);
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}


console.log(reverseArray(["A", "B", "C"]));
// console.log(reverseArray(3, 2, 1));
console.log(reverseArrayInPlace(5, 4, 3, 2, 1));

/* A list */

var listexe = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrayToList(...inArray) {
    var oListOut = {
        value: "",
        rest: ""
    };
    oListOut.value = inArray.shift();
    if (!inArray.length) {
        oListOut.rest = null;
    } else {
        oListOut.rest = arrayToList(...inArray);
    }
    return oListOut;
}

// JS answer
/*  list incia como null
    list muta y recibe propiedades donde rest es el list previo, en la primera ejecución es null */
function arrayToList(...array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}
testexe = arrayToList(1, 2, 3);

function listToArray(inList) {
    var arrayOut = [];
    if (inList.rest) {
        arrayOut = listToArray(inList.rest);
    }
    arrayOut.unshift(inList.value);
    return arrayOut;
}

// JS answer
/* let node = list; -->> recibe el primer valor al inicar el for
   node; -->> condición de break ene ste caso cuando node sea null
   node = node.rest -->> node recibe el objeto en rest  */

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
testexe1 = listToArray(testexe);

function prepend(element, inList) {
    var newList = {
        value: "",
        rest: ""
    };
    newList.value = element;
    newList.rest = inList
    return newList;
}

// JS answer
/*  el objeto recibe la propiedad indicada en {}, declarado o anónima, 
    si es anónima recibe l mismo nombre de la variable con el valor en este caso "value"*/
function prepend(value, list) {
    return {value, rest: list};
}
testexe2 = prepend(4, testexe);

function nth(inList, idx) {
    return listToArray(inList)[idx];
}

// JS answer
function nth(list, n) {
    if (! list) 
        return undefined;
     else if (n == 0) 
        return list.value;
     else 
        return nth(list.rest, n - 1);
    
}
testexe3 = nth(testexe2, 0);

/* Deep Comparison */
function deepEqual(val1, val2) {
    if (val1 == val2) {
        return true;
    } else if (typeof val1 == "object" && typeof val1 == typeof val2) {
        if (Object.keys(val1).length == Object.keys(val2).length) {
            for (const key in val1) {
//hasOwnProperty busca propiedad en objeto                
//includes busca elemento en array
                if (! val2.hasOwnProperty(key) || ! deepEqual(val1[key], val2[key]) == false) {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
}

// JS answer
function deepEqual(a, b) {
    if (a === b) 
        return true;
    

    if (a == null || typeof a != "object" || b == null || typeof b != "object") 
        return false;
    

    let keysA = Object.keys(a),
        keysB = Object.keys(b);

    if (keysA.length != keysB.length) 
        return false;
    

    for (let key of keysA) {
        if (! keysB.includes(key) || ! deepEqual(a[key], b[key])) 
            return false;
        
    }

    return true;
}

let atestexe4 = "A";
let btestexe4 = "B";

2376085


let listexe4 = {
    value1: 9999,
    // memo: 1,
    rest1: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

deepEqual(listexe, listexe4);

let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
console.log(deepEqual(null, null));

console.log();


