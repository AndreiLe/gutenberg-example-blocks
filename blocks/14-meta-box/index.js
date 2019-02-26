/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { TextControl, PanelBody } = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'gutenbergblocks/meta-box',
    {
        title: __( 'Example - Meta Box', 'gutenbergblocks' ),
        description: __( 'An example of how to build a block with a meta box field.', 'gutenbergblocks'),
        category: 'my-custom-blocks',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },         
        keywords: [
            __( 'Meta', 'gutenbergblocks' ),
            __( 'Custom field', 'gutenbergblocks' ),
            __( 'Box', 'gutenbergblocks' ),
        ],
        attributes: {
            text: {
                type: 'string',
                source: 'meta',
                meta: 'gutenbergblocks_gb_metabox',
            },
        },
        edit: props => {
            const { attributes: { text }, className, setAttributes } = props;
            return [
                <InspectorControls>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Meta box', 'gutenbergblocks' ) }
                            value={ text }
                            onChange={ text => setAttributes( { text } ) }
                        />
                    </PanelBody>
                </InspectorControls>,                
                <div className={ className } >
                    <p>{ __( 'Check the meta', 'gutenbergblocks' ) }</p>
                </div>
            ];
        },
        save: props => {
            return (
                <p>{ __( 'Check the meta', 'gutenbergblocks' ) }</p>
            );
        },
    },
);
