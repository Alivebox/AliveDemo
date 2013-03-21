Ext.define('Taxidermy.ux.PreviewImageDisplay', {

    extend:'Ext.Container',
    xtype:'previewimagedisplay',
    isItemSelected: undefined,
    cls: 'preview-image-container',

    layout: 'absolute',

    constructor:function () {
        this.callParent(arguments);
        this.isItemSelected = false;
        this.resetCurrentImageAngleIndex();
        this.imageAnglesArray = [];
        this.createImageAnglesArray();
    },

    initComponent:function () {
        this.previewImageDisplay = this.creatDisplayImage();
        this.leftRotator = this.creatLeftRotator();
        this.rightRotator = this.creatRightRotator();
        this.items = [
            this.previewImageDisplay,
            this.leftRotator,
            this.rightRotator
        ];
        this.callParent(arguments);
    },

    resetCurrentImageAngleIndex: function(){
        this.currentImageAngleIndex = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90;
    },

    resetCurrentImageDisplay: function(){
        this.previewImageDisplay.setSrc(Taxidermy.defaults.Constants.TAXIDERMY_DEFAULT_IMAGE_PATH);
    },

    creatRightRotator:function () {
        var tmpRightRotator = Ext.create('Ext.button.Button', {
            cls:'right-arrow',
            overCls: 'right-arrow-over',
            pressedCls: 'right-arrow-pressed',
            disabledCls: 'x-right-arrow-disabled',
            width:52,
            height:84,
            listeners:{
                scope:this,
                click:this.rotateRight
            }
        });
        return tmpRightRotator
    },

    creatLeftRotator:function () {
        var tmpLeftRotator = Ext.create('Ext.button.Button', {
            cls:'left-arrow',
            overCls: 'left-arrow-over',
            pressedCls: 'left-arrow-pressed',
            disabledCls: 'x-left-arrow-disabled',
            width:52,
            height:84,
            listeners:{
                scope:this,
                click:this.rotateLeft
            }
        });
        return tmpLeftRotator
    },

    creatDisplayImage:function () {
        var tmpChangingImage = Ext.create('Ext.Img', {
            itemId:'displayFullImage',
            cls: 'display-image'
        });
        return tmpChangingImage
    },

    loadPreviewImage:function () {
        var tmpPreviewImage = Taxidermy.util.TaxidermyUrlUtil.generateImageUrl(this.imageAnglesArray[this.currentImageAngleIndex]);
        this.previewImageDisplay.setSrc(Taxidermy.defaults.Constants.IMAGE_PREVIEW_SUFIX_PATH + tmpPreviewImage);
        this.setRotationControllerEnabled(true);
        var me = this;
        this.previewImageDisplay.el.dom.onerror = function(){
            me.resetCurrentImageDisplay();
            me.setRotationControllerEnabled(false);
        };
    },

    setPreviewImage:function (argSource) {
        this.previewImageDisplay.setSrc(argSource);
        this.setRotationControllerEnabled(false);
        var me = this;
        this.previewImageDisplay.el.dom.onerror = function(){
            me.resetCurrentImageDisplay();
        };

    },

    setRotationControllerEnabled: function(argIsActive){
        this.isItemSelected = argIsActive;
        this.validateRotationControllers();
    },

    rotateLeft:function () {
        this.rotateDisplayImage(Taxidermy.defaults.Constants.IMAGE_PREVIEW_ROTATE_ANGLE_LEFT);
    },

    rotateRight:function () {
        this.rotateDisplayImage(Taxidermy.defaults.Constants.IMAGE_PREVIEW_ROTATE_ANGLE_RIGHT);
    },

    createImageAnglesArray:function () {
        this.imageAnglesArray[Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90] = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_LEFT_90;
        this.imageAnglesArray[Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_45] = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_LEFT_45;
        this.imageAnglesArray[Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_FRONT] = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_FRONT;
        this.imageAnglesArray[Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_45] = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_RIGHT_45;
        this.imageAnglesArray[Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_90] = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_RIGHT_90;
    },

    rotateDisplayImage:function (argDirectionIncrement) {
        this.currentImageAngleIndex += argDirectionIncrement;
        this.validateRotationControllers();
        this.loadPreviewImage();
    },

    validateRotationControllers:function () {
        this.leftRotator.setDisabled(this.isRotationIndexOnLeftEdge());
        this.rightRotator.setDisabled(this.isRotationIndexOnRightEdge());
    },

    isRotationIndexOnLeftEdge: function(){
        return (this.currentImageAngleIndex == Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90) || !this.isItemSelected;
    },

    isRotationIndexOnRightEdge: function(){
        return (this.currentImageAngleIndex == Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_90) ||  !this.isItemSelected;
    }
});