Ext.define('Sandbox.view.dataviewtest.ImageView', {

    extend: 'Ext.view.View',
    alias : 'widget.imageview',
    requires: ['Ext.data.Store'],
    allowDeselect: false,
    trackOver: true,
    itemSelector: 'div.thumb-wrap',
    cls: 'x-image-view',
    autoScroll: true,
    overItemCls: 'x-item-over',
    tpl: [
        '<tpl for=".">',
        '<div class="thumb-wrap">',
        '<div class="thumb">',
        '<img src="sandbox/view/dataviewtest/images/{source}" />',
        '</div>',
        '<span>{name}</span>',
        '</div>',
        '</tpl>'
    ],
    
    initComponent: function() {
        this.getSelectionModel().setSelectionMode('SIMPLE');
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['id','name','source'],
            proxy: {
                type: 'ajax',
                url : 'sandbox/view/dataviewtest/data/images.json',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        });
        
        this.callParent();
    }
});
