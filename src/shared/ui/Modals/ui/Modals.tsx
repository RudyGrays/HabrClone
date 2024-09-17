import { LoginForm } from "features/AuthByUsername";
import { FC, Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { Modal } from "widgets/Modal";

interface ModalsProps {
  someClasses?: string;
}

const Modals: FC<ModalsProps> = () => {
  return (
    <>
      <Modal id="authModal">
        <Suspense fallback={<Loader />}>
          <LoginForm />
        </Suspense>
      </Modal>
    </>
  );
};

export { Modals };
