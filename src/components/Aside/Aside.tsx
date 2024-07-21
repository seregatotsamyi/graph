import { isShowMenu, useAppDispatch, useAppSelector } from "../../store"


export const Aside = () => {
	const isMob = useAppSelector((state) => state.app.isShowMenu)
	const dispatch = useAppDispatch()



	const onCloseMenu = () => {
		dispatch(isShowMenu(false))
		document.getElementById('body')?.classList.remove('_fixed')
	}

	return (
		<aside className={`aside ${isMob ? '_open' : ''}`}>
			
		</aside>
	)
}
