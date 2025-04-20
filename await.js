
// const fetchPokemon = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve({data: {name: 'pikachu', type: 'electric'}});
//             reject(new Error('Failed to fetch Pokemon'));
//         }, 2000);
//     })
// }
// console.log('it\'s started')

// const usePoke = async () => {
//     try{
//     const data = await fetchPokemon()
//     console.log(data)
//     }catch(err){
//         console.error(err)
//     }
// }
// usePoke()
// console.log('program done!')

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'John Doe', age: 30, admin: true});
        }, 3000);
    })
}
const sell = (name) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(25 * name.age)
        }, 4000);
    })
}
const candy = async () =>{
    try{
    const oen = await fetchUser()
    const result = await sell(oen)
    console.log(result)
    const time2 = new Date()
    console.log(`${time2 - time1} seconds passed`)
    }catch(err){
        console.error(err)
    }
}
const time1 = new Date()
candy()
console.log('done')

// const login = (user) => {
// if(user.admin === true){
//     console.log('welcome admin')
// }else{
//     console.log('unable to log in')
// }
// }

// const useUser = async () => {
//     try {
//         const usez = await fetchUser()
//         login(usez)
//     } catch (error) {
//         console.error(error);
//     }
// }
// useUser()
// console.log('end of program')