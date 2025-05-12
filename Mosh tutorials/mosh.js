//factory function
function createCircle (radius){
return{
    radius,
    draw: function(){
    console.log('draw');
   }
};
}
const circle = createCircle(1);

//constructor function
function Circle(radius){
    // console.log('this', this);
    this.radius = radius
    let defaultLocation = {x:0, y:0}
    this.computeOptimumLocation = function(factor){}

    this.draw = function(){
        this.computeOptimumLocation(0.1)
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation
        },
        set: function(value){
            defaultLocation = value
        }
    })
}


Circle.call({}, 1)
Circle.apply({}, [1, 2, 3])

const second = new Circle(1)

for (let key in second){
    console.log(key, second[key]);
}
const keys = Object.keys(second)
console.log(Circle.defaultLocation)