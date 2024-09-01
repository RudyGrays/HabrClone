import { LoginForm } from "features/AuthByUsername";
import { FC } from "react";
import { Modal } from "widgets/Modal";

interface ModalsProps {
  someClasses?: string;
}

const Modals: FC<ModalsProps> = () => {
  return (
    <>
      <Modal id="authModal">
        <LoginForm />
      </Modal>
    </>
  );
};

export { Modals };
