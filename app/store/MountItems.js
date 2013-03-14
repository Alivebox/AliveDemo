Ext.define('Taxidermy.store.MountItems', {

    extend: 'Ext.data.Store',

    id: 'deerMountItemsStore',
    autoLoad: false,
    model: 'Taxidermy.model.ImageItem',

    proxy: {
        type: 'ajax',
        url: '',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});