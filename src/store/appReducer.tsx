import { PayloadAction, createSlice } from '@reduxjs/toolkit'


import { setAuth, setAuthData } from './authReducer'

interface InitialStateType {
	loading: boolean
	init: boolean
	isShowMenu: boolean
	typeApp: 'mob' | 'desk'
}

const initialState: InitialStateType = {
	loading: true,
	init: false,
	isShowMenu: false,
	typeApp: 'desk'
}

export const appReducer = createSlice({
	name: 'app',
	initialState,
	reducers: {
		loadingStatus: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},

		setInit: (state, action: PayloadAction<boolean>) => {
			state.init = action.payload
		},
		setTypeApp: (state, action: PayloadAction<'mob' | 'desk'>) => {
			state.typeApp = action.payload
		},
		isShowMenu: (state, action: PayloadAction<boolean>) => {
			state.isShowMenu = action.payload
		},
	},
})

export const { loadingStatus, setInit, isShowMenu, setTypeApp } = appReducer.actions

export const initializeApp = () => async (dispatch: any) => {
	dispatch(loadingStatus(true))

	try {
	
	
	} catch (err: any) {
		console.error(err)
	}

	dispatch(setInit(true))
	dispatch(loadingStatus(false))
}

export default appReducer.reducer
