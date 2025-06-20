function value(name, target){
if(typeof name === 'object' && typeof name !== null){
    for(let key in name){
if(key === target){
    return name[key]
}else if(typeof name[key] === 'object' && name[key] !== null){
    let find = value(name[key], target)
    if(find !== undefined) return find
}
    }
    return undefined
}else{
    return false
}
}

const sampleData = {
  a: {
    b: {
      c: {
        target: "🎯 You found me!"
      }
    },
    x: 99
  },
  y: {
    z: {
      something: "This is not it"
    }
  }
};

console.log(value(sampleData, "target"))