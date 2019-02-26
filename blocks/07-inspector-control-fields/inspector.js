/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  ColorPalette,
  PanelColorSettings,
  ContrastChecker
} = wp.editor;

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
        colorPaletteControl2,
        radioControl,
        rangeControl,
        textControl,
        textareaControl,
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
          title={__("Color Settings", "gutenbergblocks")}
          colorSettings={[
            {
              value: colorPaletteControl,
              onChange: colorPaletteControl => {
                setAttributes({ colorPaletteControl });
              },
              label: __("Background Color")
            }
          ]}
        />

        <PanelBody>
          <h3>{__("Color Settings 2", "gutenbergblocks")}</h3>
          <ColorPalette
            value={colorPaletteControl2}
            onChange={colorPaletteControl2 => {
              setAttributes({ colorPaletteControl2 });
            }}
          />
          <ContrastChecker
            {...{
              // Text is considered large if font size is greater or equal to 18pt or 24px,
              // currently that's not the case for button.
              isLargeText: false,
              textColor: colorPaletteControl2,
              backgroundColor: colorPaletteControl
            }}
          />
        </PanelBody>
        <PanelBody>
          <RadioControl
            label={__("Radio Control", "gutenbergblocks")}
            selected={radioControl}
            options={[
              { label: "Author", value: "a" },
              { label: "Editor", value: "e" }
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
              { value: "a", label: __("Option A", "gutenbergblocks") },
              { value: "b", label: __("Option B", "gutenbergblocks") },
              { value: "c", label: __("Option C", "gutenbergblocks") }
            ]}
            onChange={selectControl => setAttributes({ selectControl })}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
