// let snake = {
//     name:'python',
//     weight: 20
// }
// let zoo = {
//     type: "anaconda"
// }
// let about = new Proxy(snake,zoo)
// console.log(about)

const gameSettings = {}
const gameSettingsProxy = new Proxy(gameSettings, {
    get: (o, prop) =>{
return prop in o? o[prop]: 'dudu'
    }, 
    set:(o, prop, value) =>{
        if(prop === 'difficulty' && value !== ['easy', 'medium', 'hard'].includes(value.toLowerCase())){
            throw new Error('Set difficulty please')
        }

        o[prop] = value
    },
    has: (o, prop) =>{
        if(prop === 'difficulty'){
            return false
        }
        retur prop in o
    }
})
gameSettingsProxy.difficulty = 'esy'
console.log(gameSettingsProxy.difficulty)
