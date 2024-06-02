import { useContext } from 'react'
import { ThemeContext } from '../ui/ThemeContext'


const useTheme = () => {
	return useContext(ThemeContext)
}

export { useTheme }

