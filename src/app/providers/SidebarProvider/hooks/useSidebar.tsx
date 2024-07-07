import { useContext } from 'react'
import { SidebarContext } from '../ui/SidebarProvider'


export const useSidebar = () =>{
	return useContext(SidebarContext)
}