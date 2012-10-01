define(["declare"], function (declare) {


    function _set(prop, val) {
        var oldVal = this.get(prop);
        var ret = this._super(arguments);
        this.__callHandlers(prop, oldVal, val);
        return ret;
    }

    function _callHandlers(prop, oldVal, newVal) {
        var handlers = this.__watchers[prop], l;
        if (handlers && (l = handlers.length) !== 0) {
            for (var i = 0; i < l; i++) {
                handlers[i].call(null, prop, oldVal, newVal);
            }
        }
    }

    function _watch(prop, handler) {
        if ("function" !== typeof handler) {
            throw new TypeError("Invalid handler.");
        }
        if (!this.__watchers[prop]) {
            this.__watchers[prop] = [handler];
        } else {
            this.__watchers[prop].push(handler);
        }
    }

    function _unwatch(prop, handler) {
        if ("function" !== typeof handler) {
            throw new TypeError("Invalid handler.");
        }
        var handlers = this.__watchers[prop], index;
        if (handlers && (index = handlers.indexOf(handler)) !== -1) {
            handlers.splice(index, 1);
        }
    }

    return declare({
        instance:{
            constructor:function () {
                this._super(arguments);
                this.__watchers = {};
            },
            "set":_set,
            __callHandlers:_callHandlers,
            watch:_watch,
            unwatch:_unwatch
        },

        "static":{

            init:function () {
                this._super(arguments);
                this.__watchers = {};
            },
            "set":_set,
            __callHandlers:_callHandlers,
            watch:_watch,
            unwatch:_unwatch
        }
    });

});


