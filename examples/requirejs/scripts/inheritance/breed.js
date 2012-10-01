define(["./dog"], function (Dog) {

    // Mammal->Wolf->Dog->Breed
    return Dog.extend({
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
    });

});


