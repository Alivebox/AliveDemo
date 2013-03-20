Ext.define('Taxidermy.controller.MainController', {

    extend: "Ext.app.Controller",

    views: [
        'Main',
        'MainTabContainer',
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
            ref:'mainTabContainer',
            selector:'maintabcontainer'
        }
    ],

    init:function () {
        this.control({
            'maintabcontainer': {
                afterrender: this.onAfterRender,
                stepSelected: this.onStepSelected
            }
        });
    },

    onAfterRender: function(){
        this.disableDefaultTabs();
    },

    disableDefaultTabs: function(){
        this.getMainTabContainer().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_DISABLE_OPTIONS_UNSELECTED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_DISABLED);
    },

    onStepSelected: function(argSelectedIndex,argSelectedTab){
        argSelectedTab.fireEvent('initDataView');
    }

});