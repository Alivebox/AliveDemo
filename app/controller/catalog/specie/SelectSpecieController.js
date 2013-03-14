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
        }
    ],
    init:function () {
        this.control({
            'selectspecie': {
                specieSelected: this.onSpecieSelected,
                initDataView: this.onInitDataView,
                afterrender: this.onSelectSpecieAfterRender
            }
        });
    },
    onSpecieSelected: function(argElement){
        Taxidermy.util.TaxidermyUrlUtil.selectUniqueOption(Taxidermy.defaults.Constants.TAXIDERMY_OPTION_TYPE_SPECIE,argElement.name, argElement.subOptionsUrl);
        this.getDisplayImage().loadPreviewImage();
    },
    onInitDataView: function(argOwnerCt){
    },
    onSelectSpecieAfterRender: function(argOwnerCt){
        this.getDisplayImage().setRotationControllerEnabled(false);
    }
});