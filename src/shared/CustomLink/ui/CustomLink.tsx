import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/ClassNames/classNames'
import mainClasses from './CustomLink.module.scss'

interface CustomLinkProps extends LinkProps{
	someClasses?: string
	props?: any
}

const CustomLink: FC<CustomLinkProps> = ({children, someClasses, ...props}) => {
	return (
		<Link className={classNames(mainClasses.Link, {}, [someClasses])} {...props}>
			{children}
		</Link>
	)
}

export default CustomLink
