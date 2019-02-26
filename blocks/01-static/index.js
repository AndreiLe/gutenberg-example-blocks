/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'gutenbergblocks/static',
    {
        title: __( 'Example - Static Block', 'gutenbergblocks' ),
        description: __( 'Demonstration of how to make a static call to action block.', 'gutenbergblocks' ),
        category: 'my-custom-blocks',
        icon: {
          background: 'rgba(254, 243, 224, 0.52)',
          src: icon,
        },        
        keywords: [
            __( 'Banner', 'gutenbergblocks' ),
            __( 'CTA', 'gutenbergblocks' ),
            __( 'Shout Out', 'gutenbergblocks' ),
        ],
        edit: props => {
          const { className, isSelected } = props;
          return (
            <div className={ className }>
              <h2>{ __( 'Static Call to Action', 'gutenbergblocks' ) }</h2>
              <p>{ __( 'This is really important!', 'gutenbergblocks' ) }</p>
              {
                isSelected && (
                  <p className="sorry warning">{ __( '✋ Sorry! You cannot edit this block ✋', 'gutenbergblocks' ) }</p>
                )
              }
            </div>
          );
        },
        save: props => {
          return (
            <div>
              <h2>{ __( 'Call to Action', 'gutenbergblocks' ) }</h2>
              <p>{ __( 'This is really important!', 'gutenbergblocks' ) }</p>
            </div>
          );
        },
    },
);
