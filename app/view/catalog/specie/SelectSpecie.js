Ext.define('Taxidermy.view.catalog.specie.SelectSpecie', {

    extend:'Ext.Container',
    xtype:'selectspecie',
    layout: 'column',
    cls: 'item-selection',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                itemId: 'specieImageViewContainer',
                layout: 'vbox',
                items:[
                    {
                        xtype:'label',
                        text:'Select Animal'
                    },
                    {
                        xtype: 'imageview',
                        itemId: 'specieImageview',
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