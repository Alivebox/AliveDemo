Ext.define('Taxidermy.store.HabitatItems', {

    extend: 'Ext.data.Store',

    id: 'habitatItemsStore',
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