Ext.define('Taxidermy.view.catalog.mount.SelectMount', {

    extend:'Ext.container.Container',
    xtype:'selectmount',
    layout:'column',

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
                        itemId: 'imageview',
                        store: 'MountItems',
                        imageViewSelectionMode: Taxidermy.defaults.Constants.IMAGE_VIEW_SELECTION_MODE_SINGLE,
                        width: 600,
                        listeners: {
                            scope: this,
                            select: this.onMountSelectionHandler
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
    onMountSelectionHandler: function(argImageView, argRecord){
        this.fireEvent('mountSelected', argRecord.data);
    }

});