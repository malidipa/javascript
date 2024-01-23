console.log("=================================== Step:-1  =======================================");


function checkPalindrome(string) {
    
    const arrayValues = string.split('');
  const reverseArrayValues = arrayValues.reverse();
   const reverseString = reverseArrayValues.join('');
     if(string == reverseString) {
       var returnvalue= 'The String is palindrome'
    }
    else {
        var returnvalue= 'The String is Not a palindrome'
        
    }
    console.log(`Given String ${string} => ${returnvalue}`)
    
// );
}
 checkPalindrome("madam")
 checkPalindrome("dad")
 checkPalindrome("hello")
 console.log("=================================== Step:-2  =======================================");
 function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
     if(len1 !== len2){
        console.log('Invalid Input');
        return
     }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       var returnvalue=`The String are anagram `
    } else { 
       var returnvalue=`The String are not anagram `
    }
    console.log(`Given String ${a} and ${b} => ${returnvalue}`);
 }
 checkStringsAnagram("Silent","Listen")
 checkStringsAnagram("Hello","World")
 checkStringsAnagram("Such","much")
 console.log("==================================================================");