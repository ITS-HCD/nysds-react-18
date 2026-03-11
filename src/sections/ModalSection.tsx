import { useRef } from "react";
import {
  NysButton,
  NysModal,
  NysDivider,
} from "@nysds/components/react";

const ModalSection = () => {
  const modalRef = useRef< {open: Boolean} | null >(null);

  const openModal = () => {
    if (modalRef.current) modalRef.current.open = true;
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.open = false;
  };

  return (
    <section id="modal">
      <h2 className="section-heading">Modal</h2>
      <NysButton label="Open Modal" onNysClick={openModal} />
      <NysModal
        ref={modalRef}
        heading="Update Available"
        subheading="Version 2.0 is ready to install"
      >
        <p>
          A new version of the application is available. Would you like to
          update now? Your current session will be saved.
        </p>
        <div slot="actions">
          <NysButton
            label="Not now"
            variant="outline"
            onNysClick={closeModal}
          />
          <NysButton label="Update" onNysClick={closeModal} />
        </div>
      </NysModal>
      <NysDivider />
    </section>
  );
};

export default ModalSection;
