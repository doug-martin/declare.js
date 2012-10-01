define(["declare", "../inheritance/dog", "./watcher"], function (declare, Dog, WatchMixin) {

    return declare([Dog, WatchMixin]);


});

