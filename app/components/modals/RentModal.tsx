"use client";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

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

// w JavaScript, enum (wyliczenie) jest strukturą danych, która pozwala na zdefiniowanie zestawu nazwanych wartości, które są powiązane z określonymi liczbami lub innymi wartościami. Enumy są przydatne, gdy chcemy nadać nazwy i wartości symboliczne zestawowi powiązanych wartości.
