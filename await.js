
const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: {name: 'pikachu', type: 'electric'}});
        }, 2000);
    })
}