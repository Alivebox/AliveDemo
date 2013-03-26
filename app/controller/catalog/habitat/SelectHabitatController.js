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
                initDataView: this.onInitDataView,
                boxready: this.addEventImagePreview
            }
        });
    },
    onHabitatSelected: function(argElement){
        this.selectedElement = argElement;
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
    },

    addEventImagePreview:function(abstractcomponent, width, height, options){
        habitatEl = abstractcomponent.getEl();
        habitatEl.on('click', this.imagePreviewClick, this, { delegate: '.image-preview' });
    },


    imagePreviewClick:function(argEvent,argElement){
        debugger;
        var isItemSelected =  argElement.className.indexOf("selected") != -1;
        if(isItemSelected){
            Taxidermy.util.TaxidermyUrlUtil.selectMultipleOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_HABITAT,this.selectedElement.name, this.selectedElement.subOptionsUrl);
        }else{
            Taxidermy.util.TaxidermyUrlUtil.deselectMultipleOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_HABITAT,this.selectedElement.name, this.selectedElement.subOptionsUrl);
        }
        this.getDisplayImage().loadPreviewImage();
    }

});