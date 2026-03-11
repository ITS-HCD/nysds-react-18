import {
  NysButton,
  NysDivider,
} from "@nysds/components/react";

const ButtonsSection = () => (
  <section id="buttons">
    <h2 className="section-heading">Buttons</h2>
    <h3>Variants</h3>
    <div className="component-row">
      <NysButton label="Filled" variant="filled" />
      <NysButton label="Outline" variant="outline" />
      <NysButton label="Ghost" variant="ghost" />
      <NysButton label="Text" variant="text" />
    </div>
    <h3>Sizes</h3>
    <div className="component-row">
      <NysButton label="Small" size="sm" />
      <NysButton label="Medium" size="md" />
      <NysButton label="Large" size="lg" />
    </div>
    <h3>With Icons & States</h3>
    <div className="component-row">
      <NysButton label="Add Item" prefixIcon="add" />
      <NysButton label="Download" prefixIcon="download" variant="outline" />
      <NysButton label="Disabled" disabled />
    </div>
    <NysButton label="Full Width Button" fullWidth variant="outline" />
    <NysDivider />
  </section>
);

export default ButtonsSection;
