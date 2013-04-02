Ext.define('Taxidermy.controller.catalog.habitat.SelectHabitatController', {

    extend: "Ext.app.Controller",
    storeDataSource:undefined,

    views: [
        'catalog.habitat.SelectHabitat'
    ],
    models:[
        'ImageItem'
    ],
    stores:[
        'HabitatItems'
    ],
    refs:[
        {
            ref:'displayImage',
            selector:'selecthabitat [itemId=previewimagedisplay]'
        },
        {
            ref:'habitatImageView',
            selector:'selecthabitat [itemId=habitatimageview]'
        },
        {
            ref:'mainTabContainer',
            selector:'maintabcontainer'
        }
    ],
    init:function () {
        this.control({
            'selecthabitat': {
                habitatSelected: this.onHabitatSelected,
                habitatDeselected: this.onHabitatDeselected,
                initDataView: this.onInitDataView
            }
        });
    },
    onHabitatSelected: function(argElement){
        this.selectedElement = argElement;
        var tmpSelectedModel = this.getHabitatImageView().getSelectionModel();
        Taxidermy.util.TaxidermyUrlUtil.selectMultipleOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_HABITAT,this.selectedElement, tmpSelectedModel);
        this.getDisplayImage().loadPreviewImage();
    },
    onHabitatDeselected: function(argElement){
        this.selectedElement = argElement;
        var tmpSelectedModel = this.getHabitatImageView().getSelectionModel();
        Taxidermy.util.TaxidermyUrlUtil.deselectMultipleOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_HABITAT,this.selectedElement, tmpSelectedModel);
        this.getDisplayImage().loadPreviewImage();
    },
    onInitDataView: function(){
        var tmpMountSelectedOptions = Taxidermy.util.TaxidermyUrlUtil.getOptionByType(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_MOUNT);
        if(this.storeDataSource == undefined || this.storeDataSource != tmpMountSelectedOptions.storeSource){
            var tmpUrl = Taxidermy.defaults.Constants.TAXIDERMY_DATA_JSON_PATH + tmpMountSelectedOptions.storeSource;
            this.getHabitatImageView().store.proxy.url = tmpUrl;
            this.getHabitatImageView().store.load();
            this.storeDataSource = tmpMountSelectedOptions.storeSource;
            this.getDisplayImage().resetCurrentImageDisplay();
            this.getDisplayImage().resetCurrentImageAngleIndex();
            this.getDisplayImage().setRotationControllerEnabled(false);
        }
        this.getDisplayImage().loadPreviewImage();
        this.getDisplayImage().setRotationControllerEnabled(true);
    }
});