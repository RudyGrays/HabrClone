import { FC } from 'react'
import { CustomLink } from 'shared/CustomLink'
import { Logo } from 'shared/SvgComponents'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { Navbar } from 'widgets/Navbar'
import mainClasses from './Header.module.scss'
interface HeaderProps{
	someClasses?: string
	props?: any
}

const Header: FC<HeaderProps> = ({children, someClasses, ...props}) => {

	return (
		<div className={classNames(mainClasses.Header, {}, [someClasses])} {...props}>
			<div className={mainClasses.left}>
				<CustomLink to={'/'}>
					<Logo someClasses='white' height={40} width={40} />
				</CustomLink>
				
				
				
			</div>
			<div  className={mainClasses.right}>
				<Navbar initialLinks={[{to: '/', pathname: 'Главная'}, {to: '/about', pathname: 'О нас'}]} otherClasses={classNames('', {}, [])}/>
			</div>
		</div>
	)
}

export default Header