const equal = (a= new Date())=>{
   
   const day = a.getDate()
   const month = a.getMonth() +1
    const year = a.getFullYear()
    return `${day}-${month}-${year}`
}
// console.log(equal())

const squash = (str) => str.toLowerCase().split('').sort((a,b)=>a>b?1:-1).join``
console.log(squash('NwsfwnsnensngYork'))

const cou = (arr)=> Math.floor(Math.random()*16).toString(16)
