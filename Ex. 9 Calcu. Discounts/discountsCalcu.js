// Analyses
// what to do? To calculate discounted price
// How to do? subtotal - subtotal*discount;

function calculateDiscountPrice(originalPrice, discountPercentage) 
{
    if(isNaN(originalPrice)|| isNaN(discountPercentage) || discountPercentage<=0)
       { 
        return;
        } 
    let discount = originalPrice * (discountPercentage/100);
    return originalPrice - discount;   
}
function callbackFunc(calculateDiscountPrice)
{
   { 
    return discountPrice;    
    }
}
const calculateDiscountPriceVar = (originalPrice, discountPercentage, callbackFunc)=> 
{ 
    if (isNaN (originalPrice) || isNaN(discountPercentage) || discountPercentage<=0);
    {
    return; }
}

let discountAmount = originalPrice *( discountPercentage/100);
let discountPrice = originalPrice - discountAmount;

{
    return callbackFunc(discountPrice);
}

console.log (`the discounted price from the named function: ${calculateDiscountPrice}`);
console.log (`the discounted price from the anonymous function: ${calculateDiscountPrice}`);

// invoke section
// const calculateDiscountPriceResult = calculateDiscountPrice (999.99, 30);
// const calculateDiscountPriceAnonymousResult = calculateDiscountPriceVar (30, callbackFunc);


