import { use } from "react";
import { create } from "zustand";

interface RendModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRentModal = create<RendModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;

// // useRentModal jest eksportowany jako domyślny eksport z tego modułu i może być importowany i używany w innych plikach.
// Funkcje onOpen i onClose w useRentModal służą do manipulowania stanem isOpen. Wywołanie onOpen() ustawia wartość isOpen na true, podczas gdy wywołanie onClose() ustawia wartość isOpen na false. Te funkcje mogą być wywoływane w komponentach, które używają useRentModal, aby otworzyć lub zamknąć modal.


