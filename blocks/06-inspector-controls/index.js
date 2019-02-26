/**
 * Block dependencies
 */
import classnames from 'classnames';
import icons from './icons';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
    InspectorControls,
} = wp.editor;
const {
    Toolbar,
    Button,
    Tooltip,
    PanelBody,
    PanelRow,
    FormToggle,
} = wp.components;


/**
  * Register block
 */
export default registerBlockType(
    'gutenbergblocks/inspector-controls',
    {
        title: __( 'Example - Inspector Controls', 'gutenbergblocks' ),
        description: __( 'An example of how to use the Inspector component for a block.', 'gutenbergblocks'),
        category: 'my-custom-blocks',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icons.sidebar,
        },                 
        keywords: [
            __( 'Button', 'gutenbergblocks' ),
            __( 'Settings', 'gutenbergblocks' ),
            __( 'Controls', 'gutenbergblocks' ),
        ],
        attributes: {
            textAlignment: {
                type: 'string',
            },
            blockAlignment: {
                type: 'string',
            },
            highContrast: {
                type: 'boolean',
                default: false,
            },
            message: {
                type: 'array',
                source: 'children',
                selector: '.message-body',
            },
        },
        getEditWrapperProps( attributes ) {
            const { blockAlignment } = attributes;
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
            const { attributes: { textAlignment, blockAlignment, message, highContrast },
                className, setAttributes } = props;
            const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );
            
            return [
                <InspectorControls>
                    <PanelBody
                        title={ __( 'High Contrast', 'gutenbergblocks' ) }
                    >
                        <PanelRow>
                            <label
                                htmlFor="high-contrast-form-toggle"
                            >
                                { __( 'High Contrast', 'gutenbergblocks' ) }
                            </label>
                            <FormToggle
                                id="high-contrast-form-toggle"
                                label={ __( 'High Contrast', 'gutenbergblocks' ) }
                                checked={ highContrast }
                                onChange={ toggleHighContrast }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>,            
                <BlockControls>
                    <AlignmentToolbar
                        value={ textAlignment }
                        onChange={ ( textAlignment ) => props.setAttributes( { textAlignment } ) }
                    />
                    <Toolbar>
                        <Tooltip text={ __( 'High Contrast', 'gutenbergblocks' )  }>
                            <Button
                                className={ classnames(
                                    'components-icon-button',
                                    'components-toolbar__control',
                                    { 'is-active': highContrast },
                                ) }
                                onClick={ toggleHighContrast }
                            >
                                {icons.contrast}
                            </Button>
                        </Tooltip>
                    </Toolbar>
                </BlockControls>,
                <div
                    className={ classnames(
                        props.className,
                        { 'high-contrast': highContrast },
                    ) }
                >
                    <RichText
                        tagName="div"
                        multiline="p"
                        placeholder={ __( 'Enter your message here..' ) }
                        value={ message }
                        style={ { textAlign: textAlignment } }
                        onChange={ ( message ) => props.setAttributes( { message } ) }
                    />
                </div>
            ];
        },
        save: props => {
            const { textAlignment, highContrast, message } = props.attributes;
            return (
                <div
                    className={ classnames(
                        'message-body',
                        { 'high-contrast': highContrast },
                    ) }
                    style={ { textAlign: textAlignment } }
                >
                    { message }
                </div>
            );
        },

    },
);
