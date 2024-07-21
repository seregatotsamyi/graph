import { useNavigate } from 'react-router-dom'


export const NotFound = (): JSX.Element => {
	const navigate = useNavigate()
	return (
		<div >
			404
		</div>
	)
}
