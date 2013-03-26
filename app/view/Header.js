Ext.define('Taxidermy.view.Header', {
    extend:'Ext.container.Container',
    xtype:'taxidermyheader',
    cls: 'main-header',
    initComponent:function () {
        this.items = [
            {
                xtype:'container'
            }
        ];
        this.callParent(arguments);
    }

});