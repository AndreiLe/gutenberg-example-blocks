/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, PanelColorSettings, RichText, AlignmentToolbar } = wp.editor;
const {
  CheckboxControl,
  PanelBody,
  PanelRow,
  RadioControl,
  RangeControl,
  TextControl,
  TextareaControl,
  ToggleControl,
  SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        checkboxControl,
        colorPaletteControl,
        radioControl,
        rangeControl,
        textControl,
        textareaControl,
        richtextControl,
        alignment,
        toggleControl,
        selectControl
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody
          title={__("Panel Body Title", "gutenbergblocks")}
          initialOpen={false}
        >
          <PanelRow>
            <p>{__("Panel Body Copy", "gutenbergblocks")}</p>
          </PanelRow>
        </PanelBody>

        <PanelBody>
          <CheckboxControl
            heading={__("Checkbox Control", "gutenbergblocks")}
            label={__("Check here", "gutenbergblocks")}
            help={__("Checkbox control help text", "gutenbergblocks")}
            checked={checkboxControl}
            onChange={checkboxControl => setAttributes({ checkboxControl })}
          />
        </PanelBody>

        <PanelColorSettings
          title={__("Color Panel", "gutenbergblocks")}
          colorSettings={[
            {
              label: __("Color Picker"),
              value: colorPaletteControl,
              onChange: colorPaletteControl => {
                setAttributes({ colorPaletteControl });
              }
            }
          ]}
        />

        <PanelBody>
          <RadioControl
            label={__("Radio Control", "gutenbergblocks")}
            selected={radioControl}
            options={[
              { label: "Author1", value: "a" },
              { label: "Editor2", value: "e" }
            ]}
            onChange={radioControl => setAttributes({ radioControl })}
          />
        </PanelBody>

        <PanelBody>
          <RangeControl
            beforeIcon="arrow-left-alt2"
            afterIcon="arrow-right-alt2"
            label={__("Range Control", "gutenbergblocks")}
            value={rangeControl}
            onChange={rangeControl => setAttributes({ rangeControl })}
            min={1}
            max={10}
          />
        </PanelBody>

        <PanelBody>
          <TextControl
            label={__("Text Control", "gutenbergblocks")}
            help={__("Text control help text", "gutenbergblocks")}
            value={textControl}
            onChange={textControl => setAttributes({ textControl })}
          />
        </PanelBody>

        <PanelBody>
          <TextareaControl
            label={__("Text Area Control", "gutenbergblocks")}
            help={__("Text area control help text", "gutenbergblocks")}
            value={textareaControl}
            onChange={textareaControl => setAttributes({ textareaControl })}
          />
        </PanelBody>


        <PanelBody
            title="RichtextControl Settings"
            initialOpen={ false }
        >

          
                            <AlignmentToolbar
                                value={ alignment }
                                onChange={ newAlignment => {
                            setAttributes( { alignment: newAlignment } )}
                        }
                            />
          <RichText
            label={__("Rich text Control", "gutenbergblocks")}
            help={__("Rich text control help text", "gutenbergblocks")}
            value={richtextControl}
            onChange={richtextControl => setAttributes({ richtextControl })}
          />
          
        </PanelBody>

        <PanelBody>
          <ToggleControl
            label={__("Toggle Control", "gutenbergblocks")}
            checked={toggleControl}
            onChange={toggleControl => setAttributes({ toggleControl })}
          />
        </PanelBody>

        <PanelBody>
          <SelectControl
            label={__("Select Control", "gutenbergblocks")}
            value={selectControl}
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
              { value: "c", label: "Option C" }
            ]}
            onChange={selectControl => setAttributes({ selectControl })}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
