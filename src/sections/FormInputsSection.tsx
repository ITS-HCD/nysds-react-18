import {
  NysTextInputComponent,
  NysTextareaComponent,
  NysSelectComponent,
  NysOptionComponent,
  NysDatepickerComponent,
  NysFileinputComponent,
  NysTooltipComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const FormInputsSection = () => (
  <section id="forms">
    <h2 className="section-heading">Form Inputs</h2>
    <div className="component-grid">
      <NysTextInputComponent
        id="fullname-input"
        name="fullName"
        label="Full name"
        description="Enter your full legal name"
        required
        width="lg"
      />
      <NysTooltipComponent
        for="fullname-input"
        text="This should match your government-issued ID."
      />

      <NysTextInputComponent
        name="email"
        label="Email address"
        type="email"
        width="lg"
      />

      <NysTextInputComponent
        name="phone"
        label="Phone number"
        type="tel"
        width="md"
      />

      <NysTextareaComponent
        name="comments"
        label="Additional comments"
        description="Provide any relevant details"
        rows={4}
      />

      <NysSelectComponent
        name="region"
        label="Select a region"
        id="region-select"
      >
        <option value="">-- Choose --</option>
        <option value="capital">Capital Region</option>
        <option value="western">Western NY</option>
        <option value="hudson">Hudson Valley</option>
        <option value="nyc">New York City</option>
        <option value="long-island">Long Island</option>
      </NysSelectComponent>

      <NysSelectComponent
        name="county"
        label="Select a county"
        id="county-select"
      >
        <NysOptionComponent value="albany" label="Albany" />
        <NysOptionComponent value="erie" label="Erie" />
        <NysOptionComponent value="kings" label="Kings" />
        <NysOptionComponent value="monroe" label="Monroe" />
        <NysOptionComponent value="onondaga" label="Onondaga" />
      </NysSelectComponent>

      <NysDatepickerComponent
        name="eventDate"
        label="Event date"
        description="Choose a preferred date"
        width="md"
      />

      <NysFileinputComponent
        name="documents"
        label="Upload documents"
        description="Accepted formats: .pdf, .jpg, .png"
        accept=".pdf,.jpg,.png"
        multiple
        dropzone
      />
    </div>
    <NysDividerComponent />
  </section>
);

export default FormInputsSection;
