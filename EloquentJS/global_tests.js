test = 3>2;
text = 'qweq';
console.log(test);
console.log(true ? 1 : 2);
console.log(!true ? 1 : 2);
console.log(false ? 1 : 2);
console.log("5"-1);
console.log("a"-1);
console.log(typeof 4.5);
//prompt("Enter");
num = 11
if (num>10) {
    console.log("samall")
} else {
    console.log
}

reman = 10 % 3;
console.log(reman);

function multiplier(factor) {
    return number => number * factor;
}

twice = multiplier(11);
console.log(twice(5));

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
        return history;
        } else if (current > target) {
        return null;
        } else {
            return find( current + 5, `(${history} + 5)`) ||
                    find( current * 3, `(${history} * 3)`)
        }
    }
    return find(1,"1");
}

console.log(findSolution(15));

// console.log(`${current} ${history}`);

const f = function (a) {
    console.log(a + 2); 
}
f(2);

function g(a, b) {
    return a * b * 3.5;
}
console.log(g(1,2));

let h = a => a % 3;
console.log(h(5));

let sequence = [1,2,3,4.5];
console.log(sequence);

var TESTMOD = [
    {"events":["carrot","exercise","weekend"],"squirrel":false}];