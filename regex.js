const sentence = 'there is a guy w4o is a good guy..&';
const pattern = /\.\.\&/;
const test = pattern.test(sentence);
console.log(test);
const match = sentence.match(pattern)
console.log(match);

const quote = 'I am a "good" guy'
const patter = /am/
const tes = patter.test(quote)
console.log(tes)
console.log(quote.match(patter))