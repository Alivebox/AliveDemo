Ext.define('Taxidermy.util.TaxidermyUrlUtil', {

    singleton:true,
    configurationOptions:undefined,

    constructor:function () {
        this.configurationOptions = [];
    },
    selectUniqueOption:function (argType, argValue, argSource) {
        var tmpElement = this.getOptionByType(argType);
        if (tmpElement != undefined) {
            tmpElement.options = [argValue];
            tmpElement.storeSource = argSource;
            return;
        }
        this.configurationOptions.push({'type':argType, 'options':[{'name':argValue,'priority':Taxidermy.defaults.Constants.NO_PRIORITY}], 'storeSource':argSource});
    },
    clearDependentOptionsBelow: function(argType){
        for (var revertIndex = this.configurationOptions.length-1; revertIndex>=0; revertIndex--) {
            var tmpElement = this.configurationOptions[revertIndex];
            if (tmpElement.type != argType) {
                this.configurationOptions.pop();
            }
        }
    },
    isSelectOptionChanged:function (argType, argValue) {
        var tmpElement = this.getOptionByType(argType);
        if (tmpElement != undefined) {
            return tmpElement.options != argValue;
        }
        return false;
    },
    selectMultipleOption:function (argType, argSelectedElement, argSelectionModel) {
        var tmpElement = this.getOptionByType(argType);
        if(tmpElement == undefined){
            this.configurationOptions.push({'type':argType, 'options':[] });
            tmpElement = this.getOptionByType(argType);
        }
        this.addSortOption(tmpElement.options, {'name':argSelectedElement.name,'priority':argSelectedElement.priority, 'depends':argSelectedElement.depends});
        this.selectDependencies(tmpElement.options, argSelectedElement, argSelectionModel);
    },
    deselectMultipleOption:function (argType, argSelectedElement, argSelectionModel) {
        ;
        var tmpElement = this.getOptionByType(argType);
        if(tmpElement == undefined){
            this.configurationOptions.push({'type':argType, 'options':[] });
            tmpElement = this.getOptionByType(argType);
        }
        this.removeOption(tmpElement.options, argSelectedElement);
        this.deselectDependencies(tmpElement.options, argSelectedElement, argSelectionModel);
    },
    removeOption:function(argOptionsArray, argSelectedElement){
        var tmpIndex = this.getIndexByName(argOptionsArray,argSelectedElement.name);
        if(tmpIndex != Taxidermy.defaults.Constants.ITEM_NOT_FOUND_INDEX){
            argOptionsArray.splice(tmpIndex, 1);
        }
    },
    clearOptions:function () {
        this.configurationOptions = [];
    },
    addSortOption:function (argArray, argItem){
        if( this.getIndexByName(argArray,argItem.name) != Taxidermy.defaults.Constants.ITEM_NOT_FOUND_INDEX){
            //already exists
            return;
        }
        for (var index=0; index<argArray.length;index++) {
            if(index+1 == argArray.length && argArray[index].priority < argItem.priority){
                //insert in the top
                argArray.push(argItem);
                return;
            }
            if(index+1 == argArray.length && argArray[index].priority > argItem.priority){
                //insert in the bottom
                argArray.unshift(argItem);
                return;
            }
            if(argArray[index].priority < argItem.priority && argItem.priority < argArray[index+1].priority){
                //insert in the sort position
                argArray.splice(index+1, 0, argItem);
                return;
            }
        }
        if(argArray.length == 0){
            argArray.push(argItem);
        }
    },
    selectDependencies:function(argOptionsArray, argOption, argSelectionModel){
        var tmpDepends = argOption.depends;
        if(argOptionsArray.length == 0){
            this.addSortOption(argOptionsArray, {'name':argOption.name,'priority':argOption.priority, 'depends':argOption.depends});
            return;
        }
        var tmpStore = Ext.getStore('HabitatItems');
        var tmpRecords = []
        for(var index in tmpDepends){
            var tmpItem = tmpStore.getById(tmpDepends[index]);
            this.addSortOption(argOptionsArray, tmpItem);
            tmpRecords.push(tmpItem);
        }
        argSelectionModel.select(tmpRecords, true);
    },
    deselectDependencies:function(argOptionsArray, argDeletedOption, argSelectionModel){
        if(argOptionsArray.length == 0){
            return;
        }
        var tmpStore = Ext.getStore('HabitatItems');
        var tmpRecords = []
        for(var index=0; index<argOptionsArray.length;index++){
            if(argOptionsArray[index].depends.indexOf(argDeletedOption.id) != Taxidermy.defaults.Constants.ITEM_NOT_FOUND_INDEX){
                tmpRecords.push(tmpStore.findRecord('name',argOptionsArray[index].name));
                argOptionsArray.splice(index, 1);
                //reset index after remove item
                index=-1;
            }
        }
        argSelectionModel.deselect(tmpRecords);
    },
    getOptionByType:function (argType) {
        for (var index in this.configurationOptions) {
            var tmpElement = this.configurationOptions[index];
            if (tmpElement.type === argType) {
                return tmpElement;
            }
        }
        return undefined;
    },
    getIndexByName:function (argArray, argName){
        for (var index in argArray) {
            var tmpElement = argArray[index];
            if (tmpElement.name === argName) {
                return index;
            }
        }
        return Taxidermy.defaults.Constants.ITEM_NOT_FOUND_INDEX;
    },
    generateImageUrl:function (argAngle) {
        var tmpImageUrl = "";
        for (var elementIndex in this.configurationOptions) {
            var tmpElement = this.configurationOptions[elementIndex];
            for (var optionIndex in tmpElement.options) {
                var tmpOption = tmpElement.options[optionIndex];
                tmpImageUrl = tmpImageUrl+ (tmpOption.name.toLowerCase()).replace(" ", "")+"_";
            }
        }
        return tmpImageUrl+argAngle+Taxidermy.defaults.Constants.IMAGE_FILES_EXTENSION;
    }
});