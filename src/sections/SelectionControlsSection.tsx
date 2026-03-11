import {
  NysCheckbox,
  NysCheckboxgroup,
  NysRadiobutton,
  NysRadiogroup,
  NysToggle,
  NysDivider,
} from "@nysds/components/react";

const SelectionControlsSection = () => (
  <section id="selection-controls">
    <h2 className="section-heading">Selection Controls</h2>
    <div className="component-grid">
      <NysCheckbox
        label="I agree to the terms of service"
        name="terms"
        value="agreed"
      />

      <NysCheckboxgroup
        label="Favorite NY landmarks"
        description="Select all that apply"
      >
        <NysCheckbox
          name="landmarks"
          label="Adirondack Mountains"
          value="adirondacks"
        />
        <NysCheckbox
          name="landmarks"
          label="Niagara Falls"
          value="niagara"
        />
        <NysCheckbox
          name="landmarks"
          label="Statue of Liberty"
          value="liberty"
        />
        <NysCheckbox
          name="landmarks"
          label="Central Park"
          value="centralpark"
        />
      </NysCheckboxgroup>

      <NysRadiogroup
        label="Preferred contact method"
        description="Choose one"
        name="contact"
      >
        <NysRadiobutton
          name="contact"
          label="Email"
          value="email"
        />
        <NysRadiobutton
          name="contact"
          label="Phone"
          value="phone"
        />
        <NysRadiobutton
          name="contact"
          label="Mail"
          value="mail"
        />
      </NysRadiogroup>

      <NysToggle
        label="Enable email notifications"
        name="notifications"
        value="on"
      />
    </div>
    <NysDivider />
  </section>
);

export default SelectionControlsSection;
