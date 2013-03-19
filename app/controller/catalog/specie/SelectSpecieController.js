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
            ref:'mainview',
            selector:'main'
        },
        {
            ref: 'specieImageViewContainer',
            selector: 'selectspecie container[itemId=specieImageViewContainer]'
        }
    ],
    init:function () {
        var tmpSpecieItemsStore = Ext.getStore('SpecieItems');
        tmpSpecieItemsStore.addListener('load',this.onSpecieItemsLoaded,this);
        this.control({
            'selectspecie': {
                specieSelected: this.onSpecieSelected,
                initDataView: this.onInitDataView,
                afterrender: this.onSelectSpecieAfterRender
            }
        });
    },

    onSpecieItemsLoaded: function(){
//        this.getSpecieImageViewContainer().doLayout();
    },

    onSpecieSelected: function(argElement){
        if(Taxidermy.util.TaxidermyUrlUtil.isSelectOptionChanged(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE,argElement.name)){
            Taxidermy.util.TaxidermyUrlUtil.clearDependentOptionsBelow(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE);
            this.getMainview().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_DISABLE_OPTIONS_RESETED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_DISABLED);
            this.getDisplayImage().resetCurrentImageAngleIndex();
        }else{
            this.getMainview().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_ENABLE_OPTIONS_SELECTED_SPECIE, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_ENABLED);
        }
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE,argElement.name, argElement.subOptionsUrl);
        this.getDisplayImage().loadPreviewImage();
    },
    onInitDataView: function(argOwnerCt){
    },
    onSelectSpecieAfterRender: function(argOwnerCt){
//        this.getDisplayImage().setRotationControllerEnabled(false);
    }
});