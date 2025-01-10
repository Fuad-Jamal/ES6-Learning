class yoga {
    constructor(pupil,age){
        this.name = pupil
        this.age = age
    }
    send(){
        return this.name
    }
}
class monday extends yoga{
    constructor(pupil,gender){
        super (pupil)
        this.gender = gender
    }
}

let week = new monday('eded','trans')
console.log(week)
let nike = new yoga('kd','kdd')
console.log(nike)
week.send()
