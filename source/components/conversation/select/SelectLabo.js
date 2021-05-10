import classnames from 'classnames'
import { ThemeColorsContext } from 'Components/utils/colors'
import React, { useCallback, useContext, useState } from 'react'
import { Explicable } from 'Components/conversation/Explicable'
import emoji from 'react-easy-emoji'
import { useDispatch, useSelector } from 'react-redux'
import { situationSelector } from 'Selectors/simulationSelectors'
import { updateSituation } from 'Actions/actions'
import { Mosaic } from '../select/UI'
import Checkbox from 'Components/ui/Checkbox'


function importAll(r) {
	let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importAll(require.context('../../../sites/publicodes/images', false, /\.(png|jpe?g|svg)$/));
console.log(images)

export default function SelectLaboratory({
	name,
	setFormValue,
	selectedRules,
	value: currentValue,
	question,
}) {
	const dispatch = useDispatch()
	const situation = useSelector(situationSelector)
	console.log({ selectedRules })

	const choiceElements = (
		<div>
			<Mosaic>
				{selectedRules.map(
					([
						{
							name,
							title,
							rawNode: { description, icônes },
						},
						question,
					]) => {
						const situationValue = situation[question.dottedName],
							value =
								situationValue != null
									? situationValue
									: question.rawNode['par défaut']
						return (
							<li
								css="padding: 2rem"
								className="ui__ card interactive"
								key={name}
								onMouseDown={() =>
									dispatch(
										updateSituation(
											question.dottedName,
											value == 'oui' ? 'non' : 'oui'
										)
									)
								}
							>
								<div css='{margin: .5rem;}'><img css='{height: 4.5rem; width: auto}' src={images[icônes].default} /></div>
								<h4>{title}</h4>
								{false && description && <p>{description.split('\n')[0]}</p>}
								<div css={'font-size: 1.8rem'}>
									<Checkbox
										name={name}
										id={name}
										checked={value === 'oui'}
										readOnly
									/>
								</div>
							</li>
						)
					}
				)}
			</Mosaic>
		</div>
	)

	return (
		<div css="margin-top: 0.6rem; display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-end">
			{choiceElements}
		</div>
	)
}



// export default compose(FormDecorator('selectLabo'))(function Question({
// 	name,
// 	setFormValue,
// 	laboRules,
// 	value: currentValue,
// }) {
// 	const dispatch = useDispatch()
// 	const situation = useSelector(situationSelector)



// 	const choiceElements = (
// 		<div>
// 			<ul
// 				css={`
// 					display: flex;
// 					justify-content: center;
// 					flex-wrap: wrap;
// 					p {
// 						text-align: center;
// 					}

// 					> li > div > img {
// 						margin-left: 0.4rem !important;
// 						height: 5rem;
// 					}

// 					> li {
// 						width: 13rem;
// 						margin: 0.8rem;
// 						display: flex;
// 						flex-direction: column;
// 						justify-content: space-between;
// 						align-items: center;
// 						padding-bottom: 1rem;
// 					}

// 					> li h4 {
// 						text-align: center;
// 						margin: 0;
// 					}
// 					> li p {
// 						font-style: italic;
// 						font-size: 85%;
// 						line-height: 1.2rem;
// 					}
// 				`}
// 			>
// 				{laboRules.map(
// 					([{ name, title, description, dottedName, icônes }, question]) => {

// 						const situationValue = situation[question.dottedName],
// 							value =
// 								situationValue != null ? situationValue : question.defaultValue

// 						const [radioChecked, setRadioChecked] = useState({ checked: !!+value, })

// 						const [switchValue, setSwhitchValue] = useState({ checked: !!+value, })

// 						const handleChange = (event) => {
// 							setSwhitchValue({ ...switchValue, [event.target.name]: event.target.checked });
// 							dispatch(updateSituation(question.dottedName, +event.target.checked))
// 						}

// 						return (
// 							<li className="ui__ card" key={name}>
// 								<h4>{title}</h4>
// 								<div css={'{margin: .5rem; font-size: 200%; }'}>
// 									<img src={images[icônes].default} />
// 								</div>
// 								<Switch
// 									checked={switchValue.checked}
// 									onChange={handleChange}
// 									color="primary"
// 									name="checked"
// 									inputProps={{ 'aria-label': 'secondary checkbox' }}
// 								/>
// 								{/* <input type="radio" name="checked" checked={radioChecked} onChange={handleChange} />
// 							 	<Radio
// 									checked={radioChecked.checked}
// 									onChange={handleChange}
// 									name="abc"
// 								/> */}
// 							</li>
// 						)
// 					}
// 				)}
// 			</ul>
// 		</div>
// 	)

// 	return (
// 		<div css="margin-top: 0.6rem; display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-end">
// 			{choiceElements}
// 			<SendButton
// 				{...{
// 					// This component is special : it folds multiple questions at a time
// 					submit: () =>
// 						laboRules.map(([_, { dottedName }]) =>
// 							dispatch({
// 								type: 'STEP_ACTION',
// 								name: 'fold',
// 								step: dottedName,
// 							})
// 						),
// 				}}
// 			/>
// 		</div>
// 	)
// })

