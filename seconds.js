let timer = (n){
    n = Number(n)
    if(n == 0){
        return "now"
    }
const year = 31536000
const day = 86400
const hour = 3600
const minute = 60
const seconds = 1

const sections = [
    {name: 'year', seconds: 'value'},
    {name: 'day', seconds: value},
    {name: 'hour', seconds: value},
    {name: 'minute', seconds: value},
    {name: 'second', seconds: value}
]

const result = []

for(const {name, second} of sections){
    let counter = n/second
    if(counter > 0){
        n = n % second
    }
}
} 