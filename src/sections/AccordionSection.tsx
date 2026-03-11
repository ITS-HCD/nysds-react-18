import {
  NysAccordion,
  NysAccordionItem,
  NysDivider,
} from "@nysds/components/react";

const AccordionSection = () => (
  <section id="accordion">
    <h2 className="section-heading">Accordion</h2>

    <h3>Default</h3>
    <NysAccordion>
      <NysAccordionItem heading="What is NYSDS?">
        <p>
          The New York State Design System (NYSDS) provides reusable, accessible
          components and guidelines for building government digital services.
        </p>
      </NysAccordionItem>
      <NysAccordionItem heading="How do I get started?">
        <p>
          Install <code>@nysds/components</code> and <code>@nysds/styles</code>{" "}
          via npm, then follow the framework-specific integration guide.
        </p>
      </NysAccordionItem>
      <NysAccordionItem heading="Is NYSDS accessible?">
        <p>
          Yes. All components follow WCAG 2.1 AA guidelines and include proper
          ARIA attributes, keyboard navigation, and screen reader support.
        </p>
      </NysAccordionItem>
    </NysAccordion>

    <h3>Single Select, Bordered</h3>
    <NysAccordion singleSelect bordered>
      <NysAccordionItem heading="Section A">
        <p>Only one section can be open at a time in single-select mode.</p>
      </NysAccordionItem>
      <NysAccordionItem heading="Section B">
        <p>Opening this section will automatically close Section A.</p>
      </NysAccordionItem>
      <NysAccordionItem heading="Section C">
        <p>
          The bordered variant adds visual separation between accordion items.
        </p>
      </NysAccordionItem>
    </NysAccordion>
    <NysDivider />
  </section>
);

export default AccordionSection;
