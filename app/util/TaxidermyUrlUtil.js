Ext.define('Taxidermy.util.TaxidermyUrlUtil', {

    singleton:true,
    configurationOptions:undefined,

    constructor:function () {
        this.configurationOptions = [];
    },
    selectUniqueOption:function (argType, argValue) {
        var tmpElement = this.getOptionByType(argType);
        if (tmpElement != undefined) {
            tmpElement.options = [argValue];
            return;
        }
        this.configurationOptions.push({'type':argType, 'options':[argValue]});
    },
    isSelectOptionChanged:function (argType, argValue) {
        var tmpElement = this.getOptionByType(argType);
        if (tmpElement != undefined) {
            return tmpElement.options === argValue;
        }
        return true;
    },
    selectMultipleOption:function (argType, argValue) {
        var tmpElement = this.getOptionByType(argType);
        if (tmpElement != undefined) {
            tmpElement.options.push(argValue);
            return;
        }
        this.configurationOptions.push({'type':argType, 'options':[argValue]});
    },
    deselectMultipleOption:function (argType, argValue) {
        var tmpElement = this.getOptionByType(argType);
        if (tmpElement != undefined) {
            var tmpIndex = tmpElement.options.indexOf(argValue);
            if(tmpIndex != Taxidermy.defaults.Constants.ITEM_NOT_FOUND_INDEX){
                tmpElement.options.splice(tmpIndex);
            }
            return;
        }
        this.configurationOptions.push({'type':argType, 'options':[argValue]});
    },
    clearOptions:function () {
        this.configurationOptions = [];
    },
    getOptionByType:function (argType) {
        for (var index in this.configurationOptions) {
            var tmpElement = this.configurationOptions[index];
            if (tmpElement.type === argType) {
                return tmpElement;
            }
        }
        return undefined;
    }


});