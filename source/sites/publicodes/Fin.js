import PopUpEnd from 'Components/PopUpEnd'
import SessionBar from 'Components/SessionBar'
import { findContrastedTextColor } from 'Components/utils/colors'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import emoji from 'react-easy-emoji'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import tinygradient from 'tinygradient'
import Chart from './chart/indexprofil'
import StartingBlock from './images/starting block.svg'

const gradient = tinygradient([
	'#78e08f',
	'#e1d738',
	'#f6b93b',
	'#b71540',
	'#000000',
]),
	colors = gradient.rgb(20)

const getBackgroundColor = (score) =>
	colors[
	Math.round((score < 1000 ? 0 : score > 20000 ? 19000 : score + 4000) / 1000)
	]

export default ({ }) => {
	const query = new URLSearchParams(useLocation().search),
		score = query.get('total') || useParams().score,
		scoreProfil = query.get('details')
	// details=a2.6t2.1s1.3l1.0b0.8f0.2n0.1
	const encodedDetails = query.get('details'),
		rehydratedDetails =
			encodedDetails &&
			Object.fromEntries(
				encodedDetails
					.match(/[a-z][a-z][0-9]+\.[0-9][0-9]/g)
					.map(([category1, category2, ...rest]) => [category1 + category2, 1000 * +rest.join('')])
			)
	const { value } = useSpring({
		config: { mass: 1, tension: 150, friction: 150, precision: 1000 },
		value: +score,
		from: { value: 0 },
	})

	const valueProfil = rehydratedDetails["pr"]

	return <AnimatedDiv value={value} score={score} valueProfil={valueProfil} details={rehydratedDetails} />
}

const AnimatedDiv = animated(({ score, value, valueProfil, details }) => {
	const backgroundColor = getBackgroundColor(value).toHexString(),
		backgroundColor2 = getBackgroundColor(value + 4000).toHexString(),
		textColor = findContrastedTextColor(backgroundColor, true)

	const [open, setOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpen(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);


	return (
		<div css="padding: 0 .3rem 1rem; max-width: 600px; margin: 0 auto;">
			<SessionBar />
			<motion.div
				animate={{ scale: [0.85, 1] }}
				transition={{ duration: 0.2, ease: 'easeIn' }}
				className=""
				css={`
					background: ${backgroundColor};
					background: linear-gradient(
						180deg,
						${backgroundColor} 0%,
						${backgroundColor2} 100%
					);
					color: ${textColor};
					margin: 0 auto;
					border-radius: 0.6rem;
					height: 65vh;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					text-align: center;
					font-size: 110%;
				`}
			>
				<div css="display: flex; align-items: center; justify-content: center">
					<div >
						<div css="font-weight: bold; font-size: 180%;">
							<span css="display: inline-block">
								Mon total :
							</span>{' '}
							<span css="display: inline-block">
								{Number.parseFloat(value / 1000).toFixed(2)}
							</span>{' '}
							<span css="display: inline-block">
								tonnes
							</span>{' '}
						</div>
						<div css="font-weight: normal; font-style: italic; font-size: 120%; margin-bottom: 0.6rem">
							<span css="display: inline-block">
								Dont
							</span>{' '}
							<span css="display: inline-block">
								{Number.parseFloat(valueProfil / 1000).toFixed(2)}
							</span>{' '}
							<span css="display: inline-block">
								tonnes liées à votre profil
							</span>{' '}
						</div>
						<div
							css={`
								background: #ffffff3d;
								border-radius: 0.6rem;
								margin: 0 auto;
								padding: 0.4rem 0.7rem;
								width: 25rem;

								> div {
									display: flex;
									justify-content: space-between;
									flex-wrap: wrap;
								}
								strong {
									font-weight: bold;
								}
								> img {
									margin: 0 0.6rem !important;
								}
							`}
						>
							<div>
								<span>
									{emoji('🏫 ')}
									Moyenne à l'ECN{' '}
								</span>{' '}
								<strong> 2.25 t</strong>
							</div>
							<div>
								<span>
									{emoji('🎓 ')}
									Moyenne d'un étudiant {' '}
								</span>{' '}
								<strong> 1.58 t</strong>
							</div>
							<div>
								<span>
									{emoji('📚 ')}
									Moyenne d'un doctorant {' '}
								</span>{' '}
								<strong> 3.35 t</strong>
							</div>
							<div>
								<span>
									{emoji('💼 ')}
									Moyenne d'un enseignant-chercheur{' '}
								</span>{' '}
								<strong> 4.47 t</strong>
							</div>
							<div>
								<span>
									{emoji('📂 ')}
									Moyenne d'un membre du personnel{' '}
								</span>{' '}
								<strong> 2.05 t</strong>
							</div>
							<div css="margin-top: .2rem;justify-content: flex-end !important">
								<a
									css="color: inherit"
									href="https://neutralite-carbone.ec-nantes.fr/fr/bilan-carbone-2018/resultats-par-profils-types"
								>
									Comment ça ?
								</a>
							</div>
						</div>
					</div>
				</div>
				<div css="padding: 1rem;">
					<Chart details={details} color={textColor} noAnimation noText />
				</div>
			</motion.div>
			{true && (
				<Link
					to="/actions"
					className="ui__ button plain"
					css={`
						margin: 0.6rem 0;
						width: 100%;
						img {
							transform: scaleX(-1);
							height: 3rem;
							margin: 0 0.6rem;
							display: inline-block;
						}
						a {
							color: var(--textColor);
							text-decoration: none;
						}
					`}
				>
					<div
						css={`
							display: flex;
							justify-content: center;
							align-items: center;
							width: 100%;
						`}
					>
						<img src={StartingBlock} />
						Passer à l'action
					</div>
				</Link>
			)}
			<PopUpEnd
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
								line-height:125%;
							}
						`}
					>
						<h3>On a besoin de vous ! </h3>
						<p><b>Félicitations</b>, vous avez réalisé votre <b>bilan carbone professionnel</b>, directement lié à votre activité à Centrale Nantes. L'équipe projet NCO2 a maintenant besoin de vous : la collecte des informations relatives à vos habitudes à l'ECN est un réel enjeu dans l'optique d'améliorer la précision du calcul du Bilan Carbone de l'école. Nous aimerions donc collecter les données de votre simulation pour nos études statistiques !</p>
						<p>Si vous estimez que la simulation que vous venez de réaliser est représentative de vos habitudes, aidez-nous et cliquez sur <b>"Je partage ma simulation"</b> ! Les données de votre simulation seront sauvegardées de manière anonyme dans l'unique but de contribuer à la précision du calcul.</p>
						<p>La méthode de sauvegarde actuelle ne permet pas de vérifier le nombre d'envoi de simulations par personne. Il est donc nécessaire que vous ne partagiez qu'<b>une seule fois vos résultats</b>. Nous vous remercions par avance !</p>
					</div>
				}>
			</PopUpEnd>
		</div>
	)
})
