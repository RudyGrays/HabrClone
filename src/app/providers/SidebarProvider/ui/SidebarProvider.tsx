import {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  createContext,
  useState,
} from "react";

export interface SidebarContextProps {
  isSidebarOpen?: boolean;
  openSidebarHandler?: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({});

export const SidebarProvider: FC<PropsWithChildren<{}>> = ({
  children,
}: {
  children: ReactNode | ReactElement;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebarHandler = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, openSidebarHandler }}>
      <>{children}</>
    </SidebarContext.Provider>
  );
};
