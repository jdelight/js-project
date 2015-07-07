(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        return define(factory);
    } else if (typeof exports === 'object') {
        return module.exports = factory();
    } else {
        root.Component = factory();
    }

}(this, function () {
    var Component = function () {

    };

    Component.prototype.open = function () {
        console.log('open');
    };

    Component.prototype.close = function () {
        console.log('close');
    };

    return Component;
}));
