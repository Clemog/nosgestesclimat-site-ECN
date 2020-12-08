import {toPairs} from 'ramda'
import React, {useState} from 'react'
import emoji from 'react-easy-emoji'
import {Markdown} from 'Components/utils/markdown'
import FAQ from 'raw-loader!./FAQ.md'

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


export default ({match}) => {
	let input = match.params.input
	let [sujet, setSujet] = useState(input)
	let [source, setSource] = useState('')
	let [URL, setURL] = useState(null)
	let [buttonDisabled, disableButton] = useState(false)

	return (
		<div className="ui__ container" css="padding-bottom: 1rem">
			<h2 css="font-size: 180%">{emoji('❔')}Questions fréquentes</h2>
			<div className="ui__ card" css="padding-bottom: 1rem">
				<Markdown escapeHtml={false} source={FAQ} />
			</div>
			<h2 css="font-size: 180%">{emoji('🙋‍♀️')}J'ai une autre question</h2>
			<p>
				{emoji('➡ ')}Laissez-nous un message à l'adresse mail suivante : 
				<a href = "mailto: clement.auger@eleves.ec-nantes.fr"> 
					clement.auger@eleves.ec-nantes.fr
				</a>.
			</p>
		</div>
	)		
}
