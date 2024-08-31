import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: ReactNode;
  node?: Element | DocumentFragment;
}

const Portal: FC<PortalProps> = ({ children, node = document.body }) => {
  return createPortal(children, node) as ReactNode;
};

export default Portal;
