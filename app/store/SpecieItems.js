Ext.define('Taxidermy.store.SpecieItems', {

    extend: 'Ext.data.Store',

    id: 'imageItemsStore',
    autoLoad: true,
    model: 'Taxidermy.model.ImageItem',

    proxy: {
        type: 'ajax',
        url: 'resources/data/specieItems.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});