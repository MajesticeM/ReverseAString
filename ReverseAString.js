//Version 01
//create an array
/*var string=['s','t','r','i','n','g'];
//reverse the string
var reversedString=string.reverse();
//show the reversed string
console.log(reversedString);
//Join the array elements
var joinedString=reversedString.join("");
//show the joined string
console.log(joinedString);*/

//version 02
function reverseString(str) 
{
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello"));
