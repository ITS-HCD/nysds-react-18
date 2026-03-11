import {
  NysStepper,
  NysStep,
  NysDivider,
} from "@nysds/components/react";

const StepperSection = () => (
  <section id="stepper">
    <h2 className="section-heading">Stepper</h2>
    <NysStepper label="Application Process">
      <NysStep label="Personal Info" />
      <NysStep label="Documents" current />
      <NysStep label="Review" />
      <NysStep label="Submit" />
    </NysStepper>
    <NysDivider />
  </section>
);

export default StepperSection;
