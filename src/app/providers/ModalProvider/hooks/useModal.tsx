import { useContext } from "react";
import { ModalContext } from "../ui/ModalProvider";

export const useModal = () => {
  return useContext(ModalContext);
};
