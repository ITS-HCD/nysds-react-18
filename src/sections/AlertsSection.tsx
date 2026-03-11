import {
  NysAlert,
  NysDivider,
} from "@nysds/components/react";

const AlertsSection = () => (
  <section id="alerts">
    <h2 className="section-heading">Alerts</h2>
    <div className="component-grid">
      <NysAlert
        type="info"
        heading="Information"
        text="This is an informational alert for general guidance."
      />
      <NysAlert
        type="success"
        heading="Success"
        text="Your application has been submitted successfully."
      />
      <NysAlert
        type="warning"
        heading="Warning"
        text="Please review your information before proceeding."
      />
      <NysAlert
        type="danger"
        heading="Error"
        text="There was a problem processing your request."
      />
    </div>
    <NysDivider />
  </section>
);

export default AlertsSection;
