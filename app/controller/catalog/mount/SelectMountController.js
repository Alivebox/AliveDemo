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
            ref:'imageView',
            selector:'selectmount [itemId=imageview]'
        }
    ],
    init:function () {
        this.control({
            'selectmount': {
                mountSelected: this.onMountSelected,
                initDataView: this.onInitDataView
            }
        });
    },
    onMountSelected: function(argElement){
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_MOUNT,argElement.name, argElement.subOptionsUrl);
        this.getDisplayImage().loadPreviewImage();
    },
    onInitDataView: function(){
        var tmpSpecieSelectedOptions = Taxidermy.util.TaxidermyUrlUtil.getOptionByType(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE);
        if(this.storeDataSource == undefined || this.storeDataSource != tmpSpecieSelectedOptions.storeSource){
            var tmpUrl = Taxidermy.defaults.Constants.TAXIDERMY_DATA_JSON_PATH + tmpSpecieSelectedOptions.storeSource;
            this.getImageView().store.proxy.url = tmpUrl;
            this.getImageView().store.load();
            this.storeDataSource = tmpSpecieSelectedOptions.storeSource;
            this.getDisplayImage().setPreviewImage(Taxidermy.defaults.Constants.TAXIDERMY_DEFAULT_IMAGE_PATH);
        }
    }
});