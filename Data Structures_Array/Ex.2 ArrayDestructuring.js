// Analyses
// what to destruture extract the first two colors
// How to do? using [firstItem, secondItem]
const colors = ['Red', 'Green', 'Yellow'];
let { firstColor, secondColor } = colors;
console.log ( `first Color: ${(firstColor)} second Color: ${secondColor}`);
// What to do skip the first two and extract third one
// How to do? [ ,, thirdElement]
let [ ,, thirdElement] = colors ;
console.log (`third Element: ${thirdElement}`);
// What to do? Collect the remaining colors
// How to do?
let [ firstElement, ...remainingColors] = colors;
console.log (`first Element: ${firstElement} remaining colors: ${remainingColors}`);
// What to do? assigning default 
// How to do? 

let [ firstShape = 'green'] = colors;
console.log (`first shape: ${firstShape}`);

// What to do swaping
// How to do? [] []

 let a = 10;
 let b = 100;
 [a,b] = [b,a];
console.log (`a:${a} b:${b}`);

