// Analyses
// What to do? to implement callbacks
// How to do? Passing one function as a parameter

const add = (result) => 
{
    return result;
}
function sum (number1, number2, callback ) 
{
    if(isNaN(number1) || isNaN(number2)) 
    {
        return;
    }
    let sum = number1 + number2;
    return callback(sum);
}

    console.log(`summation result: ${sum(-10, -11, add)}`);
