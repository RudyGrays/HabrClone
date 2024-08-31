import { useModal } from "app/providers/ModalProvider";
import { FC, ReactNode } from "react";
import { Button } from "shared/ui/Button";

interface ToggleModalButtonProps {
  someClasses?: string;
  id: string;
  children: ReactNode;
  value?: boolean;
}

const ToggleModalButton: FC<ToggleModalButtonProps> = ({
  someClasses,
  id,
  children,
  value,
}) => {
  const { setId, toggleModalHandler } = useModal();

  const toggleModal = (id: string, value?: boolean) => {
    setId(id);
    if (value) {
      return toggleModalHandler(value);
    }
    toggleModalHandler();
  };
  return <Button onClick={() => toggleModal(id, value)}>{children}</Button>;
};

export default ToggleModalButton;
