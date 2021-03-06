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
                        width: 420,
                        height: 560,
                        listeners: {
                            scope: this,
                            select: this.onSpecieSelectionHandler
                        }
                    }
                ]
            },
            {
                xtype: 'previewimagedisplay',
                itemId: 'previewimagedisplay',
                leftEdgeIndex: Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90,
                rightEdgeIndex: Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_90
            }
        ];
        this.callParent(arguments);
    },

    onSpecieSelectionHandler: function(argImageView, argRecord){
        this.fireEvent('specieSelected', argRecord.data);
    }

});