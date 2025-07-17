const equal = (a= new Date())=>{
   
   const day = a.getDate()
   const month = a.getMonth() +1
    const year = a.getFullYear()
    return `${day}-${month}-${year}`
}
console.log(equal())