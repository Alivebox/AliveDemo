Ext.define('Taxidermy.store.DeerMountItems', {

    extend: 'Ext.data.Store',

    id: 'deerMountItemsStore',
    autoLoad: true,
    model: 'Taxidermy.model.ImageItem',

    proxy: {
        type: 'ajax',
        url: 'resources/data/deerMountItems.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});