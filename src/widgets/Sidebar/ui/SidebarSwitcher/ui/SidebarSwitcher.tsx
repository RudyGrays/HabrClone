import { FC, memo } from "react";
import { useSidebar } from "app/providers/SidebarProvider/hooks/useSidebar";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./SidebarSwitcher.module.scss";
import { circleLeft } from "react-icons-kit/icomoon/circleLeft";
import { circleRight } from "react-icons-kit/icomoon/circleRight";
import Icon from "react-icons-kit";
interface SidebarSwitcherProps {
  otherClasses?: string;
}

const SidebarSwitcher: FC<SidebarSwitcherProps> = memo(({ otherClasses }) => {
  const { isSidebarOpen, openSidebarHandler } = useSidebar();

  return (
    <button
      className={classNames(mainClasses.SidebarSwitcher, {}, [otherClasses])}
      data-testid="toggle_sidebar"
      onClick={() => openSidebarHandler()}
    >
      {isSidebarOpen ? <Icon icon={circleLeft} /> : <Icon icon={circleRight} />}
    </button>
  );
});

export default SidebarSwitcher;
