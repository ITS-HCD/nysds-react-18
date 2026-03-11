import {
  NysBadge,
  NysDivider,
} from "@nysds/components/react";

const BadgesSection = () => (
  <section id="badges">
    <h2 className="section-heading">Badges</h2>
    <div className="component-row">
      <NysBadge label="Neutral" intent="neutral" />
      <NysBadge label="Success" intent="success" prefixIcon />
      <NysBadge label="Warning" intent="warning" prefixIcon />
      <NysBadge label="Error" intent="error" prefixIcon />
    </div>
    <h3>Strong Variant</h3>
    <div className="component-row">
      <NysBadge
        label="Approved"
        intent="success"
        variant="strong"
        prefixIcon
      />
      <NysBadge
        label="Pending"
        intent="warning"
        variant="strong"
        prefixIcon
      />
      <NysBadge
        label="Rejected"
        intent="error"
        variant="strong"
        prefixIcon
      />
    </div>
    <NysDivider />
  </section>
);

export default BadgesSection;
