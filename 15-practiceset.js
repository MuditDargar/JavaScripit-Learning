// //Q1.
// let str = "har\""
// //  \" this is the  escape sequence character
// console.log(str.length)

// //Q2.
// const sentence= "the quick brown fox jumps over the lazy dog "
// const word= "lazy"
// console.log(sentence.includes(word));// the value of word is present orr not in  the sentence 
// console.log(`the word ${word} ${sentence.includes(word)? 'is':'is not'} in the sentence`)


// //Q3.
// const saw = "the role x is the best ever"
// console.log(saw.startsWith("the"))
// console.log(saw.endsWith("eve"))

// //Q4.
// let roh="sachIN TendULKAR"
// console.log(roh.toLowerCase())


//Q5.
// let str_1= "please give me Rs 1000"
// let amount =Number.parseInt(str_1.slice("please give me Rs".length) )// the length of this is  remove after the slice operation

// console.log(amount)
// console.log(typeof amount)

//Q6.
let friend ="rolex boye"
friend[10]="s" // friend is not changed ,because string is immutable 
// string mae change nahi kar sakhte

console.log(friend)