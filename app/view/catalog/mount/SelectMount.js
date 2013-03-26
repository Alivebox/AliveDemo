Ext.define('Taxidermy.view.catalog.mount.SelectMount', {

    extend:'Ext.container.Container',
    xtype:'selectmount',
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
                        text:'Select Type of Mount'
                    },
                    {
                        xtype: 'imageview',
                        itemId: 'mountimageview',
                        store: 'MountItems',
                        imageViewSelectionMode: Taxidermy.defaults.Constants.IMAGE_VIEW_SELECTION_MODE_SINGLE,
                        width: 420,
                        height: 560,
                        listeners: {
                            scope: this,
                            select: this.onMountSelectionHandler
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
    onMountSelectionHandler: function(argImageView, argRecord){
        this.fireEvent('mountSelected', argRecord.data);
    }

});