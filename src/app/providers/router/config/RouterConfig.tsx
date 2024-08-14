import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { MessagesPage } from 'pages/MessagesPage'
import { RouteProps } from 'react-router-dom'


export const enum Routes{
	MAIN = 'main',
	ABOUT = 'about',
	MESSAGES = 'messages'
}

export const RoutePaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
	[Routes.MESSAGES]: '/messages',
}


export const RouterConfig: Record<Routes, RouteProps> = {
	[Routes.MAIN]: {
		element: <MainPage />,
		path: RoutePaths.main,
		
	},
	[Routes.ABOUT]: {
		element: <AboutPage />,
		path: RoutePaths.about,
		
	},
	[Routes.MESSAGES]: {
		element: <MessagesPage />,
		path: RoutePaths.messages,
		
	},
}
