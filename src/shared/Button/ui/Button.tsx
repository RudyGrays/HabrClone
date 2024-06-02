import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './Button.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	otherClasses?: string
}

const Button: FC<ButtonProps> = ({otherClasses, children}) => {
	return (
		<button className={classNames(cls.button, {}, [otherClasses])}>
			{children}
		</button>
	)
}

export default Button

