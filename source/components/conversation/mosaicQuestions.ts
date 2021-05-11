import SelectWeeklyDiet from './select/SelectWeeklyDiet'
import SelectWeeklyTransport from './select/SelectWeeklyTransport'
import SelectDevices from './select/SelectDevices'
import SelectLabo from './select/SelectLabo'
import SelectAsso from './select/SelectAsso'
import { DottedName } from 'Rules'

const mosaicQuestions: Array<{
	question: string
	description: string
	isApplicable: Function
	component: React.FunctionComponent
	dottedName: DottedName
}> = [
		{
			dottedName: "numérique . liste d'appareils",
			question: 'Quels appareils numériques de moins de 10 ans possédez-vous ?',
			description: `
L'essentiel de l'empreinte du numérique réside dans les appareils que nous achetons.

> ✨️ Par simplicité, ne renseignez que les appareils récents : un smartphone utilisé depuis 5 ans a déjà été bien amorti.

Renseignez ici vos appareils parmi ces choix limités.

> 📡 Nous ajouterons au fur et à mesure d'autres types d'appareils : box internet, box TV, 2ème TV, imprimante, etc..
			`,
			isApplicable: (dottedName: DottedName) =>
				dottedName.includes('numérique') && dottedName.includes(' . présent'),
			component: SelectDevices,
		},
		{
			dottedName: 'alimentation . régime',
			question:
				'Choisissez les plats de vos midis pour une semaine type',
			description: `

Choisissez 5 plats qui représentent votre semaine type. 

> Bien sûr, toute la diversité des régimes ne peut-être simplifiée en 4 boutons : il manque par exemple le poison... le menu du pêcheur arrive bientôt ! 

			`,
			isApplicable: (dottedName: DottedName) =>
				dottedName.includes('alimentation . plats') &&
				dottedName.includes(' . nombre'),
			component: SelectWeeklyDiet,
		},
		{
			dottedName: 'transport . moyens de transport',
			question:
				'Dans quelles proportions utilisez-vous ces moyens de transport pour vous rendre à Centrale ?',
			description: `

A compléter 

> A compléter

			`,
			isApplicable: (dottedName: DottedName) =>
				dottedName.includes('transport . moyens de transport') &&
				dottedName.includes(' . pourcent'),
			component: SelectWeeklyTransport,
		},
		{
			dottedName: "profil . labo",
			question: 'A quel laboratoire appartenez-vous ?',
			description: `

A compléter 

> A compléter

			`,
			isApplicable: (dottedName: DottedName) =>
				dottedName.includes('profil . labo') && dottedName.includes(' . appartient'),
			component: SelectLabo,
		},
		{
			dottedName: "associatif . asso",
			question: 'A quelle(s) association(s) adhérez-vous ?',
			description: `

A compléter 

> A compléter

			`,
			isApplicable: (dottedName: DottedName) =>
				dottedName.includes('associatif . asso') && dottedName.includes(' . adhésion'),
			component: SelectAsso,
		},
	]

export default mosaicQuestions
