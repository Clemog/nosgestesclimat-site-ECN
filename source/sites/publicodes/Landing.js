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
					width:80%;
					margin-top: 0.3rem;
					margin-left: 4.5rem;
					font-size: 140%;
					line-height: 1.2em;
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
			<div css="margin: 1rem 0 .6rem;">
				<Link to="/simulateur/bilan" className="ui__ plain button">
					Faire le test
				</Link>
			</div>
			<footer>
				<div
					css={`
						display: flex;
						align-items: center;
						justify-content: center;
						margin-bottom: 1rem;
						img {
							margin: 0 0.6rem;
						}
					`}
				>
					<img css="height: 6rem; margin-right: .6rem" src={Marianne} />
					<a href="https://ademe.fr">
						<img
							css="height: 5rem; margin-right: .6rem"
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
