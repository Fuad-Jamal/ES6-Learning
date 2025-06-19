const sentence = 'there is a guy w4o is a good guy';
const pattern = /^There/i;
const test = pattern.test(sentence);
console.log(test);
const match = sentence.match(pattern)
console.log(match);