import App from 'app/App'
import { SidebarProvider } from 'app/providers/SidebarProvider/ui/SidebarProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

render(
  <ThemeProvider>
    <BrowserRouter>
      <SidebarProvider>
        <App/>
      </SidebarProvider>
    </BrowserRouter>
  </ThemeProvider>,
	document.getElementById('root')
)