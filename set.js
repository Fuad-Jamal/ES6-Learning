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
