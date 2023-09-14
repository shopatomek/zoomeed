"use client";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

const RendModal = () => {
  const rentModal = useRentModal();

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Airnbnb your home"
    />
  );
};

export default RendModal;
