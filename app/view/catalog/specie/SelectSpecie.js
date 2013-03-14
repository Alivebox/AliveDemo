Ext.define('Taxidermy.view.catalog.specie.SelectSpecie', {

    extend:'Ext.Container',
    xtype:'selectspecie',
    layout: 'column',

    initComponent:function () {
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
                        itemId: 'imageview',
                        store: 'SpecieItems',
                        imageViewSelectionMode: Taxidermy.defaults.Constants.IMAGE_VIEW_SELECTION_MODE_SINGLE,
                        width: 600,
                        listeners: {
                            scope: this,
                            select: this.onSpecieSelectionHandler
                        }
                    }
                ]
            },
            {
                xtype: 'previewimagedisplay',
                itemId: 'previewimagedisplay'
            }
        ];
        this.callParent(arguments);
    },
    onSpecieSelectionHandler: function(argImageView, argRecord){
        this.fireEvent('specieSelected', argRecord.data);
    }

});