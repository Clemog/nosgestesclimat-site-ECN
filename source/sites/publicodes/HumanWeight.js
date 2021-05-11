import React from 'react'
import { useSelector } from 'react-redux'

export const humanWeight = (possiblyNegativeValue, concise = false) => {
	const v = Math.abs(possiblyNegativeValue)
	const [raw, unit] =
		v === 0
			? [v, '']
			: v < 1
				? [v * 1000, 'g']
				: v < 1000
					? [v, 'kg']
					: [v / 1000, concise ? 't' : v > 2000 ? 'tonnes' : 'tonne']

	const signedValue = raw * (possiblyNegativeValue < 0 ? -1 : 1),
		value =
			raw < 10
				? raw.toLocaleString('fr-FR', { maximumSignificantDigits: 2 })
				: Math.round(raw).toLocaleString('fr-FR')

	return [value, unit]
}
export default ({ nodeValue }) => {
	const foldedSteps = useSelector(
		(state) => state.conversationSteps?.foldedSteps
	),
		simulationStarted = foldedSteps && foldedSteps.length

	return (
		<span>
			{!simulationStarted ? (
				<em> Un étudiant de l&#39;ECN émet en moyenne</em>
			) : (
				<em>Votre total provisoire</em>
			)}
			<HumanWeight nodeValue={nodeValue} />
		</span>
	)
}

export const HumanWeight = ({ nodeValue }) => {
	const [value, unit] = humanWeight(nodeValue)
	return (
		<span>
			<strong
				className="humanValue"
				css={`
					font-size: 160%;
					font-weight: 600;
				`}
			>
				{value}&nbsp;{unit}
			</strong>{' '}
			<UnitSuffix />
		</span>
	)
}

export const UnitSuffix = () => (
	<span className="unitSuffix">
		de <strong>CO₂</strong>e / an
	</span>
)
