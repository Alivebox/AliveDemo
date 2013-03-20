Ext.define('Taxidermy.controller.catalog.mount.SelectMountController', {

    extend: "Ext.app.Controller",
    storeDataSource:undefined,

    views: [
        'catalog.mount.SelectMount'
    ],
    models:[
        'ImageItem'
    ],
    stores:[
        'MountItems'
    ],
    refs:[
        {
            ref:'displayImage',
            selector:'selectmount [itemId=previewimagedisplay]'
        },
        {
            ref:'mountImageView',
            selector:'selectmount [itemId=mountimageview]'
        },
        {
            ref:'mainTabContainer',
            selector:'maintabcontainer'
        }
    ],
    init:function () {
        var tmpMountItemsStore = Ext.getStore('MountItems');
        tmpMountItemsStore.addListener('load',this.onMountItemsLoaded,this);
        this.control({
            'selectmount': {
                mountSelected: this.onMountSelected,
                initDataView: this.onInitDataView
            }
        });
    },
    onMountSelected: function(argElement){
        if(Taxidermy.util.TaxidermyUrlUtil.isSelectOptionChanged(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_MOUNT,argElement.name)){
            Taxidermy.util.TaxidermyUrlUtil.clearDependentOptionsBelow(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_MOUNT);
            this.getMainTabContainer().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_DISABLE_OPTIONS_RESETED_MOUNT, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_DISABLED);
            this.getDisplayImage().resetCurrentImageAngleIndex();
        }else{
            this.getMainTabContainer().setTabsToDisableByIndexes(Taxidermy.defaults.Constants.TAB_PANEL_ENABLE_OPTIONS_SELECTED_MOUNT, Taxidermy.defaults.Constants.TAB_PANEL_BUTTON_ENABLED);
        }
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_MOUNT,argElement.name, argElement.subOptionsUrl);
        this.getDisplayImage().loadPreviewImage();
    },
    onInitDataView: function(){
        var tmpSpecieSelectedOptions = Taxidermy.util.TaxidermyUrlUtil.getOptionByType(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE);
        if(this.storeDataSource == undefined || this.storeDataSource != tmpSpecieSelectedOptions.storeSource){
            var tmpUrl = Taxidermy.defaults.Constants.TAXIDERMY_DATA_JSON_PATH + tmpSpecieSelectedOptions.storeSource;
            this.getMountImageView().store.proxy.url = tmpUrl;
            this.getMountImageView().store.load();
            this.storeDataSource = tmpSpecieSelectedOptions.storeSource;
            this.getDisplayImage().resetCurrentImageDisplay();
            this.getDisplayImage().resetCurrentImageAngleIndex();
            this.getDisplayImage().setRotationControllerEnabled(false);
        }
    },
    onMountItemsLoaded: function(){
        this.fixImageViewLayoutProblem();
    },

    fixImageViewLayoutProblem: function(){
        this.getMountImageView().setVisible(false);
        Ext.defer(function(){
            this.getMountImageView().setVisible(true);
        },500,this);
    }
});