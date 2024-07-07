import App from 'app/App'
import { SidebarProvider } from 'app/providers/SidebarProvider/ui/SidebarProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


render(
	<ThemeProvider>
		<SidebarProvider>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</SidebarProvider>
	</ThemeProvider>,
	document.getElementById('root')
)