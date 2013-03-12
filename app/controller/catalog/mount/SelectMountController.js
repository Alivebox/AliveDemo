Ext.define('Taxidermy.controller.catalog.mount.SelectMountController', {

    extend: "Ext.app.Controller",

    views: [
        'catalog.mount.SelectMount'
    ],
    models:[
        'ImageItem'
    ],
    stores:[
        'DeerMountItems'
    ],
    refs:[
        {
            ref:'displayFullImage',
            selector:'selectmount [itemId=displayFullImage]'
        }
    ],
    init:function () {
        this.control({
            'selectmount': {
                mountSelected: this.onMountSelected
            }
        });
    },
    onMountSelected: function(argElement){
        debugger;
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_MOUNT,argElement.name);
        this.getDisplayFullImage().setSrc(argElement.fullSizeImageSource);
    }
});