import { useTheme } from 'app/providers/ThemeProvider'
import { memo, Suspense } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { FlexContainer } from 'shared/ui/FlexContainer'
import { Content } from 'widgets/Content'
import { Header } from 'widgets/Header'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useSidebar } from './providers/SidebarProvider/hooks/useSidebar'
import { AppRouter } from './providers/router'

const App = memo(() => 
	{
		const {theme} = useTheme()
		const {isSidebarOpen, openSidebarHandler} = useSidebar()
		
		return (
  <div className={classNames('app', {}, [theme])}>
    <Suspense fallback={'Загрузка...'}>
      <Header/>
      <FlexContainer styleProps={{flexDirection: 'row'}}>
        <Sidebar> 
          <FlexContainer styleProps={{flexDirection: isSidebarOpen ? 'row' : 'column', height: '100%', width: '100%', alignItems: isSidebarOpen ? 'flex-end' : 'center', justifyContent: isSidebarOpen ? 'center' : 'end', gap: '10px'}}>
            <LangSwitcher /> 
            <button onClick={() => openSidebarHandler()}>{isSidebarOpen ? '<-'  : '->'}</button>
            <ThemeSwitcher/>
          </FlexContainer> 
        </Sidebar>
        <Content> 
          <AppRouter/>
        </Content>
      </FlexContainer>
    </Suspense>
  </div>
		)
	})  

export default App


