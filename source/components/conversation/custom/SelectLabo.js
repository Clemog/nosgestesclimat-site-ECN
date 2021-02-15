import Switch from '@material-ui/core/Switch'
import { updateSituation } from 'Actions/actions'
import { FormDecorator } from 'Components/conversation/FormDecorator'
import 'Components/conversation/Question.css'
import SendButton from 'Components/conversation/SendButton'
import { compose } from 'ramda'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { situationSelector } from 'Selectors/analyseSelectors'





function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importAll(require.context('../../../sites/publicodes/images', false, /\.(png|jpe?g|svg)$/));

// This is the number of possible answers in this very custom input component

export default compose(FormDecorator('selectLabo'))(function Question({
	name,
	setFormValue,
	laboRules,
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
						margin-left: 0.4rem !important;
						height: 5rem;
					}

					> li {
						width: 13rem;
						margin: 0.8rem;
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
				{laboRules.map(
					([{ name, title, description, dottedName, icônes }, question]) => {

						const situationValue = situation[question.dottedName],
							value =
								situationValue != null ? situationValue : question.defaultValue

						const [radioChecked, setRadioChecked] = useState({ checked: !!+value, })

						const [switchValue, setSwhitchValue] = useState({ checked: !!+value, })

						const handleChange = (event) => {
							setSwhitchValue({ ...switchValue, [event.target.name]: event.target.checked });
							dispatch(updateSituation(question.dottedName, +event.target.checked))
						}

						return (
							<li className="ui__ card" key={name}>
								<h4>{title}</h4>
								<div css={'{margin: .5rem; font-size: 200%; }'}>
									<img src={images[icônes].default} />
								</div>
								<Switch
									checked={switchValue.checked}
									onChange={handleChange}
									color="primary"
									name="checked"
									inputProps={{ 'aria-label': 'secondary checkbox' }}
								/>
								{/* <input type="radio" name="checked" checked={radioChecked} onChange={handleChange} />
							 	<Radio
									checked={radioChecked.checked}
									onChange={handleChange}
									name="abc"
								/> */}
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
						laboRules.map(([_, { dottedName }]) =>
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

