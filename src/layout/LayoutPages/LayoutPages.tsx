import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../store'
import { Aside } from '../../components'



export const LayoutPages = () => {

	return (
		<div className="pages">
			<Aside />

			<div className="pages__inner">
				<Outlet />
			</div>
		</div>
	)
}
