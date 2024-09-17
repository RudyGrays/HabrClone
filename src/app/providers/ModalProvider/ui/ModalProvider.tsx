import { createContext, FC, useState, PropsWithChildren } from "react";

export interface ModalContextProps {
  isModalOpen?: boolean;
  toggleModalHandler?: (value?: boolean) => void;
  modalId?: string;
  setId?: (id: string) => void;
  closeModal?: () => void;
}

export const ModalContext = createContext<ModalContextProps>({});

export const ModalProvider: FC<PropsWithChildren<ModalContextProps>> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");

  const setId = (id: string) => {
    setModalId(id);
  };

  const toggleModalHandler = (value?: boolean) => {
    if (value) {
      return setIsModalOpen(value);
    }
    return setIsModalOpen(prev => !prev);
  };

  const closeModal = () => {
    return setIsModalOpen(false);
  };
  const memoizedValue = {
    toggleModalHandler,
    isModalOpen,
    setId,
    modalId,
    closeModal,
  };

  return (
    <ModalContext.Provider value={memoizedValue}>
      <>{children}</>
    </ModalContext.Provider>
  );
};
