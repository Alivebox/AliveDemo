Ext.define('Taxidermy.controller.MainController', {

    extend: "Ext.app.Controller",

    views: [
        'Main'
    ],
    refs:[
        {
            ref:'selectSpecieView',
            selector:'selectspecie [itemId=imageview]'
        },
        {
            ref:'selectMountView',
            selector:'selectmount [itemId=imageview]'
        }
    ],

    init:function () {
        this.control({
            'main': {
                stepSelected: this.onStepSelected
            }
        });
    },
    onStepSelected: function(argSelectedIndex,argSelectedTab){
        argSelectedTab.fireEvent('initDataView');
    }

});