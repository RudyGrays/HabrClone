import { useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import mainClasses from './Header.module.scss'
interface HeaderProps{
	someClasses?: string
	props?: any
}

const Header: FC<HeaderProps> = ({children, someClasses, ...props}) => {

	const {theme} = useTheme()

	return (
		<div className={classNames(mainClasses.Header, {}, [someClasses])} {...props}>
			<div className={mainClasses.left}>
				<ThemeSwitcher/>
			</div>
			<div  className={mainClasses.right}>
				<Navbar initialLinks={[{to: '/', pathname: 'Главная'}, {to: '/about', pathname: 'О нас'}]} otherClasses={classNames('', {}, [])}/>
			</div>
		</div>
	)
}

export default Header