import {
  NysAccordionComponent,
  NysAccordionItemComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const AccordionSection = () => (
  <section id="accordion">
    <h2 className="section-heading">Accordion</h2>

    <h3>Default</h3>
    <NysAccordionComponent>
      <NysAccordionItemComponent heading="What is NYSDS?">
        <p>
          The New York State Design System (NYSDS) provides reusable, accessible
          components and guidelines for building government digital services.
        </p>
      </NysAccordionItemComponent>
      <NysAccordionItemComponent heading="How do I get started?">
        <p>
          Install <code>@nysds/components</code> and <code>@nysds/styles</code>{" "}
          via npm, then follow the framework-specific integration guide.
        </p>
      </NysAccordionItemComponent>
      <NysAccordionItemComponent heading="Is NYSDS accessible?">
        <p>
          Yes. All components follow WCAG 2.1 AA guidelines and include proper
          ARIA attributes, keyboard navigation, and screen reader support.
        </p>
      </NysAccordionItemComponent>
    </NysAccordionComponent>

    <h3>Single Select, Bordered</h3>
    <NysAccordionComponent singleSelect bordered>
      <NysAccordionItemComponent heading="Section A">
        <p>Only one section can be open at a time in single-select mode.</p>
      </NysAccordionItemComponent>
      <NysAccordionItemComponent heading="Section B">
        <p>Opening this section will automatically close Section A.</p>
      </NysAccordionItemComponent>
      <NysAccordionItemComponent heading="Section C">
        <p>
          The bordered variant adds visual separation between accordion items.
        </p>
      </NysAccordionItemComponent>
    </NysAccordionComponent>
    <NysDividerComponent />
  </section>
);

export default AccordionSection;
