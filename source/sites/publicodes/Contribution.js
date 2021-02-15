import { Markdown } from 'Components/utils/markdown'
import FAQ from 'raw-loader!./FAQ.md'
import React, { useState } from 'react'
import emoji from 'react-easy-emoji'
import { Link } from 'react-router-dom'


let formStyle = `
label {
	display: block;
	margin-bottom: 1em;
}
label input, label textarea {
	display: block;
	border-radius: .3em;
	padding: .3em ;
	border: 1px solid var(--color);
	box-shadow: none;
	margin-top: .6em;
	font-size: 100%;
	width: 80%

}
label textarea {
	height: 6em;
}`


export default ({ match }) => {
	let input = match.params.input
	let [sujet, setSujet] = useState(input)
	let [source, setSource] = useState('')
	let [URL, setURL] = useState(null)
	let [buttonDisabled, disableButton] = useState(false)

	return (
		<div className="ui__ container" css="padding-bottom: 1rem">
			<h2 css="font-size: 180%">{emoji('❔')}Questions fréquentes</h2>
			<div className="ui__ card" css="padding-bottom: 1rem">
				<p>Bonjour, et bienvenue sur la Foire Aux Questions de Nos GEStes Climat (ECN), le calculateur d’empreinte carbone individuelle et votre coach de transition bas carbone !</p>
				<p>Vous trouverez sur ce document la réponse aux questions les plus fréquentes. S’il vous reste des interrogations, rendez-vous en bas dans de la page !</p>
				<p>Si vous désirez en apprendre davantage sur le modèle de calcul, plongez vous dans la{' '} <Link to="/documentation">documentation</Link> !</p>
				<p>Bonne lecture !</p>
				<Markdown escapeHtml={false} source={FAQ} />
			</div>
			<h2 css="font-size: 180%">{emoji('🙋‍♀️')}J'ai une autre question</h2>
			<p>
				{emoji('➡ ')}Laissez-nous un message à l'adresse mail suivante :
				<a href="mailto: clement.auger@eleves.ec-nantes.fr">
					clement.auger@eleves.ec-nantes.fr
				</a>.
			</p>
		</div>
	)
}
