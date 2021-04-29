import classnames from 'classnames'
import { T } from 'Components'
import { ThemeColorsContext } from 'Components/utils/colors'
import { compose, is } from 'ramda'
import React, { useCallback, useContext, useState } from 'react'
import Explicable from 'Components/conversation/Explicable'
import { FormDecorator } from 'Components/conversation/FormDecorator'
import 'Components/conversation/Question.css'
import SendButton from 'Components/conversation/SendButton'
import emoji from 'react-easy-emoji'
import { useDispatch, useSelector } from 'react-redux'
import { situationSelector } from 'Selectors/analyseSelectors'
import { updateSituation } from 'Actions/actions'
import NumberFormat from 'react-number-format'


// This is the number of possible answers in this very custom input component
const chipsTotal = 100

export default compose(FormDecorator('selectWeeklyTransport'))(function Question({
	name,
	setFormValue,
	transportRules,
	value: currentValue,
}) {
	const dispatch = useDispatch()
	const situation = useSelector(situationSelector)

	const chipsCount = transportRules.reduce(
		(memo, [_, { dottedName, defaultValue }]) =>
			memo +
			(situation[dottedName] != undefined
				? situation[dottedName]
				: defaultValue),
		0
	)

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
						margin: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						padding-bottom: 1rem;
					}

					> li h4 {
						margin: 0;
					}
					> li p {
						font-style: italic;
						font-size: 85%;
						line-height: 1.2rem;
					}
				`}
			>
				{transportRules.map(
					([{ name, title, description, dottedName, icônes }, question]) => {
						const situationValue = situation[question.dottedName],
							value =
								situationValue != null ? situationValue : question.defaultValue
						return (
							<li className="ui__ card" key={name}>
								<h4>{title}</h4>
								<div css={'{margin: .5rem; font-size: 200%}'}>
									{emoji(icônes)}
								</div>
								<p>{description.split('\n')[0]}</p>
								<div css={' span {margin: .5rem; font-size: 120%}'}>
									<button
										className={`ui__ button small plain ${
											!value ? 'disabled' : ''
										}`}
										onClick={() =>
											value > 0 &&
											dispatch(updateSituation(question.dottedName, value - 10))
										}
									>
										-
									</button>
									<span>
										<NumberFormat
											autoFocus
											className={'suffixed'}
											allowEmptyFormatting={true}
											style={{ border: `1px solid` }}
											value={value}
											suffix={'%'}
											autoComplete="off"
											onValueChange={({ floatValue }) =>
												dispatch(updateSituation(question.dottedName, floatValue))
											}
										/>
									</span>
									<button
										className="ui__ button small plain"
										onClick={() =>
											dispatch(updateSituation(question.dottedName, value + 10))
										}
									>
										+
									</button>
								</div>
							</li>
						)
					}
				)}
			</ul>
			<div css="p {text-align: center}">
				{chipsCount > chipsTotal ? (
					<p css="text-decoration: underline; text-decoration-color: red;   text-decoration-thickness: 0.2rem;">
						Vous devez revoir votre répartition ({chipsCount - chipsTotal} % en trop) !
					</p>
				) : chipsCount === chipsTotal ? (
					<p>{emoji('😋👍')}</p>
				) : (
					<p css="text-decoration: underline; text-decoration-color: yellow; text-decoration-thickness: 0.2rem;">
						Vous devez revoir votre répartition (encore {chipsTotal - chipsCount} %) !
					</p>
				)}
			</div>
		</div>
	)

	return (
		<div css="margin-top: 0.6rem; display: flex; align-items: center; flex-wrap: wrap; justify-content: flex-end">
			{choiceElements}
			<SendButton
				{...{
					disabled: chipsCount !== chipsTotal,
					// This component is special : it folds multiple questions at a time
					submit: () =>
						transportRules.map(([_, { dottedName }]) =>
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

let RadioLabel = (props) => (
	<>
		<RadioLabelContent {...props} />
		<Explicable dottedName={props.dottedName} />
	</>
)

function RadioLabelContent({
	icônes,
	value,
	label,
	currentValue,
	onChange,
	submit,
}) {
	let selected = value === currentValue

	const click = (value) => () => {
		if (currentValue == value) submit('dblClick')
	}

	return (
		<label
			key={value}
			css={`
				fontweight: ${value === '_' ? 'bold' : 'normal'};
				> img {
					margin-right: 0.3rem !important;
					font-size: 130%;
				}
			`}
			className={classnames('radio', 'userAnswerButton', { selected })}
		>
			{icônes && emoji(icônes)}
			<T>{label}</T>
			<input
				type="radio"
				onClick={click(value)}
				value={value}
				onChange={(evt) => onChange(evt.target.value)}
				checked={value === currentValue ? 'checked' : ''}
			/>
		</label>
	)
}
