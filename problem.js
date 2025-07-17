const equal = (a= new Date())=>{
   
   const day = a.getDate()
   const month = a.getMonth() +1
    const year = a.getFullYear()
    return `${day}-${month}-${year}`
}
// console.log(equal())

const squash = (str) => str.length>3? str.slice(0,3)+str.slice(-3):str
console.log(squash('NwsfwgYork'))