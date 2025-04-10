const myPet = {
    name: "Buddy",
    species: "Dog",
    breed: "Golden Retriever",
    age: 3,
    color: "Golden",
    isFriendly: true,
    favoriteActivities: ["fetch", "walks", "napping"]
};

myPet.color = "Black";
console.log(myPet)
// delet=e myPet.favoriteActivities
console.log(myPet)
myPet.favoriteActivities.push("playing with toys")
console.log(myPet)