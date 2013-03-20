Ext.define('Taxidermy.view.Main', {
    extend:'Ext.container.Container',
    xtype:'main',

    initComponent:function () {
        this.items = [
            {
                xtype:'taxidermyheader',
                title:'Animal'
            },
            {
                xtype:'maintabcontainer'
            }
        ];
        this.callParent(arguments);
    }

});