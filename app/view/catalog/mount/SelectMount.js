Ext.define('Taxidermy.view.catalog.mount.SelectMount', {

    extend:'Ext.container.Container',
    xtype:'selectmount',
    layout:'column',

    initComponent:function () {
        this.tmpDisplayImage = this.creatDisplayImage();
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
                        store: 'DeerMountItems',
                        imageViewSelectionMode: Taxidermy.defaults.Constants.IMAGE_VIEW_SELECTION_MODE_SINGLE,
                        width: 600,
                        listeners: {
                            scope: this,
                            select: this.onMountSelectionHandler
                        }
                    }
                ]
            },
            this.tmpDisplayImage
        ];
        this.callParent(arguments);
    },
    creatDisplayImage:function () {
        var tmpChangingImage = Ext.create('Ext.Img', {
            itemId:'displayFullImage',
            src:'resources/images/species/fullSize/Deer.png',
            border:2,
            style:{
                borderColor:'black',
                borderStyle:'solid'
            }
        });
        return tmpChangingImage
    },
    onMountSelectionHandler: function(argImageView, argRecord){
        debugger;
        this.fireEvent('mountSelected', argRecord.data);
    }

});