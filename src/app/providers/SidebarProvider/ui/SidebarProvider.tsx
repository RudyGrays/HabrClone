import {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  createContext,
  useMemo,
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
  const [isSidebarOpenState, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebarHandler = () => {
    setIsSidebarOpen(prev => !prev);
  };
  const isSidebarOpen = useMemo(() => {
    return isSidebarOpenState;
  }, [isSidebarOpenState]);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, openSidebarHandler }}>
      <>{children}</>
    </SidebarContext.Provider>
  );
};
