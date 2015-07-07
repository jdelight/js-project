requirejs.config({
    baseUrl: '/src'
});

define(['component'], function(Component){

    var component = new Component();
    component.open();
    component.close();

});
