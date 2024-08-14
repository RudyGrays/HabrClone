import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './Button.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	otherClasses?: string
	onClick: () => void
}

const Button: FC<ButtonProps> = ({otherClasses, onClick, children}) => {
	return (
  <button onClick={onClick} className={classNames(cls.button, {}, [otherClasses])}>
    {children}
  </button>
	)
}

export default Button

