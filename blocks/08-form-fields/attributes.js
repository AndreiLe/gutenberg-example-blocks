const attributes = {
    colorPaletteControl: {
        type: 'string',
        default: '#000000'
    },
    checkboxControl: {
        type: 'boolean',
        default: true,
    },
    dateTimeControl: {
        type: 'string',
    },
    radioControl: {
        type: 'string',
        default: 'a',
    },
    rangeControl: {
        type: 'number',
        default: '10',
    },
    textControl: {
        type: 'string',
    },
    textareaControl: {
        type: 'text',
    },
    toggleControl: {
        type: 'boolean',
    },
    selectControl: {
        type: 'string',
    },
    richtextControl: {
        type: 'array',
        source: 'children',
        selector: '.message-body',
    },
    alignment: {
        type: 'string',
    },
    classicContent: {
        type: 'string',
        source: 'html',
    },
    dateControl: {
        type: 'string',
    },
    isOpen: {
        type: 'boolean',
    },
};

export default attributes;
