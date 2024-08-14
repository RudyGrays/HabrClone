import { FC, createContext, useState } from 'react'


export interface SidebarContextProps {
	isSidebarOpen?: boolean 
	openSidebarHandler?: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({})



export const SidebarProvider: FC = ({children}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

	const openSidebarHandler = () => {
		setIsSidebarOpen(prev => !prev)
	}
	
	return <SidebarContext.Provider value={{isSidebarOpen, openSidebarHandler}}>
  {children}
	</SidebarContext.Provider>
}