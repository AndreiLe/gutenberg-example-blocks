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
const { RichText } = wp.editor;

/**
 * Register block
 */
export default registerBlockType(
    'gutenbergblocks/richtext',
    {
        title: __( 'Example - RichText', 'gutenbergblocks' ),
        description: __( 'How to use the RichText component for building your own editable blocks.', 'gutenbergblocks' ),
        category: 'my-custom-blocks',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },   
        keywords: [
            __( 'Banner', 'gutenbergblocks' ),
            __( 'Call to Action', 'gutenbergblocks' ),
            __( 'Message', 'gutenbergblocks' ),
        ],
        attributes: {
            message: {
                type: 'array',
                source: 'children',
                selector: '.message-body',
            }
        },
        edit: props => {
            const { attributes: { message }, className, setAttributes } = props;
            const onChangeMessage = message => { {
                setAttributes( { message } )} };
            return (
                <div className={ className }>
                    <h2>{ __( 'Call to Action', 'gutenbergblocks' ) }</h2>
                    <RichText
                        tagName="div"
                        multiline="p"
                        placeholder={ __( 'Add your custom message', 'gutenbergblocks' ) }
                  		onChange={ onChangeMessage }
                  		value={ message }
                        inlineToolbar
              		/>
                </div>
            );
        },
        save: props => {
            const { attributes: { message } } = props;
            return (
                <div>
                    <h2>{ __( 'Call to Action', 'gutenbergblocks' ) }</h2>
                    <div class="message-body">
                        { message }
                    </div>
                </div>
            );
        },
    },
);
