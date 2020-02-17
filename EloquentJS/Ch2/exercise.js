/* 
ctrl shift k        = delete
alt shift up/down   = duplica linea

alt up/down         = mueve linea

ctrl f2             = modifica todas las ocurrencias
ctrl alt up/down    = modificacion en bloque

ctrl }              = comenta linea
shift alt a         = bloque de comentario
*/

/* Looping a Tirangle */
let hash = ""
for (let idx = 1; idx < 9; idx++) {
    hash = hash + "#";
    console.log(hash);
}
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
}

/* FizzBuzz */
let out = "";
let idx = 1;
while (idx <= 100) {
    out = idx;
    if (idx % 3 == 0 && idx % 5 == 0) {
        out = "FizzBuzz";
    } else if (idx % 3 == 0) {
        out = "Buzz";
    } else if (idx % 5 == 0) {
        out = "Fizz";
    }
    idx = idx + 1;
    console.log(out);
}

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    x = output || n;
    console.log(x);
}

/* Chessboard */
let sizeSq = 8;
let haSp = false;
let chess = "";
for (let idx = 0; idx < sizeSq; idx++) {
    for (let idxcol = 0; idxcol < sizeSq; idxcol++) {
        if (haSp) {
            chess = chess + "#";
            haSp = false;
        } else {
            chess = chess + " ";
            haSp = true;
        }
    }
    if (haSp) {
        haSp = false;
    } else {
        haSp = true;
    }
    chess = chess + "\n";
}
console.log(chess);

x = 1 % 2;

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
