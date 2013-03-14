Ext.define('Taxidermy.ux.ImageView', {

    extend: 'Ext.view.View',
    alias : 'widget.imageview',
    requires: ['Ext.data.Store'],
    imageViewSelectionMode: undefined,
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
        '<img id="{id}" src="{imageSource}" title="{name}">',
        '</div>',
        '<span>{name}</span>',
        '</div>',
        '</tpl>'
    ],
    
    initComponent: function() {
        this.getSelectionModel().setSelectionMode(this.imageViewSelectionMode);
        this.callParent();
    }
});
