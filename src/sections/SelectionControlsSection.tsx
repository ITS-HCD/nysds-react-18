import {
  NysCheckboxComponent,
  NysCheckboxgroupComponent,
  NysRadiobuttonComponent,
  NysRadioGroupComponent,
  NysToggleComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const SelectionControlsSection = () => (
  <section id="selection-controls">
    <h2 className="section-heading">Selection Controls</h2>
    <div className="component-grid">
      <NysCheckboxComponent
        label="I agree to the terms of service"
        name="terms"
        value="agreed"
      />

      <NysCheckboxgroupComponent
        label="Favorite NY landmarks"
        description="Select all that apply"
      >
        <NysCheckboxComponent
          name="landmarks"
          label="Adirondack Mountains"
          value="adirondacks"
        />
        <NysCheckboxComponent
          name="landmarks"
          label="Niagara Falls"
          value="niagara"
        />
        <NysCheckboxComponent
          name="landmarks"
          label="Statue of Liberty"
          value="liberty"
        />
        <NysCheckboxComponent
          name="landmarks"
          label="Central Park"
          value="centralpark"
        />
      </NysCheckboxgroupComponent>

      <NysRadioGroupComponent
        label="Preferred contact method"
        description="Choose one"
        name="contact"
      >
        <NysRadiobuttonComponent
          name="contact"
          label="Email"
          value="email"
        />
        <NysRadiobuttonComponent
          name="contact"
          label="Phone"
          value="phone"
        />
        <NysRadiobuttonComponent
          name="contact"
          label="Mail"
          value="mail"
        />
      </NysRadioGroupComponent>

      <NysToggleComponent
        label="Enable email notifications"
        name="notifications"
        value="on"
      />
    </div>
    <NysDividerComponent />
  </section>
);

export default SelectionControlsSection;
