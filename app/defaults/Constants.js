Ext.define('Taxidermy.defaults.Constants',{

    statics: {
        ITEM_NOT_FOUND_INDEX: -1,
        TAXIDERMY_OPTION_TYPE_SPECIE: "SPECIE",
        TAXIDERMY_OPTION_TYPE_MOUNT: "MOUNT",
        TAXIDERMY_OPTION_TYPE_POSE: "POSE",
        TAXIDERMY_OPTION_TYPE_BASE: "BASE",
        TAXIDERMY_OPTION_TYPE_HABITAT: "HABITAT",
        IMAGE_VIEW_SELECTION_MODE_SINGLE: "SINGLE",
        IMAGE_VIEW_SELECTION_MODE_SIMPLE: "SIMPLE",
        IMAGE_VIEW_SELECTION_MODE_MULTIPLE: "MULTI",
        TAXIDERMY_DATA_JSON_PATH: 'resources/data/',
        TAXIDERMY_DEFAULT_IMAGE_PATH: 'resources/images/preview/default.jpg',
        TAXIDERMY_LOGO_IMAGE_PATH: 'resources/images/icons_logo/logo_mckenzie.png',
        IMAGE_PREVIEW_LEFT_ARROW_PATH: 'resources/images/icons_logo/turn_left_up.png',
        IMAGE_PREVIEW_RIGHT_ARROW_PATH: 'resources/images/icons_logo/turn_right_up.png',
        IMAGE_PREVIEW_SUFIX_PATH: 'resources/images/preview/',
        IMAGE_FILES_EXTENSION: '.jpg',
        IMAGE_PREVIEW_ANGLE_FRONT: 'front',
        IMAGE_PREVIEW_ANGLE_LEFT_45: 'left45',
        IMAGE_PREVIEW_ANGLE_LEFT_90: 'left90',
        IMAGE_PREVIEW_ANGLE_RIGHT_45: 'right45',
        IMAGE_PREVIEW_ANGLE_RIGHT_90: 'right90',
        IMAGE_PREVIEW_ANGLE_INDEX_LEFT_90: 0,
        IMAGE_PREVIEW_ANGLE_INDEX_LEFT_45: 1,
        IMAGE_PREVIEW_ANGLE_INDEX_FRONT: 2,
        IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_45: 3,
        IMAGE_PREVIEW_ANGLE_INDEX_RIGHT_90: 4,
        IMAGE_PREVIEW_ROTATE_ANGLE_LEFT: -1,
        IMAGE_PREVIEW_ROTATE_ANGLE_RIGHT: 1,
        TAB_PANEL_ENABLE_OPTIONS_SELECTED_SPECIE: [0,1],
        TAB_PANEL_ENABLE_OPTIONS_SELECTED_MOUNT: [0,1,2],
        TAB_PANEL_ENABLE_OPTIONS_SELECTED_BASE: [0,1,2,3],
        TAB_PANEL_ENABLE_OPTIONS_SELECTED_POSE: [0,1,2,3,4],
        TAB_PANEL_DISABLE_OPTIONS_RESETED_SPECIE: [2,3,4],
        TAB_PANEL_DISABLE_OPTIONS_RESETED_MOUNT: [3,4],
        TAB_PANEL_DISABLE_OPTIONS_RESETED_BASE: [4],
        TAB_PANEL_DISABLE_OPTIONS_UNSELECTED_SPECIE: [1,2,3,4],
        TAB_PANEL_BUTTON_DISABLED: true,
        TAB_PANEL_BUTTON_ENABLED: false
    }

});