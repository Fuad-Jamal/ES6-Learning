// let snake = {
//     name:'python',
//     weight: 20
// }
// let zoo = {
//     type: "anaconda"
// }
// let about = new Proxy(snake,zoo)
// console.log(about)

const gameSettings = {difficulty: 'easy'}
const gameSettingsProxy = new Proxy(gameSettings, {})
console.log(gameSettingsProxy.difficulty)
