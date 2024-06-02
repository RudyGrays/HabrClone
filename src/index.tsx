import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


render(
	<ThemeProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root')
)