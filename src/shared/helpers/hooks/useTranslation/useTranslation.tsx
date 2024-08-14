import { useTranslation } from 'react-i18next'

const useMyTranslation = () => {

	const {t, i18n} = useTranslation()
	const changeLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	const currentLang = i18n.language == 'ru' ? 'ru' : 'en'
	
	return {
		t,
		i18n,
		changeLanguage,
		currentLang
	}
}

export default useMyTranslation