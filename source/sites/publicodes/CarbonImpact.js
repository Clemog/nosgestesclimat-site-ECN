import { utils } from 'publicodes'
import React from 'react'
import emoji from 'react-easy-emoji'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	objectifsSelector,
	situationSelector,
} from '../../selectors/simulationSelectors'
import { extractCategories } from './chart'
import SimulationHumanWeight from './HumanWeight'
import { useEngine } from 'Components/utils/EngineContext'
import { correctValue, splitName } from '../../components/publicodesUtils'
import { lightenColor } from '../../components/utils/colors'

export default ({ }) => {
	const objectif = useSelector(objectifsSelector)[0],
		// needed for this component to refresh on situation change :
		situation = useSelector(situationSelector),
		engine = useEngine(),
		rules = useSelector((state) => state.rules),
		evaluation = engine.evaluate(objectif),
		{ nodeValue: rawNodeValue, dottedName, unit, rawNode } = evaluation
	const foldedSteps = useSelector((state) => state.simulation?.foldedSteps),
		simulationStarted = foldedSteps && foldedSteps.length,
		persona = useSelector((state) => state.simulation?.persona)

	const nodeValue = correctValue({ nodeValue: rawNodeValue, unit })

	const category = rules[splitName(dottedName)[0]],
		color = category && category.couleur

	const valeurProfil = extractCategories(rules, engine).filter((category) => category.name === "profil")[0].nodeValue

	const isMainSimulation = objectif === 'bilan'
	return (
		<div
			css={`
				background: rgba(0, 0, 0, 0)
					linear-gradient(
						60deg,
						${color ? color : 'var(--color)'} 0%,
						${color ? lightenColor(color, -20) : 'var(--lightColor)'} 100%
					)
					repeat scroll 0% 0%;
				color: var(--textColor);
				padding: 0.4rem;

				a {
					color: inherit;
				}
				text-align: center;
				display: flex;
				justify-content: space-evenly;
				> div {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				box-shadow: 2px 2px 10px #bbb;

				.unitSuffix {
					font-size: 90%;
				}
			`}
		>
			<div
				css={`
					display: flex;
					justify-content: space-evenly;
					flex-direction: column;
					width: 80%;
				`}
			>
				{isMainSimulation &&
					!persona &&
					(!simulationStarted ? (
						<em>Ce type de profil émet en moyenne</em>
					) : (
						<em>Votre total provisoire</em>
					))}
				{persona && (
					<em>
						{emoji('👤')} {persona}
					</em>
				)}
				{!simulationStarted ? (
					<div><SimulationHumanWeight nodeValue={nodeValue} /></div>
				) : (
					<div><SimulationHumanWeight nodeValue={nodeValue - valeurProfil} /></div>
				)}
			</div>
			<div>
				<Link to={'/documentation/' + utils.encodeRuleName(dottedName)}>
					<span css="font-size: 140%" alt="Comprendre le calcul">
						{emoji('❔️ ')}
					</span>
					<small
						css={`
							color: var(--textColor);
							@media (max-width: 800px) {
								display: none;
							}
						`}
					>
						Comprendre le calcul
					</small>
				</Link>
			</div>
		</div>
	)
}
