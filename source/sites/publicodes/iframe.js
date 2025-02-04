import { iframeResize } from 'iframe-resizer'

const script =
	document.getElementById('ecolab-climat') ||
	document.getElementById('nosgestesclimat'),
	integratorUrl = encodeURIComponent(window.location.href.toString())

const hostname = 'ecolab.ademe.fr/apps/climat/'
const src = `https://nosgestesclimat-ecn.netlify.app/apps/climat/`

const iframe = document.createElement('iframe')

const iframeAttributes = {
	src,
	style:
		'border: none; width: 100%; display: block; margin: 10px auto; min-height: 1000px',
	allowfullscreen: true,
	webkitallowfullscreen: true,
	mozallowfullscreen: true,
}
for (var key in iframeAttributes) {
	iframe.setAttribute(key, iframeAttributes[key])
}
iframeResize({}, iframe)

script.parentNode.insertBefore(iframe, script)
