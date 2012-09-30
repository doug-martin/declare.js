var Dog = require("./dog.js"),
    Mammal = require("./mammal.js"),
    Wolf = require("./wolf.js");

// Mammal->Wolf->Dog->Breed
var Breed = Dog.extend({
    instance:{

        //initialize outside of constructor
        _pitch:"high",

        constructor:function (options) {
            options = options || {};
            this._super(arguments);
            this.breed = options.breed || "lab";
        },

        speak:function () {
            //Should return "A mammal of type mammal sounds like a
            //growl thats domesticated with a high pitch!"
            return this._super(arguments) + " with a " + this._pitch + " pitch!";
        },

        getters:{
            pitch:function () {
                return this._pitch;
            }
        }
    },

    static:{
        soundOff:function () {
            //should return "I'M A MAMMAL!! THAT GROWLS BUT NOW BARKS!"
            return this._super(arguments).toUpperCase() + "!";
        }
    }
}).as(module);


console.log(Breed.soundOff());//"IM A MAMMAL!! THAT GROWLS BUT NOW BARKS!"

var myBreed = new Breed({color:"gold", type:"lab"});
console.log(myBreed instanceof Dog); //true
console.log(myBreed instanceof Wolf); //true
console.log(myBreed instanceof Mammal); //true
console.log(myBreed.speak()); //"A mammal of type lab sounds like a woof thats domesticated with a high pitch!"
console.log(myBreed.get("type")); //"lab"
console.log(myBreed.get("color")); //"gold"
console.log(myBreed.get("sound")); //"woof"