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
            ref:'displayFullImage',
            selector:'selectspecie [itemId=displayFullImage]'
        }
    ],
    init:function () {
        this.control({
            'selectspecie': {
                specieSelected: this.onSpecieSelected
            }
        });
    },
    onSpecieSelected: function(argElement){
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE,argElement.name);
        this.getDisplayFullImage().setSrc(argElement.fullSizeImageSource);
    }
});