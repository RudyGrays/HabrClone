

import { RouterConfig } from 'app/providers/router/config/RouterConfig'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const AppRouter = () => {
	
	return (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Routes>
      {Object.values(RouterConfig).map(({element, path}) => <Route key={path} element={element} path={path}/>)}
    </Routes>
  </Suspense>
	)
}

export default AppRouter
