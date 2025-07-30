function chil(){
    console.log('chili chili')
    for( let i =1; i<=10; i++){
        console.log(`chile at ${i}`)
    }
    console.log('all chili donex')
}
chil()

function log(use, pas){
if(use === 'me') {return true}
if(use === 'monn' && pas === 1212) {return true}
if(use == 'tit' && pas === '444') {return true}

return false
}
console.log(log('mn',88))
console.log(log('me', 844));
console.log(log('monn',1212));
console.log(log('tit', '444'))

const ssq = (xx) =>{
return xx**2
}
const plus = (x,y)=>{
setTimeout(()=>{
    console.log(x+y)
},3000)
}
const minus = (para)=>{
    console.log('it has minused')
    para(2,8)
}
minus(plus)

let arrz = [1,3,4,4,2,4,2,1,3,4,5]
const sums = (call, x)=>{
    for(let i =0; i<x.length; i++){
        let y = x[i]
        call(y)
    }
}
function diss(ad){
    console.log(ad)
}
sums(diss,arrz)