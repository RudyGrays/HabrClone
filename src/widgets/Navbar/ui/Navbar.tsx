import { FC, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './Navbar.module.scss'



interface NavbarLink {
	to: string
	pathname: string
}
interface NavbarProps {
	otherClasses?: string
	initialLinks: NavbarLink[]
}

const Navbar: FC<NavbarProps> = ({ otherClasses, initialLinks }) => {

	const [links, setLinks] = useState<NavbarLink[]>(initialLinks)
	const { pathname } = useLocation()

	return (
		<ul className={classNames(cls.navbar, {}, [otherClasses])}>
			{links.length === 0 ? 'Некуда переходить'
				:
				links.map((({ to, pathname }) => <li key={to}><NavLink className={classNames(cls.link)} to={to}>{pathname}</NavLink></li>))}
		</ul>
	)
}

export default Navbar
