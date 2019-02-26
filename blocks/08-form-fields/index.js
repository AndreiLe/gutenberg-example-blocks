/**
 * Block dependencies
 */
import classnames from 'classnames';
import Inspector from './inspector';
import Edit from './edit';
import icon from './icon';
import attributes from './attributes';
const { RawHTML } = wp.element;
import './style.scss';


const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    RichText,
    InnerBlocks,
} = wp.editor;

function getSettings(attributes) {
    let settings = [];
    for (let attribute in attributes) {
        let value = attributes[attribute];
        if ('boolean' === typeof attributes[attribute]) {
            value = value.toString();
        }
        settings.push(<li>{attribute}: {value}</li>);
    }
    return settings;
}

/**
 * Register static block example block
 */
export default registerBlockType(
    'gutenbergblocks/form-fields',
    {
        title: __('Example - Form Fields', 'gutenbergblocks'),
        description: __('An example of how to use form component in a block.', 'gutenbergblocks'),
        category: 'my-custom-blocks',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },
        keywords: [
            __('Palette', 'gutenbergblocks'),
            __('Settings', 'gutenbergblocks'),
            __('Scheme', 'gutenbergblocks'),
        ],
        attributes,
        getEditWrapperProps(attributes) {
            const { blockAlignment } = attributes;
            if ('left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment) {
                return { 'data-align': blockAlignment };
            }
        },
        edit: props => {
            const { setAttributes } = props;

            return [
                <Inspector {...{ setAttributes, ...props }} />,
                <Edit {...{ setAttributes, ...props }} />,
            ];
        },
        save: props => {
            const { attributes } = props;

            const settings = getSettings(attributes);

            return (
                <div>
                    <p>{__('Check the settings', 'gutenbergblocks')}</p>
                    <ul>
                        {settings}
                    </ul>
                    <RawHTML>{ attributes.content }</RawHTML>
                    Пример текста 1
                    <InnerBlocks.Content />
                </div>
            );
        },
    },
);
