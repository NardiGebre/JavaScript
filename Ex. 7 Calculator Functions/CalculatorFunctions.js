//Analisis
//calculate Addition, Subtraction, Multiplication, Division functions 

// let functionAddition = add;
// let functionSubtraction = subtract;
// let functionMultiplication = multiply;
// let functionDivision = divide;

function add ( a, b)
{ if (isNaN (a) || isNaN (b))
    { 
        return;
    }
    return a+b;
}
const subtract =  (a,b) =>
{ if (isNaN (a) || isNaN (b))
    {
        return;
    }
    return a-b;
}
const multiply = (a, b) => 
{ if (isNaN(a) || isNaN (b))
{
       return;
    }
    return a*b;
}
const divide = function (a, b) 
{ if (isNaN (a) || isNaN=(b))
    {
       return;     }
        
       return a/b;
}

console.log(`Addition result: ${add(11,10)}`);
console.log(`Subtraction result: ${Subtract(11,10)`);   
console.log(`Multiplication result: ${multiply(11,10)}`);
console.log(`Division result: ${divide (11, 10)}`);