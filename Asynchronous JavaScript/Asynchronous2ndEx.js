// Analyses
// Create a function called validateEmail that takes an email address and a callback function. The validateEmail function should check if the email address is valid (e.g., contains "@" and "."), and then invoke the callback function with a boolean indicating whether it's valid.
//What to do? To validate email
// How to to? Passing the call back functionin another function

const printEmail = (isValid) =>
{
    isValid?
    console.log(`email is valid`):
    console.log(`email is inValid`)

}
function validateEmail(email, callback)
{
    let at = email.includes('@');
    let dot = email.includes('.');
    if(at && dot)
    {callback(true);}
    else
    {callback(false);}
}
validateEmail('Nardos@gmailcom', printEmail);
