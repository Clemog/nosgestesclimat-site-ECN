import React from 'react'
import emoji from 'react-easy-emoji'
import { useSelector } from 'react-redux'
import { situationSelector } from 'Selectors/analyseSelectors'
import { AddAnswer } from './API'


const AddAnswerButton = () => {

	const myData = {
		test: 'This is my test'
	}

	const situation = useSelector(situationSelector)

	return (
		<div
			css={`
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					margin-right: 0.4rem !important;
				}
			`}
		>
			<button
				className="ui__ simple small button"
				// toujours une fonction dans le onClick /  fonction anonyme () =>
				onClick={() =>
					AddAnswer(situation).then((response) => {
						console.log('API response', response)
						// set app state
					}).catch((error) => {
						console.log('API error', error)
					})
				}
			>
				{emoji('📄')}
			</button>
		</div>
	)
}

export default AddAnswerButton