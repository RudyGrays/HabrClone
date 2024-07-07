import { useSidebar } from 'app/providers/SidebarProvider/hooks/useSidebar'
import { FC } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
import mainClasses from './Sidebar.module.scss'


interface SidebarProps{
	someClasses?: string
	props?: any
}

const Sidebar: FC<SidebarProps> = ({children, someClasses, ...props}) => {
	const {isSidebarOpen, openSidebarHandler} = useSidebar()


	return (
		<div className={classNames(mainClasses.Sidebar, {[mainClasses.open]: isSidebarOpen}, [someClasses])} {...props}>
			{children}
		</div>
	)
}

export default Sidebar