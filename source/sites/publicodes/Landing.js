import React from 'react'
import ContributionButton from './ContributionButton'
import DocumentationButton from './DocumentationButton'
import Suggestions from './Suggestions'
import { Link } from 'react-router-dom'
import Illustration from './images/ecolab-climat-dessin.svg'
import Marianne from './images/Marianne.png'
import emoji from 'react-easy-emoji'

export default () => {
	return (
		<div
			css={`
				border-radius: 1rem;
				padding: 0.4rem;
				h1 {
					text-align:center;
					margin-top: 0.3rem;
					margin-left: auto;
					margin-right: auto;
					font-size: 140%;
					line-height: 1.2em;
					width:80%;
				}
				> div > a {
				}
				text-align: center;
				> img {
					width: 70%;
					border-radius: 0.8rem;
				}
				@media (max-width: 800px) {
					> img {
						width: 95%;
					}
				}
			`}
		>
			<h1>Connaissez-vous l'empreinte carbone liée à votre activité au sein de Centrale Nantes ?</h1>
			<img src={Illustration} />
			<div css="margin: 1rem auto;">
				<Link to="/simulateur/bilan" className="ui__ plain button">
					Faire le test
				</Link>
			</div>
			<footer>
				<div
					css={`

						display: flex;
						justify-content: space-evenly;
						align-items: center;
						margin-bottom: 1rem;
						margin-left: auto;
						margin-right: auto;
						width: 80%;
					`}
				>
					<img css="height: 6rem;" src={Marianne} />
					<a href="https://ademe.fr">
						<img
							css="height: 5rem;"
							src="https://www.ademe.fr/sites/all/themes/ademe/logo.png"
						/>
					</a>
					<a href="https://www.associationbilancarbone.fr/">
						<img
							css="height: 2.5rem"
							src="https://www.associationbilancarbone.fr/wp-content/themes/abc/assets/images/brand/abc_main_logo.svg"
						/>
					</a>
				</div>
				<div
					css={`
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						> * {
							margin: 0 0.6rem;
						}
					`}
				>
					<Link to="/à-propos">
						{emoji('❔ ')}
						À propos
					</Link>
					<DocumentationButton />
					<Link to="/vie-privée">
						{emoji('🙈 ')}
						Vie privée
					</Link>
				</div>
			</footer>
		</div>
	)
}
