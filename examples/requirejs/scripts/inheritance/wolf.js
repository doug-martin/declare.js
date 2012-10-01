define(["./mammal"], function (Mammal) {

    return Mammal.extend({

        //define your instance method
        instance:{

            //You can override super constructors just be sure to call `_super`
            constructor:function (options) {
                options = options || {};
                this._super(arguments); //call our super constructor.
                this._sound = "growl";
                this._color = options.color || "grey";
            },

            //override Mammals `speak` method by appending our own data to it.
            speak:function () {
                return this._super(arguments) + " a " + this._sound;
            },

            //add new getters for sound and color
            getters:{

                //new Wolf().get("type")
                //notice color is read only as we did not define a setter
                color:function () {
                    return this._color;
                },

                //new Wolf().get("sound")
                sound:function () {
                    return this._sound;
                }
            },

            setters:{

                //new Wolf().set("sound", "howl")
                sound:function (s) {
                    this._sound = s;
                }
            }

        },

        static:{

            //You can override super static methods also! And you can still use _super
            soundOff:function () {
                //You can even call super in your statics!!!
                //should return "I'm a mammal!! that growls"
                return this._super(arguments) + " that growls";
            }
        }
    });

});

