import React from 'react'
import { useSelector } from 'react-redux'
import { analysisWithDefaultsSelector } from 'Selectors/analyseSelectors'
import { extractCategories } from './chart/index'

export const humanWeight = (v) => {
	const [raw, unit] =
		v === 0
			? [v, '']
			: v < 1
				? [v * 1000, 'g']
				: v < 1000
					? [v, 'kg']
					: [v / 1000, 'tonnes']
	return [raw, unit]
}
export default ({ nodeValue }) => {
	const foldedSteps = useSelector(
		(state) => state.conversationSteps?.foldedSteps
	),
		simulationStarted = foldedSteps && foldedSteps.length,
		profilValue = getProfilValue()
	return (
		<span css="display: flex; align-items: center; justify-content: center">
			<em css="font-size: 120%">Votre total provisoire :</em>
			<span css="width: 0.3rem"></span>
			<HumanWeight nodeValue={nodeValue - profilValue} />
		</span>
	)
}

export const humanValueAndUnit = (possiblyNegativeValue) => {
	let v = Math.abs(possiblyNegativeValue),
		[raw, unit] = humanWeight(v),
		value = raw.toPrecision(3) * (possiblyNegativeValue < 0 ? -1 : 1)
	return { value, unit }
}

export const HumanWeight = ({ nodeValue }) => {
	const { value, unit } = humanValueAndUnit(nodeValue)
	return (
		<div>
			<strong
				css={`
					font-size: 160%;
					font-weight: 600;
				`}
			>
				{value}&nbsp;{unit}
			</strong>{' '}
			<UnitSuffix />
		</div>
	)
}

export const UnitSuffix = () => (
	<span>
		de <strong>CO₂</strong>e / an
	</span>
)

export const getProfilValue = () => {
	const analysis = useSelector(analysisWithDefaultsSelector),
		categories = extractCategories(analysis),
		index = categories.findIndex(obj => obj.name == "profil");
	var profilValue = 0;
	if (index > -1) {
		profilValue = categories[index].nodeValue;
	}
	return profilValue
}