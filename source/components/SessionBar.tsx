import {
	deletePreviousSimulation,

	goToQuestion, loadPreviousSimulation, resetSimulation
} from 'Actions/actions'
import { T } from 'Components'
import { Button } from 'Components/ui/Button'
import { last } from 'ramda'
import React, { useEffect, useState } from 'react'
import emoji from 'react-easy-emoji'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { RootState } from 'Reducers/rootReducer'
import {
	analysisWithDefaultsSelector
} from 'Selectors/analyseSelectors'
import { extractCategories } from '../sites/publicodes/chart'
import Answers from './conversation/AnswerList'

export const buildEndURL = (analysis) => {
	const total = analysis.targets[0].nodeValue,
		categories = extractCategories(analysis),
		detailsString =
			categories &&
			categories.reduce(
				(memo, next) =>
					memo +
					next.name[0] +
					next.name[1] +
					(Math.round(next.nodeValue / 10) / 100).toFixed(2),
				''
			)

	if (detailsString == null) return null

	return `/fin?total=${Math.round(total)}&details=${detailsString}`
}

export default function SessionBar({ answerButtonOnly = false }) {
	const dispatch = useDispatch()
	const previousSimulation = useSelector(
		(state: RootState) => state.previousSimulation
	)

	const foldedSteps = useSelector(
		(state: RootState) => state.conversationSteps.foldedSteps
	)
	const arePreviousAnswers = !!foldedSteps.length
	useEffect(() => {
		if (!arePreviousAnswers && previousSimulation)
			dispatch(loadPreviousSimulation())
	}, [])
	const [showAnswerModal, setShowAnswerModal] = useState(false)
	const analysis = useSelector(analysisWithDefaultsSelector)
	const history = useHistory()
	const location = useLocation()

	const css = `

					display: flex;
					justify-content: center;
					button {
						margin: 0 0.2rem;
					}
					margin: 0.6rem;
					`
	if (answerButtonOnly)
		return (
			<div css={css}>
				{arePreviousAnswers && (
					<>
						<Button
							className="simple small"
							onClick={() => setShowAnswerModal(true)}
						>
							{emoji('📋 ')}
							<T>Modifier mes réponses</T>
						</Button>
					</>
				)}
				{showAnswerModal && (
					<Answers onClose={() => setShowAnswerModal(false)} />
				)}
			</div>
		)

	if (['/fin', '/actions'].includes(location.pathname))
		return (
			<div
				css={`
					display: flex;
					justify-content: space-between;
					button {
						margin: 0 0.2rem;
					}
					margin: 0.6rem;
				`}
			>
				{arePreviousAnswers ? (
					<Button
						className="simple small"
						onClick={() => {
							dispatch(goToQuestion(last(foldedSteps)))
							history.push('/simulateur/bilan')
						}}
					>
						{emoji('📊 ')}
						<T>Go back to my simulation</T>
					</Button>
				) : (
						<Button
							className="plain"
							onClick={() => {
								history.push('/simulateur/bilan')
							}}
						>
							<T>Faire le test</T>
						</Button>
					)}
				<Button
					className="simple small"
					onClick={() => {
						dispatch(resetSimulation())
						dispatch(deletePreviousSimulation())
						history.push('/simulateur/bilan')
					}}
				>
					{emoji('⏪ ')}
					<T>Erase and start again</T>
				</Button>
			</div>
		)

	return (
		<div css={css}>
			{arePreviousAnswers && (
				<>
					<Button
						className="simple small"
						onClick={() => setShowAnswerModal(true)}
					>
						{emoji('📋 ')}
						<T>Modifier mes réponses</T>
					</Button>
					<Button
						className="simple small"
						onClick={() => history.push(buildEndURL(analysis))}
					>
						{emoji('💤 ')}
						<T>Terminer</T>
					</Button>
					{true && (
						<Button
							className="simple small"
							onClick={() => history.push('/actions')}
						>
							{emoji('💥 ')}
							<T>Take Action</T>
						</Button>
					)}
				</>
			)}
			{showAnswerModal && <Answers onClose={() => setShowAnswerModal(false)} />}
		</div>
	)
}
