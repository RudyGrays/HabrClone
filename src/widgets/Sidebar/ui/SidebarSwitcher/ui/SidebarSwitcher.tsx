import { FC } from "react";
import { useSidebar } from "app/providers/SidebarProvider/hooks/useSidebar";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./SidebarSwitcher.module.scss";
interface SidebarSwitcherProps {
  otherClasses?: string;
}

const SidebarSwitcher: FC<SidebarSwitcherProps> = ({ otherClasses }) => {
  const { isSidebarOpen, openSidebarHandler } = useSidebar();

  return (
    <button
      className={classNames(mainClasses.SidebarSwitcher, {}, [otherClasses])}
      data-testId="toggle_sidebar"
      onClick={() => openSidebarHandler()}
    >
      {isSidebarOpen ? "<-" : "->"}
    </button>
  );
};

export default SidebarSwitcher;
