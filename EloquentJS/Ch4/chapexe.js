// require('./journal');
// var sourceFile = require('./journal');
// var journal = [];
// var journal = gvJournal;
var journalreq = require('./journal');

function addEntry(events, squirrel) {
    journalreq.push({events, squirrel});
}


function phi(table) {
    return(table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}
function phiR([n00, n01, n10, n11]) {
    return(n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

/**
 * Description: Returns correlation numbers for specific event
 * @param {string}  name of event.
 * @param {Object}  Journal.
 */
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i],
            index = 0;
        if (entry.events.includes(event)) 
            index += 1;
        


        if (entry.squirrel) 
            index += 2;
        


        table[index] += 1;
      }
      return table;
    }
    
    // for (let entry of journalreq) {
      // console.log(`${entry.events.length} events.`);
      // }
      for (let [idx, entry] of journalreq.entries()) {
        console.log(`${
          entry.events.length
        } events.`, idx);
      }
      
      // destructuring extra is undefined
      for (let [idx, entry, extra] of journalreq.entries()) {
        console.log(entry);
        
        console.log(`${
          entry.events.length
        } events.`, idx);
      }
      
      // desctructuring objects
      let {name, age, extra} = {name: "asd", age: 23};
      console.log(name);
      
      function journalEvents(journal) {
        let events = [];
        for (let entry of journal) {
          for (let event of entry.events) {
            if (! events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) 
            result = number;
        


    }
    return result;
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(tableFor("pizza", journalreq));
console.log(journalEvents(journalreq));

for (const event of journalEvents(journalreq)) {
    let correlation = phi(tableFor(event, journalreq));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

for (const entry of journalreq) {
    if (entry.events.includes("peanuts") && ! entry.events.includes("brushed teeth")) {
        entry.events.push("peanuts teeth");
    }
}
console.log(phi(tableFor("peanuts teeth", journalreq)));

console.log(String(6).padStart(3, "#"));

let numbers = [5, 1, 7];
console.log(max(9, ... numbers, 2));

