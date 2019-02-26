/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
    ColorPalette,
    RichText,
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
} = wp.editor;
const {
    CheckboxControl,
    RadioControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    SelectControl,
    DateTimePicker,
    Button, 
    Modal,
} = wp.components;
import FreeformEdit from './edit-classic';

const { __experimentalGetSettings } = wp.date;
const { withState } = wp.compose;

const MyDateTimePicker = props => {
    var {attributes: {dateControl }, setAttributes  } = props;

    const settings = __experimentalGetSettings();

    // To know if the current timezone is a 12 hour time with look for an "a" in the time format.
    // We also make sure this a is not escaped by a "/".
    const is12HourTime = /a(?!\\)/i.test(
        settings.formats.time
            .toLowerCase() // Test only the lower case a
            .replace( /\\\\/g, '' ) // Replace "//" with empty strings
            .split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
    );

    return (
        <DateTimePicker
            currentDate={ dateControl }
            onChange={ dateControl => setAttributes( { dateControl } ) }
            is12Hour={ is12HourTime }
        />
    );
} ;

const MyModal = props => {
    const {attributes: {isOpen, dateControl }, setAttributes  } = props;
    let dateString = ''
    if(!dateControl) {
        dateString = new Date().getDate() + '.' + 
        new Date().getMonth() + '.' + 
        new Date().getYear()
    }else{
        dateString = new Date(dateControl).getDate() + '.' + 
        new Date(dateControl).getMonth() + '.' + 
        new Date(dateControl).getYear()
    }

    return (
    <Fragment>
        <div>{dateControl}</div>
        <Button isDefault onClick={ isOpen => setAttributes( { isOpen:true } ) }>
            {dateString}
        </Button>
        { isOpen && (
            <Modal
                title="This is my modal"
                onRequestClose={ isOpen => setAttributes( { isOpen:false } ) }>
                <Button isDefault onClick={ isOpen => setAttributes( { isOpen:false } ) }>
                    My custom close button
                </Button>
                <MyDateTimePicker {...props} />
            </Modal>
        ) }
    </Fragment>
    );


};



/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const {
            attributes: { checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl, richtextControl, alignment, classicContent, dateControl, isOpen },
            className, setAttributes  } = this.props;

        const ALLOWED_BLOCKS = [ 'gutenbergblocks/richtext' ];
        // const TEMPLATE = [ [ 'core/columns', {}, [
        //     [ 'core/column', {}, [
        //         [ 'core/image' ],
        //     ] ],
        //     [ 'core/column', {}, [
        //         [ 'core/paragraph', { placeholder: 'Enter side content...' } ],
        //     ] ],
        // ] ] ];

        return (
            <div className={ className }>

            <MyModal {...this.props}/>

            <InnerBlocks
                allowedBlocks={ ALLOWED_BLOCKS }
                // template={ TEMPLATE }
                templateLock={ false }
            />


                <CheckboxControl
                    heading={ __( 'Checkbox Control', 'gutenbergblocks' ) }
                    label={ __( 'Check here', 'gutenbergblocks' ) }
                    help={ __( 'Checkbox control help text', 'gutenbergblocks' ) }
                    checked={ checkboxControl }
                    onChange={ checkboxControl => setAttributes( { checkboxControl } ) }
                />

                <ColorPalette
                    value={ colorPaletteControl }
                    onChange={ colorPaletteControl => setAttributes( { colorPaletteControl } ) }
                />

                <RadioControl
                    label={ __( 'Radio Control', 'gutenbergblocks' ) }
                    selected={ radioControl }
                    options={ [
                        { label: 'Author', value: 'a' },
                        { label: 'Editor', value: 'e' },
                    ]}
                    onChange={ radioControl => setAttributes( { radioControl } ) }
                />

                <RangeControl
                    beforeIcon="arrow-left-alt2"
                    afterIcon="arrow-right-alt2"
                    label={ __( 'Range Control', 'gutenbergblocks' ) }
                    value={ rangeControl }
                    onChange={ rangeControl => setAttributes( { rangeControl } ) }
                    min={ 1 }
                    max={ 10 }
                />

                <TextControl
                    label={ __( 'Text Control', 'gutenbergblocks' ) }
                    help={ __( 'Text control help text', 'gutenbergblocks' ) }
                    value={ textControl }
                    onChange={ textControl => setAttributes( { textControl } ) }
                />

                <TextareaControl
                    label={ __( 'Text Area Control', 'gutenbergblocks' ) }
                    help={ __( 'Text area control help text', 'gutenbergblocks' ) }
                    value={ textareaControl }
                    onChange={ textareaControl => setAttributes( { textareaControl } ) }
                />


           <Fragment>
                <RichText
                    key="editable"
                    tagName="div"
                    multiline="p"
                    placeholder={ __( 'Add your custom message', 'gutenbergblocks' ) }
                    style={ { textAlign: alignment } }
                    onChange={ richtextControl => {
                              setAttributes( {richtextControl} ) }
                          }
                    value={ richtextControl }
                    inlineToolbar
                />
            </Fragment>

            <FreeformEdit {...this.props}/>

                <ToggleControl
                    label={ __( 'Toggle Control', 'gutenbergblocks' ) }
                    checked={ toggleControl }
                    onChange={ toggleControl => setAttributes( { toggleControl } ) }
                />

                <SelectControl
                    label={ __( 'Select Control', 'gutenbergblocks' ) }
                    value={ selectControl }
                    options={ [
                        { value: 'a', label: 'Option A' },
                        { value: 'b', label: 'Option B' },
                        { value: 'c', label: 'Option C' },
                    ]}
                    onChange={ selectControl => setAttributes( { selectControl } ) }
                />

            </div>
        );
    }
}
