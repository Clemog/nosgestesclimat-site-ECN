import Modal from 'Components/Modal'
import React, { useState } from 'react'
import emoji from 'react-easy-emoji'
import { Link } from 'react-router-dom'
import DocumentationButton from './DocumentationButton'
import Illustration from './images/ecolab-climat-dessin.svg'
import Marianne from './images/Marianne.png'

export default () => {

	const [open, setOpen] = useState(true);

	return (
		<div
			css={`
				border-radius: 1rem;
				padding: 0.4rem;
				text-align: center;
				h1 {
					text-align:center;
					margin-top: 0.3rem;
					margin-left: auto;
					margin-right: auto;
					font-size: 140%;
					line-height: 1.2em;
					width:80%;
				}
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
			<Modal
				isOpen={open}
				closeModal={() => setOpen(false)}
				children={
					<div
						css={`
							text-align: justify;
							h3 {
								font-size: 140%;
								color:#102648;
								text-align: center;
							}
							h3:last-of-type {
								margin-top: 0;
								margin-bottom: 20px;
							}
							a {
								color:#102648;
								text-decoration: underline;
							}
							p {
								color:#102648;
								margin-bottom: 10px;
							}
						`}
					>

						<h3>Bienvenue sur Nos Gestes Climat<br></br><i>Centrale Nantes</i></h3>
						<p>Ce simulateur a été développé dans le cadre de l’option <b><a href="https://neutralite-carbone.ec-nantes.fr">Neutralité Carbone</a></b> à Centrale Nantes. Il vous permet d'évaluer votre <b>empreinte carbone individuelle professionnelle annuelle</b>. Le calcul vous permet de vous situer par rapport aux objectifs climatiques et surtout de <b>passer à l’action</b> à votre niveau avec des actions personnalisées en fonction de vos réponses.</p>
						<p>Vos émissions sont classées par <b>catégories</b> (profil, alimentation, transport, numérique, divers). N'hésitez pas à visiter <b>les pages dédiées aux différents postes d'émissions</b> (en cliquant sur le graphe des émissions) pour entrer dans le <b>détail des calculs</b>.</p>
						<p><b>Il est important de donner vos réponses pour une année type (hors Covid).</b> Vous pouvez prendre 2019 comme année de référence par exemple.</p>
						<p css="font-size: 85%;">Il est basé sur le simulateur <a href="https://ecolab.ademe.fr/impactcarbone">Nos GEStes Climat</a> créé par Ecolab, une start-up d'état. Ce simulateur est inspiré du modèle MicMac des associations <a href="https://avenirclimatique.org/les-outils/">Avenir Climatique</a> et <a href="https://www.taca.asso.fr/">TaCa</a>.</p>
					</div>
				}>
			</Modal>
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
					<Link to="/nouveautés">
						{emoji('✨️ ')}
						Nouveautés
					</Link>
					<Link to="/vie-privée">
						{emoji('🙈 ')}
						Vie privée
					</Link>
				</div>
			</footer>
		</div>
	)
}
