import { useSidebar } from "app/providers/SidebarProvider/hooks/useSidebar";
import { FC, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Sidebar.module.scss";

interface SidebarProps {
  someClasses?: string;
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({
  children,
  someClasses,
  ...props
}) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      data-testid="sidebar_test"
      className={classNames(
        mainClasses.Sidebar,
        { [mainClasses.open]: isSidebarOpen },
        [someClasses],
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Sidebar;
