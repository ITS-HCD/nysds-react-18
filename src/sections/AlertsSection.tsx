import {
  NysAlertComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const AlertsSection = () => (
  <section id="alerts">
    <h2 className="section-heading">Alerts</h2>
    <div className="component-grid">
      <NysAlertComponent
        type="info"
        heading="Information"
        text="This is an informational alert for general guidance."
      />
      <NysAlertComponent
        type="success"
        heading="Success"
        text="Your application has been submitted successfully."
      />
      <NysAlertComponent
        type="warning"
        heading="Warning"
        text="Please review your information before proceeding."
      />
      <NysAlertComponent
        type="danger"
        heading="Error"
        text="There was a problem processing your request."
      />
    </div>
    <NysDividerComponent />
  </section>
);

export default AlertsSection;
