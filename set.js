let set = new Set()
set.add(38)
set.add('lkd sdj')
set.add(true)
set.add('osidih')
set.delete('osidih')
console.log(set.size)

let yup = new Set()
let numbers = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 1];
for(let i=0; i<numbers.length; i++){
yup.add(numbers[i])
}
console.log(yup)
for(const ll of yup){
    console.log(ll)
}

let seen = new Set()
for(let i=0; i<numbers.length; i++){
    if(seen.has(numbers[i])){
        console.log(numbers[i])
    break;
    }
seen.add(numbers[i])
}
console.log(seen) 

let ay = [
    { name: "Alice", age: 25 },
    { name: "Alice", age: 259 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let result = []
let duplicate = new Set()
for(let i=0; i<ay.length; i++){
    if(duplicate.has(ay[i].name)){
        continue;
    }
    result.push(ay[i])
    duplicate.add(ay[i].name)
}
console.log(result)
console.log(duplicate)