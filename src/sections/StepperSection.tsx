import {
  NysStepperComponent,
  NysStepComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const StepperSection = () => (
  <section id="stepper">
    <h2 className="section-heading">Stepper</h2>
    <NysStepperComponent label="Application Process">
      <NysStepComponent label="Personal Info" />
      <NysStepComponent label="Documents" current />
      <NysStepComponent label="Review" />
      <NysStepComponent label="Submit" />
    </NysStepperComponent>
    <NysDividerComponent />
  </section>
);

export default StepperSection;
