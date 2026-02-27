import {
  NysButtonComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const ButtonsSection = () => (
  <section id="buttons">
    <h2 className="section-heading">Buttons</h2>
    <h3>Variants</h3>
    <div className="component-row">
      <NysButtonComponent label="Filled" variant="filled" />
      <NysButtonComponent label="Outline" variant="outline" />
      <NysButtonComponent label="Ghost" variant="ghost" />
      <NysButtonComponent label="Text" variant="text" />
    </div>
    <h3>Sizes</h3>
    <div className="component-row">
      <NysButtonComponent label="Small" size="sm" />
      <NysButtonComponent label="Medium" size="md" />
      <NysButtonComponent label="Large" size="lg" />
    </div>
    <h3>With Icons & States</h3>
    <div className="component-row">
      <NysButtonComponent label="Add Item" prefixIcon="add" />
      <NysButtonComponent label="Download" prefixIcon="download" variant="outline" />
      <NysButtonComponent label="Disabled" disabled />
    </div>
    <NysButtonComponent label="Full Width Button" fullWidth variant="outline" />
    <NysDividerComponent />
  </section>
);

export default ButtonsSection;
