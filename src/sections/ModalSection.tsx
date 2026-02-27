import { useRef } from "react";
import { NysModal } from "@nysds/components";
import {
  NysButtonComponent,
  NysModalComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const ModalSection = () => {
  const modalRef = useRef<NysModal>(null);

  const openModal = () => {
    if (modalRef.current) modalRef.current.open = true;
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.open = false;
  };

  return (
    <section id="modal">
      <h2 className="section-heading">Modal</h2>
      <NysButtonComponent label="Open Modal" onNysClick={openModal} />
      <NysModalComponent
        ref={modalRef}
        heading="Update Available"
        subheading="Version 2.0 is ready to install"
      >
        <p>
          A new version of the application is available. Would you like to
          update now? Your current session will be saved.
        </p>
        <div slot="actions">
          <NysButtonComponent
            label="Not now"
            variant="outline"
            onNysClick={closeModal}
          />
          <NysButtonComponent label="Update" onNysClick={closeModal} />
        </div>
      </NysModalComponent>
      <NysDividerComponent />
    </section>
  );
};

export default ModalSection;
