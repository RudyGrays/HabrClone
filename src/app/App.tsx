import { useTheme } from "app/providers/ThemeProvider";
import { memo, Suspense, useEffect } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { FlexContainer } from "shared/ui/FlexContainer";
import { Content } from "widgets/Content";
import { Header } from "widgets/Header";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Sidebar } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useSidebar } from "./providers/SidebarProvider/hooks/useSidebar";
import { AppRouter } from "./providers/router";
import { Loader } from "shared/ui/Loader";
import SidebarSwitcher from "widgets/Sidebar/ui/SidebarSwitcher/ui/SidebarSwitcher";
import { Modal, ToggleModalButton } from "widgets/Modal";
import useMyTranslation from "shared/helpers/hooks/useTranslation/useTranslation";
import { useModal } from "./providers/ModalProvider";
import { Counter } from "entities/Counter";
const App = memo(() => {
  const { theme } = useTheme();

  useEffect(() => {
    const b = document.body;
    b.classList.add("app");
    b.classList.remove("dark");
    b.classList.remove("light");
    b.classList.add(theme);
  }, [theme]);

  const { isSidebarOpen } = useSidebar();
  const { t } = useMyTranslation();

  const { isModalOpen, toggleModalHandler } = useModal();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Modal id="mainModal">
          <Counter />
        </Modal>
        <Modal id="testModal">testModal</Modal>
        <Header />
        <FlexContainer styleProps={{ flexDirection: "row" }}>
          <Sidebar>
            <FlexContainer
              styleProps={{
                flexDirection: isSidebarOpen ? "row" : "column",
                height: "100%",
                width: "100%",
                alignItems: isSidebarOpen ? "flex-end" : "center",
                justifyContent: isSidebarOpen ? "center" : "end",
                gap: "10px",
              }}
            >
              <ToggleModalButton id="testModal">testModal</ToggleModalButton>
              <LangSwitcher />
              <ThemeSwitcher />
              <SidebarSwitcher />
            </FlexContainer>
          </Sidebar>
          <Content>
            <AppRouter />
          </Content>
        </FlexContainer>
      </Suspense>
    </div>
  );
});

export default App;
