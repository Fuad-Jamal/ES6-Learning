class franchise {
    constructor (part1, part2){
    this.part1 = part1
    this.part2 = part2
}
method_21(){
    console.log(`Jason Bourne ${this.part1}`)
}
method_22(){
    console.log(`The second was released was ${this.part2}`)
}
}
let vob = new franchise('New beginning', 332)
vob.method_21()
vob.method_22()