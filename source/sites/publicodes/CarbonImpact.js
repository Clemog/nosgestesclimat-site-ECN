import { SitePathsContext } from 'Components/utils/withSitePaths'
import { encodeRuleName } from 'Engine/rules'
import React, { useContext } from 'react'
import emoji from 'react-easy-emoji'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SimulationHumanWeight from './HumanWeight'


export default ({ nodeValue, formule, dottedName }) => {
	const sitePaths = useContext(SitePathsContext)
	let interestingFormula = formule && formule.explanation.text !== '0'

	const foldedSteps = useSelector(
		(state) => state.conversationSteps?.foldedSteps
	),
		simulationStarted = foldedSteps && foldedSteps.length

	return (
		<div
			css={`
				font-size: 85%;
				a {
					color: inherit;
				}
				text-align: center;
			`}
		>
			{simulationStarted ? (
				<div>
					<SimulationHumanWeight nodeValue={nodeValue} />
					<div>
						<span css="font-size: 120%">{emoji('🔬 ')}</span>
						<Link
							to={
								sitePaths.documentation.index + '/' + encodeRuleName(dottedName)
							}
						>
							comprendre le calcul
							</Link>
						<p>(click on the graph below to access the details of emission sources)</p>
					</div>
				</div>
			) : (
					<p></p>
				)}

		</div>
	)
}
