Ext.define('Taxidermy.model.ImageItem', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'name',
            type:'string'
        },
        {
            name:'imageSource',
            type:'string'
        },
        {
            name:'fullSizeImageSource',
            type:'string'
        },
        {
            name:'subOptionsUrl',
            type:'string'
        }

    ]


});