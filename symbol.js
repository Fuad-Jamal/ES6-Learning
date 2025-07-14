function secureconfig(config) {
    const apiKey = Symbol('apiKey')
    config[apiKey] = 'Yours trully'
return config
}
const key = {}
const secured = secureconfig(key)
const symbol = Object.getOwnPropertySymbols(secured)
console.log(secured[symbol[0]])
// console.log(symbol)