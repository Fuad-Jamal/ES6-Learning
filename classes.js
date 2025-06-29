class Enemy{
    generateEnemy(name){
        class Flying{
            constructor(flyName){
                this.flyName = flyName
            }
            fly(){
                console.log(`${this.flyName} is flying!`)
            }
        }
        return new Flying(name)
    }
}

Enemy.generateEnemy = function(name){
    class Swimming{
        name = name

        swim(){
            console.log(`${this.name} is swimming!`)
        }
    }
    return new Swimming(name)
}

const facotry = new Enemy()
const flying = facotry.generateEnemy('Panther')
flying.fly()

const swimming = Enemy.generateEnemy('Shark')
swimming.swim()

console.log(Object.getOwnPropertyNames(Enemy))
console.log(Object.getOwnPropertyNames(facotry))
console.log(Object.getOwnPropertyNames(facotry.__proto__))
console.log(Object.getOwnPropertyNames(flying.__proto__))
console.log(Object.getOwnPropertyNames(swimming.__proto__))