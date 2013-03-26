Ext.define('Taxidermy.view.catalog.habitat.SelectHabitat', {

    extend:'Ext.container.Container',
    xtype:'selecthabitat',
    layout:'column',
    cls: 'item-selection',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'vbox',
                items:[
                    {
                        xtype:'label',
                        text:'Select Habitat'
                    },
                    {
                        xtype: 'imageview',
                        itemId: 'habitatimageview',
                        store: 'HabitatItems',
                        imageViewSelectionMode: Taxidermy.defaults.Constants.IMAGE_VIEW_SELECTION_MODE_SIMPLE,
                        width: 420,
                        height: 560,
                        listeners: {
                            scope: this,
                            select: this.onHabitatSelectionHandler
                        }
                    }
                ]
            },
            {
                xtype: 'previewimagedisplay',
                itemId: 'previewimagedisplay',
                leftEdgeIndex: Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_45,
                rightEdgeIndex: Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_45
            }
        ];
        this.callParent(arguments);
    },
    onHabitatSelectionHandler: function(argImageView, argRecord){
        this.fireEvent('habitatSelected', argRecord.data);
    }

});