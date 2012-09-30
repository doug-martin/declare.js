var Dog = require("../inheritance/dog"),
    WatchMixin = require("./watcher"),
    declare = require("../../declare");

var WatchDog = declare([Dog, WatchMixin]);

var watchDog = new WatchDog();

function watch(id, oldVal, newVal) {
    console.log("watchdog's %s was %s, now %s", id, oldVal, newVal);
}


watchDog.watch("type", watch);
watchDog.watch("color", watch);
watchDog.watch("sound", watch);

watchDog.set("type", "newDog");
watchDog.set("color", "newColor");
watchDog.set("sound", "newSound");

watchDog.unwatch("type", watch);
watchDog.unwatch("color", watch);
watchDog.unwatch("sound", watch);

watchDog.set("type", "newDog");
watchDog.set("color", "newColor");
watchDog.set("sound", "newSound");

