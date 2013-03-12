Ext.Loader.setConfig({
    enabled:true,
    paths: {
        'Framework': 'framework'
    }
});

Ext.syncRequire([
    'Framework.Main'
]);

Ext.application({

    requires: [
        'Taxidermy.ux.TaxidermyUxDependencies',
        'Taxidermy.util.TaxidermyUrlUtil',
        'Taxidermy.defaults.Constants'
    ],

    name:'Taxidermy',

    autoCreateViewport:false,

    controllers: [
        'MainController',
        'catalog.specie.SelectSpecieController',
        'catalog.mount.SelectMountController'
    ],

    launch:function () {
        this.loadConfigurationFile();
    },

    loadConfigurationFile: function(){
        var tmpParams = {
            fileUrl: "config/configFile.json"
        };
        Framework.util.FileLoader.loadAndDecodeJsonFile('resources/fileLoader.php',tmpParams,this.onConfigLoaded,this.onConfigFail,this);
    },

    onConfigLoaded: function(argConfigFileObject){
        Framework.Main.init({
            config: argConfigFileObject
        });
    },

    onConfigFail:function () {
        Framework.core.ErrorsManager.handleFatalError(Framework.core.Defaults.FATAL_ERROR_CONFIG_FILE_LOADER_NOT_FOUND_OR_INVALID);
    }

});
