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
        this.fixImageViewLayoutProblem();
    },

    fixImageViewLayoutProblem: function(){
        this.getSpecieImageview().setVisible(false);
        Ext.defer(function(){
            this.getSpecieImageview().setVisible(true);
        },500,this);
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
    },
    onInitDataView: function(argOwnerCt){
    },
    onSelectSpecieAfterRender: function(argOwnerCt){
        this.getDisplayImage().setRotationControllerEnabled(false);
    }
});