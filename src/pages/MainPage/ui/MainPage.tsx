import { useTranslation } from 'react-i18next'

const MainPage = () => {

	const {t} = useTranslation()

	

	return (
  <div>
    {t('тестовый текст')}
  </div>
	)
}

export default MainPage

