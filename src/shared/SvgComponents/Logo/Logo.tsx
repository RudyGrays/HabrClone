import { FC } from 'react'
import Logoicon from 'shared/assets/icons/logo.svg'
import { classNames } from 'shared/lib/ClassNames/classNames'


interface LogoProps{
	someClasses?: string
	props?: any
	height?: number
	width?: number
}

const Logo: FC<LogoProps> = ({children, someClasses, ...props}) => {
	return <Logoicon className={classNames('', {}, [someClasses])} {...props} />
}

export default Logo