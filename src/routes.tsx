import { Suspense } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { LayoutPages, MainLayout } from './layout'

import {
	CONTACT_PATH,
	ERROR_PATH,
	MAIN_PATH,
	PRODUCT_PATH,
	WORKS_PATH,
} from './const'

import { Loader } from './components'
import {

	HomeScreen,
	NotFound,

} from './pages'
import ContactScreen from './pages/Contact/Contact'
import WorkScreen from './pages/Work/WorkScreen'
import ProductScreen from './pages/Product/ProductScreen'

const router = createBrowserRouter([
	{
		path: MAIN_PATH,
		element: <MainLayout />,
		errorElement: <Navigate to={ERROR_PATH} replace />,
		children: [
			{
				path: MAIN_PATH,
				element: <HomeScreen />,
		
			},
			{
				path: CONTACT_PATH,
				element: <ContactScreen />,
		
			},
			{
				path: WORKS_PATH,
				element: <WorkScreen />,
			},
			{
				path: `${PRODUCT_PATH}/:id`,
				element: <ProductScreen />,
			},
			
			
		],
	},

	{
		path: ERROR_PATH,
		element: <NotFound />,
	},
])

export default router
