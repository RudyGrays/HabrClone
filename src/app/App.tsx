import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { Header } from 'widgets/Header'
import { AppRouter } from './providers/router'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Header/>
			<AppRouter/>
		</div>
	)
}

export default App


