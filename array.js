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