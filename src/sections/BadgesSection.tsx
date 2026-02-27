import {
  NysBadgeComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const BadgesSection = () => (
  <section id="badges">
    <h2 className="section-heading">Badges</h2>
    <div className="component-row">
      <NysBadgeComponent label="Neutral" intent="neutral" />
      <NysBadgeComponent label="Success" intent="success" prefixIcon />
      <NysBadgeComponent label="Warning" intent="warning" prefixIcon />
      <NysBadgeComponent label="Error" intent="error" prefixIcon />
    </div>
    <h3>Strong Variant</h3>
    <div className="component-row">
      <NysBadgeComponent
        label="Approved"
        intent="success"
        variant="strong"
        prefixIcon
      />
      <NysBadgeComponent
        label="Pending"
        intent="warning"
        variant="strong"
        prefixIcon
      />
      <NysBadgeComponent
        label="Rejected"
        intent="error"
        variant="strong"
        prefixIcon
      />
    </div>
    <NysDividerComponent />
  </section>
);

export default BadgesSection;
