import {
  NysTextinput,
  NysTextarea,
  NysSelect,
  NysOption,
  NysDatepicker,
  NysFileinput,
  NysTooltip,
  NysDivider,
} from "@nysds/components/react";

const FormInputsSection = () => (
  <section id="forms">
    <h2 className="section-heading">Form Inputs</h2>
    <div className="component-grid">
      <NysTextinput
        id="fullname-input"
        name="fullName"
        label="Full name"
        description="Enter your full legal name"
        required
        width="lg"
      />
      <NysTooltip
        for="fullname-input"
        text="This should match your government-issued ID."
      />

      <NysTextinput
        name="email"
        label="Email address"
        type="email"
        width="lg"
      />

      <NysTextinput
        name="phone"
        label="Phone number"
        type="tel"
        width="md"
      />

      <NysTextarea
        name="comments"
        label="Additional comments"
        description="Provide any relevant details"
        rows={4}
      />

      <NysSelect
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
      </NysSelect>

      <NysSelect
        name="county"
        label="Select a county"
        id="county-select"
      >
        <NysOption value="albany" label="Albany" />
        <NysOption value="erie" label="Erie" />
        <NysOption value="kings" label="Kings" />
        <NysOption value="monroe" label="Monroe" />
        <NysOption value="onondaga" label="Onondaga" />
      </NysSelect>

      <NysDatepicker
        name="eventDate"
        label="Event date"
        description="Choose a preferred date"
        width="md"
      />

      <NysFileinput
        name="documents"
        label="Upload documents"
        description="Accepted formats: .pdf, .jpg, .png"
        accept=".pdf,.jpg,.png"
        multiple
        dropzone
      />
    </div>
    <NysDivider />
  </section>
);

export default FormInputsSection;
