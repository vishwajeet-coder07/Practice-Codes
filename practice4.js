// Ouestion 1
let friend ="har\""
console.log (friend.length)

// Problem 2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Problem 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())

//Problem 4
let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
let amount1 = str2.slice(15)
console.log(amount)
console.log(amount1)


// Problem 5
let friend1 = "Deepika"
friend1[3] = "R"
console.log(friend1) // friend is not changed, because string is immutable