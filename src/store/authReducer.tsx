import { PayloadAction, createSlice } from '@reduxjs/toolkit'



import { loadingStatus } from './appReducer'

export interface InitialStateType {
	isAuth: boolean
	email: string | null | undefined
	userId: string | null | undefined
	error: string | null
	role: string | null | undefined
	inLogging: boolean
	inRegistration: boolean
}

const initialState: InitialStateType = {
	isAuth: false,
	email: null,
	userId: null,
	error: null,
	role: null,
	inLogging: false,
	inRegistration: false,
}

export const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		setAuthData: (
			state,
			action: PayloadAction<{
				role: string | null | undefined
				email: string | null | undefined
				userId: string | null | undefined
			}>
		) => {
			state.role = action.payload.role
			state.email = action.payload.email
			state.userId = action.payload.userId
		},
	},
})

export const { setAuth, setAuthData } = authReducer.actions

export const login =
	({ email, password }: { email: string; password: string }) =>
	async (dispatch: any) => {
		dispatch(loadingStatus(true))

		try {
		
			
		} catch (err: any) {
			
			console.error(err)
		}

		dispatch(loadingStatus(false))
	}

export const logOut = () => async (dispatch: any) => {
	dispatch(loadingStatus(true))

	try {
	
	} catch (err: any) {
		
		console.error(err)
	}

	dispatch(loadingStatus(false))
}


export default authReducer.reducer
