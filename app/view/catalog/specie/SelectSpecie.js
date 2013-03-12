Ext.define('Taxidermy.view.catalog.specie.SelectSpecie', {

    extend:'Ext.Container',
    xtype:'selectspecie',
    layout: 'column',

    initComponent:function () {
        this.tmpDisplayImage =  this.creatDisplayImage();
        this.items = [
            {
                xtype: 'container',
                layout: 'vbox',
                items:[
                    {
                        xtype:'label',
                        text:'Select Type of Animal'
                    },
                    {
                        xtype: 'imageview',
                        store: 'SpecieItems',
                        imageViewSelectionMode: Taxidermy.defaults.Constants.IMAGE_VIEW_SELECTION_MODE_SIMPLE,
                        width: 600,
                        listeners: {
                            scope: this,
                            select: this.onSpecieSelectionHandler
                        }
                    }
                ]
            },
            this.tmpDisplayImage
        ];
        this.callParent(arguments);
    },
    creatDisplayImage: function(){
        var tmpChangingImage = Ext.create('Ext.Img', {
            itemId: 'displayFullImage',
            src: 'resources/images/species/fullSize/Deer.png',
            border: 2,
            style: {
                borderColor: 'black',
                borderStyle: 'solid'
            }
        });
        return tmpChangingImage
    },
    onSpecieSelectionHandler: function(argImageView, argRecord){
        this.fireEvent('specieSelected', argRecord.data);
    }

});