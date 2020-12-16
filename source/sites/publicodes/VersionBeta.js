import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import emoji from 'react-easy-emoji'

export default () => {
	const location = useLocation()

	const pathHas = (fragment) => location.pathname.includes(fragment)

	if (!(pathHas('/documentation') || pathHas('/simulateur') || pathHas('/fin'))) return null
	return (
		<div css=" text-align: center; color: black; ">
			Une question, un problème, une idée ? {emoji('📮')}{' '}
			<Link to="/contribuer">C'est par ici !</Link>
		</div>
	)
}
