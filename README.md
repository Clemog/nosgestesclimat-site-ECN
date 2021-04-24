# Open-source carbon footprint calculator for Universities

![Sustainabilit_2021_04_cover](miscellaneous/images_article/cover_350_496.jpg?raw=true 'Sustainability April 2021 cover')

## English description

### Goals and scope

Individual carbon footprint estimator developed within the scope of the Centrale Nantes university, based on the new open-source French national simulator called “Nos Gestes Climat” proposed by ABC (Association Bilan Carbone (Association for the implementation of Carbon footprint assessment)) and ADEME (French Environment and Energy Management Agency).

### Installation

You need to clone another repo, https://github.com/SustainabilityCN/nosgestesclimat-model-ECN, in the same directory than this one (and rename nosgestesclimat-model-ecn folder as ecolab-data). The model YAML files will then be loaded locally (no installation needed, they are loaded by webpack), and your changes to these files will refresh the UI instantly!

Then run this command in the nosgestesclimat-site-ECN folder :

`yarn && yarn start`

Open a web browser and go to http://localhost:8080  
Your local version of the simulator would pop up:

## Version française

### Ecolab-climat, c'est quoi ?

Un simulateur d'empreinte carbone personnelle à l'année, utilisant le [modèle ECN](https://github.com/SustainabilityCN/nosgestesclimat-model-ECN).

Pour contribuer au modèle et données sous-jacentes (calculs, textes, questions, suggestions de saisie), rendez-vous [ici](https://github.com/betagouv/ecolab-data/blob/master/CONTRIBUTING.md).

Pour tout ce qui touche à l'interface (style d'un bouton, graphique de résultat, code javascript, etc.) c'est ici dans les [_issues_](https://github.com/betagouv/ecolab-climat/issues).

> 🌐 Most of the documentation (including issues and the wiki) is written in french, please raise an [issue](https://github.com/betagouv/ecolab-climat/issues/new) if you are interested and do not speak French.

### Et techniquement ?

C'est pour l'instant un _fork_ d'un simulateur de cotisations sociales, mon-entreprise.fr, lui-même forké pour futur.eco, qui permet de coder en français des règles de calculs, dans un langage (qui se veut) simple et extensible. De ces règles de calcul, des simulateurs (pour l'utilisateur lambda) et des pages de documentation qui expliquent le calcul (pour l'expert ou le curieux) sont générés automatiquement.

La bibliothèque de calcul publicodes, qui fournit le langage du modèle, vient d'être publiée comme un [paquet NPM](https://www.npmjs.com/package/publicodes), qui sera bientôt intégré ici pour simplifier énormément la base de code et se concentrer sur le domaine métier.

### Installation

You need to clone another repo, https://github.com/betagouv/ecolab-data, in the same directory than this one. The model YAML files will then be loaded locally (no installation needed, they are loaded by webpack), and your changes to these files will refresh the UI instantly.

Then run this command in this repo :

`yarn && yarn start`
