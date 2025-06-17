const sentence = 'there is a guy who is a good guy';
const pattern = /w[^abc]o/;
const test = pattern.test(sentence);
console.log(test);
const match = sentence.match(pattern)
console.log(match);