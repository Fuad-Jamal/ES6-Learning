const mut = 80543
let arr = [11,12,13,421,42,456,66,373]

for(let i=0; i<arr.length; i++){
    let iti = mut * arr[i]
    console.log(`${arr[i]} * ${mut} = ${iti}`)
}
// console.log(it)

let mama = 'amos iiso wihw slis eiiei'
for(let i=0; i<mama.length; i++){
    console.log(mama[i])
}

let tota = 0
let that =[1,44,535,3,346,5,224,24,24,22,6,3,533,5]
for (let i = 0; i<that.length; i++){
    tota += that[i]
}
console.log(tota/that.length)
let nee = that.map((num)=>{return num**2})
console.log(nee)

const bools = [true, false, true, false, false, true, false, true, true, false]
let me = bools.map((xoxo)=> {
    if(xoxo === true){
        return Math.ceil(Math.random()* (22 - 4) + 4)
    }else{
        return 0
    }
})
console.log(me)

let coun = ['mombasa', 'na irobi', 'kisumu', 'na kuru', 'eldoret', 'meru', 'nye ri', 'kaji ado']
let aaa = coun.filter((x) =>{
   if( !x.includes(' '))return true
})
console.log(aaa)

const price = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
let dis = price.filter((x) => {
    if(x + 1.15 > 600) return true
})
const nestedArrays = [
    [1, 2, 3],
    [4.5, 2.2, 6],
    [7, 8, 9],
    [10, 11.1, 2],
    [13, 14.5, 15]
];
let two = nestedArrays.filter((x) => {
    if(x.includes(2)) return true
})
console.log(two)

let range = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let it = range.reduce((acc, curr) => {
    acc.push(curr)
    return acc
},[])
console.log(it)

let companies = ['Apple', 'Amazon', 'Adobe', 'Microsoft', 'Google', 'Facebook'];
let comp = companies.reduce((acc,cur,i) => {
    if(cur.startsWith('A')){
return acc
    }
    if(i === companies.length -1){
        return acc + cur
    }
    return acc + cur + ','
},'')
console.log(comp)

let items = ['banana', 'apple', 'orange', 'grape', 'mango', 'pineapple', 'peach', 'kiwi'].map((x) => {
    return x.toUpperCase()
}).reduce((acc, curr) => {
return acc + curr + ' '
}, '')
console.log(items)

let sequence = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((x) => {
    return x**2
}).filter((y) =>{
    if(y>100){
        return true
    }
}).reduce((acc, curr) => {
    return acc + curr
},0)
console.log(sequence)

function max(ddd){
    let x = ddd.map(y=>Math.abs(y))
    return Math.min(...x)   
}
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));

const str = '1234'
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num = nums.sort((a,b)=>b-a)
console.log(Array.from(str).map(Number))

let ent = nums.entries()
for(let val of ent){
    console.log(val)
}
let arrz = [7,7,[3,3,[3,[[1,1]],6],8,8],9,9]
console.log(arrz.flat(Infinity))

function right(arr){
    return Object.prototype.toString.call(arrz)==='[object Array]'?true: false
}
console.log(right(arrz))
