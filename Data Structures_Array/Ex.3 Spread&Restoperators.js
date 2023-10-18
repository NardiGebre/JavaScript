// What to do? Spread operator array creation
// How to do? [ ...combindArray]

const fruits1 = ['Guava','Berries', 'Watermelon'];
const fruits2 = ['Raspberry', 'Apple Mangoes'];

const combinedFruits  = [...fruits1, ...fruits2];
console.log (`conbined fruits: ${combinedFruits}`);

// What does spread operator for Function arguments
// How to do? Pass the array with spread operator in the arguments [...numbers ]

function addNumbers (number1, number2, number3)
{   
    if(isNaN(number1) || isNaN(number2) || isNaN(number3))
    {
        return;
    }
    return number1 + number2 + number3;
}
const arrayofNumbers = [1,2,3];

//addNumbers(5,4,3);

let result = addNumbers([...arrayofNumbers]);
console.log(`sum of the numbers:${result}`);

// rest operator in function paramenters
// how to do? [...arrayofNumbers]

const multiply = (number1, ...numbers)=>
{
    if(isNaN(number1) || !Array.isArray(numbers))
    {
        return;
    let product= 1;
    numbers.forEach(number => 
    {
        product *=numbers; //product= product * number;
    });
    }
    return number1 * product;
}
let result1 = multiply (1,2,3,4);
console.log(`product result from rest operator: ${result1}`);

const colors1 = ['cyan', 'mint green','purple' ];
const colors2 = ['pink', 'coral', 'burgundy'];
const [...copiedColors] = colors1;
console.log(`copy of clolors:${copiedColors}`);