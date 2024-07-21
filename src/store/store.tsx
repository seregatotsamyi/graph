import { configureStore } from '@reduxjs/toolkit'

import appReducer from './appReducer'
import authReducer from './authReducer'

export const store = configureStore({
	reducer: {
		app: appReducer,
		auth: authReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),

	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
