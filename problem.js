const equal = (a= new Date())=>{
   
   const day = a.getDate()
   const month = a.getMonth() +1
    const year = a.getFullYear()
    return `${day}-${month}-${year}`
}
// console.log(equal())

const squash = (str,nn) => str.toLowerCase().split('').filter(x=>x===nn?x:'').length
console.log(squash('NwsfwnsnensngYork','n'))

const car = {make: 'Toyota', model: 'Corolla', year: 2020, color: 'red'}
const getVal  = (obj, key) => {return obj[key]}
console.log(getVal(car, 'color'))
