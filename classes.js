class Student {
    constructor(major, grades, name){
        this.name = name
        this.grades = grades
        this.major = major
    }
    addGrade(grade){
        this.grades.push(grade)
    }
    average(){
        let avg = 0
        for(const grade of this.grades){
            avg += grade
        }
        return avg / this.grades.length
    }

}
const mmaaa = new Student('Computer Science', [90, 80, 85], 'Mmaaa')
mmaaa.addGrade(95)
console.log(mmaaa.average()) 
