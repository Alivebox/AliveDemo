Ext.define('Taxidermy.controller.MainController', {

    extend: "Ext.app.Controller",

    views: [
        'Main'
    ],

    init:function () {
        this.control({
            'main': {
                stepSelected: this.onStepSelected
            }
        });
    },
    onStepSelected: function(argSelectedIndex,argSelectedTab){
        debugger;
    }

});