Ext.define('Taxidermy.view.Main', {
    extend:'Framework.ux.container.TabContainer',
    xtype:'main',
    requires:[
        'Taxidermy.view.catalog.specie.SelectSpecie'
    ],

    initComponent:function () {
        this.listeners = {
            scope:this,
            tabchange:this.onTabChange
        };
        this.items = [
            {
                xtype:'selectspecie',
                title:'Animal'
            },
            {
                xtype:'selectmount',
                title:'Type of Mount'
            },
            {
                title:'Base'
            },
            {
                title:'Pose'
            },
            {
                title:'Habitat'
            }
        ];
        this.callParent(arguments);
    },

    onTabChange:function (argSelectedIndex, argSelectedTab) {
        this.fireEvent('stepSelected', argSelectedIndex,argSelectedTab);
    }

});