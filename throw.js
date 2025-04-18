try {
   const meme = 'kasongo'
   console.log(meme)
   throw new Error('byarakwamy')
} catch (e) {
  console.error(e);
}

for(let i =0; i<=10; i++){
    console.log(i)
    try{
    if(i==5){
        throw new Error('error at 5')
    }
}catch(err){
    console.error(err)
}
}

try{
const user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    }
};
console.log(user.addres.street);
}catch(err){
    console.error(err);
}console.log('end of program')

let num = 0
try {
    
    const ran = Math.floor(Math.random()* 1000)
    num += ran
    console.log(num)
    if(number<500){
        throw new Error('number is less than 500')
    }
} catch (error) {
    console.error(error);
    console.log(`the error is ${num}`)
}