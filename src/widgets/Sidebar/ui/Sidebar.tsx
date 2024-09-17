import { useSidebar } from "app/providers/SidebarProvider/hooks/useSidebar";
import { FC, memo, PropsWithChildren } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import mainClasses from "./Sidebar.module.scss";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import SidebarSwitcher from "./SidebarSwitcher/ui/SidebarSwitcher";
import { Navbar } from "widgets/Navbar";

interface SidebarProps {
  someClasses?: string;
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = memo(({ someClasses }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      data-testid="sidebar_test"
      className={classNames(
        mainClasses.Sidebar,
        { [mainClasses.open]: isSidebarOpen },
        [someClasses],
      )}
    >
      <Navbar short={isSidebarOpen} />
      <span className={mainClasses.switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </span>
      <span className={mainClasses.toggleButton}>
        <SidebarSwitcher />
      </span>
    </div>
  );
});

export default Sidebar;
