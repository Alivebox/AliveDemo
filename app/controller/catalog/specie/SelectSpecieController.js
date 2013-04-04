Ext.define('Taxidermy.controller.catalog.specie.SelectSpecieController', {

    extend: "Ext.app.Controller",

    views: [
        'catalog.specie.SelectSpecie'
    ],
    models:[
        'ImageItem'
    ],
    stores:[
        'SpecieItems'
    ],
    refs:[
        {
            ref:'displayImage',
            selector:'selectspecie [itemId=previewimagedisplay]'
        },
        {
            ref:'mainTabContainer',
            selector:'maintabcontainer'
        },
        {
            ref: 'specieImageViewContainer',
            selector: 'selectspecie container[itemId=specieImageViewContainer]'
        },
        {
            ref: 'specieImageview',
            selector: 'selectspecie imageview[itemId=specieImageview]'
        }
    ],
    init:function () {
        this.control({
            'selectspecie': {
                afterrender: this.onSelectSpecieAfterRender,
                specieSelected: this.onSpecieSelected
            }
        });
    },

    onSelectSpecieAfterRender: function(argOwnerCt){
        Framework.core.ModelLocator.tabIndex = Taxidermy.defaults.Constants.TAXIDERMY_VIEW_INDEX_SPECIE;
        this.getDisplayImage().setRotationControllerEnabled(false);
    },

    onSpecieSelected: function(argElement){
        if(Taxidermy.util.TaxidermyUrlUtil.isSelectOptionChanged(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE,argElement.name)){
            Taxidermy.util.TaxidermyUrlUtil.clearDependentOptionsBelow(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE);
            if(argElement.name == "Deer"){
                this.getMainTabContainer().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_ENABLE_OPTIONS_SELECTED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_ENABLED);
            }
            else {
                this.getMainTabContainer().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_DISABLE_OPTIONS_UNSELECTED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_DISABLED);
            }
            this.getDisplayImage().resetCurrentImageAngleIndex();
        }else{
            if(argElement.name == "Deer"){
                this.getMainTabContainer().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_ENABLE_OPTIONS_SELECTED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_ENABLED);
            }
        }
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE,argElement.name, argElement.subOptionsUrl);
        this.getDisplayImage().loadPreviewImage();
        if(argElement.name != "Deer"){
            this.getDisplayImage().setRotationControllerEnabled(false);
        }
    }

});