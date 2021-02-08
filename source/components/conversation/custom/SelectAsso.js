import Switch from '@material-ui/core/Switch'
import { updateSituation } from 'Actions/actions'
import { FormDecorator } from 'Components/conversation/FormDecorator'
import 'Components/conversation/Question.css'
import SendButton from 'Components/conversation/SendButton'
import { compose } from 'ramda'
import React, { useState } from 'react'
import emoji from 'react-easy-emoji'
import { useDispatch, useSelector } from 'react-redux'
import { situationSelector } from 'Selectors/analyseSelectors'



// This is the number of possible answers in this very custom input component
const chipsTotal = 100

export default compose(FormDecorator('selectAsso'))(function Question({
	name,
	setFormValue,
	assoRules,
	value: currentValue,
}) {
	const dispatch = useDispatch()
	const situation = useSelector(situationSelector)



	const choiceElements = (
		<div>
			<ul
				css={`
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					p {
						text-align: center;
					}

					> li > div > img {
						margin-right: 0.4rem !important;
						font-size: 130% !important;
					}

					> li {
						width: 14rem;
						margin: 0.7rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						padding-bottom: 1rem;
					}

					> li h4 {
						text-align: center;
						margin: 0;
					}
					> li p {
						font-style: italic;
						font-size: 85%;
						line-height: 1.2rem;
					}
				`}
			>
				{assoRules.map(
					([{ name, title, description, dottedName, icônes }, question]) => {
						const situationValue = situation[question.dottedName],
							value =
								situationValue != null ? situationValue : question.defaultValue

						const [switchValue, setSwhitchValue] = useState({ checked: !!+value, })

						const handleChange = (event) => {
							setSwhitchValue({ ...switchValue, [event.target.name]: event.target.checked });
							dispatch(updateSituation(question.dottedName, event.target.checked))
						}

						return (
							<li className="ui__ card" key={name}>
								<h4>{title}</h4>
								<div css={'{margin: .5rem; font-size: 200%}'}>
									{emoji(icônes)}
								</div>
								<p>{description.split('\n')[0]}</p>
								<Switch
									checked={switchValue.checked}
									onChange={handleChange}
									color="primary"
									name="checked"
									inputProps={{ 'aria-label': 'secondary checkbox' }}
								/>
							</li>
						)
					}
				)}
			</ul>
		</div>
	)

	return (
		<div css="margin-top: 0.6rem; display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-end">
			{choiceElements}
			<SendButton
				{...{
					// This component is special : it folds multiple questions at a time
					submit: () =>
						assoRules.map(([_, { dottedName }]) =>
							dispatch({
								type: 'STEP_ACTION',
								name: 'fold',
								step: dottedName,
							})
						),
				}}
			/>
		</div>
	)
})

