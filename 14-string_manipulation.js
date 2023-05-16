let nam ="rolexBoys"
console.log(nam.length)// .length is for the print the length of the string
 console.log(nam.toUpperCase()) // to convert all letter in upper case
 console.log(nam.toLowerCase()) // to convert all letter in lower case
 console.log(nam.slice(2,5)) // to slice the original string  starting from 2 and end with 5. 
 console.log(nam.slice(5,9)) // to slice the original string  starting from 5 and end with 9. 
 console.log(nam.slice(2)) // slice from 2 to end
 console.log(nam.replace("rolex","The")); // replace some part of string with other string
 let rel = "Fabulous"
 console.log(nam.concat(" is a " + rel + "guys")); // concatenate the two orr more strings
 let nnn = "         MuditDargar     "
 console.log(nnn.trim());// it remove starting and end spaces



// quiz ,use a for loop to print the string
let fri="Mudit_dargar"
for( let i=0 ;i<fri.length ;i++){
    console.log(fri[i]);
}