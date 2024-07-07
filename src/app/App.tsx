import { useTheme } from 'app/providers/ThemeProvider'
import { memo } from 'react'
import { FlexContainer } from 'shared/FlexContainer'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { Content } from 'widgets/Content'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useSidebar } from './providers/SidebarProvider/hooks/useSidebar'
import { AppRouter } from './providers/router'

const App = memo(() => 
	{
		const {theme, toggleTheme} = useTheme()
		console.log('render')
		const {isSidebarOpen, openSidebarHandler} = useSidebar()
	
		return (
			<div className={classNames('app', {}, [theme])}>
				<Header/>
					<FlexContainer styleProps={{flexDirection: 'row'}}>
						<Sidebar> 
							<FlexContainer styleProps={{flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center'}}>
								<button onClick={() => openSidebarHandler()}>{isSidebarOpen ? '<-'  : '->'}</button>
								<ThemeSwitcher/>
								
							</FlexContainer> 
						</Sidebar>
						<Content> 
							<AppRouter/>
						</Content>
					</FlexContainer>
			</div>
		)
	})  

export default App


