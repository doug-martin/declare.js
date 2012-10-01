define(["declare"], function (declare) {


    return declare({
        //define your instance methods and properties
        instance:{

            //will be called whenever a new instance is created
            constructor:function (options) {
                options = options || {};
                this._super(arguments);
                this._type = options.type || "mammal";
            },

            speak:function () {
                return  "A mammal of type " + this._type + " sounds like";
            },

            //Define your getters
            getters:{

                //can be accessed by using the get method. (mammal.get("type"))
                type:function () {
                    return this._type;
                }
            },

            //Define your setters
            setters:{

                //can be accessed by using the set method. (mammal.set("type", "mammalType"))
                type:function (t) {
                    this._type = t;
                }
            }
        },

        //Define your static methods
        static:{

            //Mammal.soundOff(); //"Im a mammal!!"
            soundOff:function () {
                return "Im a mammal!!";
            }
        }
    });


});
