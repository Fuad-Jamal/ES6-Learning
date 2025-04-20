
const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({data: {name: 'pikachu', type: 'electric'}});
            reject(new Error('Failed to fetch Pokemon'));
        }, 2000);
    })
}
console.log('it\'s started')

const usePoke = async () => {
    try{
    const data = await fetchPokemon()
    console.log(data)
    }catch(err){
        console.error(err)
    }
}
usePoke()
console.log('program done!')

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'John Doe', age: 30, admin: true});
        }, 3000);
    })
}
const login = (user) => {
if(user.admin === true){
    console.log('welcome admin')
}else{
    console.log('unable to log in')
}
}

const useUser = async () => {
    try {
        
    } catch (error) {
        console.error(error);
    }
}