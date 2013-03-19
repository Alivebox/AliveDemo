Ext.define('Taxidermy.controller.MainController', {

    extend: "Ext.app.Controller",

    views: [
        'Main',
        'Header'
    ],
    refs:[
        {
            ref:'selectSpecieView',
            selector:'selectspecie [itemId=imageview]'
        },
        {
            ref:'selectMountView',
            selector:'selectmount [itemId=imageview]'
        },
        {
            ref:'mainview',
            selector:'main'
        }
    ],

    init:function () {
        this.control({
            'main': {
                afterrender: this.onAfterRender,
                stepSelected: this.onStepSelected
            }
        });
    },

    onAfterRender: function(){
        this.disableDefaultTabs();
    },

    disableDefaultTabs: function(){
        this.getMainview().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_DISABLE_OPTIONS_UNSELECTED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_DISABLED);
    },

    onStepSelected: function(argSelectedIndex,argSelectedTab){
        argSelectedTab.fireEvent('initDataView');
    }

});