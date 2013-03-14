Ext.define('Taxidermy.ux.PreviewImageDisplay', {

    extend:'Ext.Container',
    xtype:'previewimagedisplay',
    layout:'column',
    isItemSelected: undefined,

    constructor:function () {
        this.callParent(arguments);
        isItemSelected = false;
        this.currentImageAngleIndex = Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90;
        this.imageAnglesArray = [];
        this.createImageAnglesArray();
    },
    initComponent:function () {
        this.previewImageDisplay = this.creatDisplayImage();
        this.leftRotator = this.creatLeftRotator();
        this.rightRotator = this.creatRightRotator();
        this.items = [
            this.leftRotator,
            this.previewImageDisplay,
            this.rightRotator
        ];
        this.callParent(arguments);
    },
    creatRightRotator:function () {
        var tmpRightRotator = Ext.create('Ext.Button', {
            width:52,
            height:84,
            cls:'right-arrow',
            listeners:{
                scope:this,
                click:this.rotateRight
            }
        });
        return tmpRightRotator
    },
    creatLeftRotator:function () {
        var tmpLeftRotator = Ext.create('Ext.Button', {
            width:52,
            height:84,
            cls:'left-arrow',
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
            src:Taxidermy.defaults.Constants.TAXIDERMY_DEFAULT_IMAGE_PATH
        });
        return tmpChangingImage
    },
    loadPreviewImage:function () {
        var tmpPreviewImage = Taxidermy.util.TaxidermyUrlUtil.generateImageUrl(this.imageAnglesArray[this.currentImageAngleIndex]);
        this.previewImageDisplay.setSrc(Taxidermy.defaults.Constants.IMAGE_PREVIEW_SUFIX_PATH + tmpPreviewImage);
        this.setRotationControllerEnabled(true);
        var me = this;
        this.previewImageDisplay.el.dom.onerror = function(){
            me.previewImageDisplay.setSrc(Taxidermy.defaults.Constants.TAXIDERMY_IMAGE_NOT_AVAILABLE_PATH);
            me.setRotationControllerEnabled(false);
        };
    },
    setPreviewImage:function (argSource) {
        this.previewImageDisplay.setSrc(argSource);
        this.setRotationControllerEnabled(false);
        var me = this;
        this.previewImageDisplay.el.dom.onerror = function(){
            me.previewImageDisplay.setSrc(Taxidermy.defaults.Constants.TAXIDERMY_IMAGE_NOT_AVAILABLE_PATH);
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
        this.leftRotator.setDisabled((this.currentImageAngleIndex == Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90) || !this.isItemSelected);
        this.rightRotator.setDisabled((this.currentImageAngleIndex == Taxidermy.defaults.Constants.IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_90) ||  !this.isItemSelected);
    }
});