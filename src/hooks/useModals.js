import { useCallback, useMemo, useState } from "react";
import { MODALS } from "../constants";

export const useModals = () => {
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const modals = useMemo(
    () => ({
      [MODALS.GAMEOVER]: setIsGameOverModalOpen,
      [MODALS.INFO]: setIsInfoModalOpen,
      [MODALS.SETTINGS]: setIsSettingsModalOpen,
    }),
    []
  );

  const closeRemainingModals = useCallback(
    (openModal) => {
      Object.entries(modals).forEach(([modalKey, modalSetter]) => {
        if (modalKey !== openModal) {
          modalSetter(false);
        }
      });
    },
    [modals]
  );

  const toggleModal = useCallback(
    (modal, open) => {
      if (typeof open !== "boolean") {
        return;
      }

      modals[modal]?.(open);
      closeRemainingModals(modal);
    },
    [modals, closeRemainingModals]
  );

  return useMemo(
    () => ({
      modalsState: {
        isGameOverModalOpen,
        isInfoModalOpen,
        isSettingsModalOpen,
      },
      toggleModal,
    }),
    [isGameOverModalOpen, isInfoModalOpen, isSettingsModalOpen, toggleModal]
  );
};
