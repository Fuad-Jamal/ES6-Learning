class calculator {
    constructor (option1=2, option2=2){
    this.option1 = option1
    this.option2  = option2
    }

methodAdd= function(){
    console.log(`${this.option1+this.option2}`)
}
methodSubtract= function() {
    console.log(`${this.option1-this.option2}`)
}
methodDivide= function() {
 console.log(this.option1/this.option2)   
}
methodTimes= function() {
    console.log(this.option1*this.option2)
}
}
let nuu = new calculator(8,5)
let you = new calculator(3,2)
you.methodTimes()
nuu.methodDivide()
nuu.methodAdd()
nuu.methodSubtract()