const equal = (a= new Date())=>{
   
   const day = a.getDate()
   const month = a.getMonth() +1
    const year = a.getFullYear()
    return `${day}-${month}-${year}`
}
// console.log(equal())

const squash = (str,nn) => str.toLowerCase().split('').filter(x=>x===nn?x:'').length
console.log(squash('NwsfwnsnensngYork','n'))

const cou = (arr)=> Math.min(...arr.filter(x=>x%2===0))
console.log(cou([1,2,3,4,5,6,7,8,9,10]))
