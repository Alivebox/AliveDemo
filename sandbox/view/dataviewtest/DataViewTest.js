Ext.define('Sandbox.view.dataviewtest.DataViewTest', {

    extend:'Ext.container.Container',
    alias:'widget.dataviewtest',

    requires: [
        'Sandbox.view.dataviewtest.ImageView'
    ],

    initComponent:function () {
        this.items = [
            {
                xtype: 'imageview',
                width: 400,
                listeners: {
                    scope: this,
                    select: function(argView,argRecord){
                        console.log('Record selected = ' + argRecord.get('name'));
                    }
                }
            }
        ];
        this.callParent(arguments);
    }

});