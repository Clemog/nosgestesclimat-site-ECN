# Open-source carbon footprint calculator for Universities

![Sustainabilit_2021_04_cover](miscellaneous/images_article/cover_350_496.jpg?raw=true 'Sustainability April 2021 cover')

The article is available [here](https://www.mdpi.com/2071-1050/13/8/4315), feel free to read it, share it and cite this publication! 

Here is a short introduction : 
The mitigation of climate change requires a collective action of all individuals and organizations, including universities. Centrale Nantes, a French “Grande école” [technical university], started to raise awareness about their greenhouse gas emissions with the assessment of their 2018 carbon footprint. An individual carbon footprint calculator has been developed within the scope of the university, based on the new open-source French national simulator called “Nos Gestes Climat” [Our Climate Action] proposed by the “Association Bilan Carbone” [Carbon Footprint] and ADEME (French Environment and Energy Management Agency). The aim is to let the users identify the major emission sources related to their professional activities and offer quantified advice to take action. Open-source code availability and multi-agent collaborations are key factors in developing sustainability initiatives.

## English description

### Goals and scope

Individual carbon footprint estimator developed within the scope of the Centrale Nantes university, based on the new open-source French national simulator called “Nos Gestes Climat” proposed by ABC (Association Bilan Carbone (Association for the implementation of Carbon footprint assessment)) and ADEME (French Environment and Energy Management Agency).

An article, published in April 2021, presents the approach adopted in this project. ➡️ https://www.mdpi.com/2071-1050/13/8/4315

### Installation

You need to clone another repo, https://github.com/SustainabilityCN/nosgestesclimat-model-ECN, in the same directory than this one. The model YAML files will then be loaded locally (no installation needed, they are loaded by webpack), and your changes to these files will refresh the UI instantly!

Then run this command in the nosgestesclimat-site-ECN folder :

`yarn && yarn start`

Open a web browser and go to http://localhost:8080  
Your local version of the simulator should pop up.


> 🌐 Most of the documentation (including issues and the wiki) is written in french, please raise an [issue](https://github.com/betagouv/ecolab-climat/issues/new) if you are interested and do not speak French.

## Version française

### Qu'est-ce que c'est ?

“Nos GEStes Climat ECN” (NGC-ECN) permet d'évaluer l’empreinte carbone individuelle professionnelle annuelle. Les postes d’émissions sont classées par grandes catégories (profil, alimentation, transport, numérique, divers). Le calcul permet à l’utilisateur de se situer par rapport aux objectifs climatiques et surtout de passer à l’action au travers d’actions personnalisées.

Il est basé sur le simulateur Nos GEStes Climat créé par Datagir, une start-up d'État. Ce simulateur est inspiré du modèle MicMac des associations Avenir Climatique et TaCa.

### Qui le développe ?

Ce simulateur d'empreinte carbone liée à l'activité au sein de Centrale Nantes est développé par les membres du pôle informatique de l'équipe-projet Neutralité Carbone. La version nationale de NGC est développée par une équipe de beta.gouv.fr, financée par l’ADEME (Agence de la transition écologique) en partenariat avec l’Association Bilan Carbone (ABC). Cette version est disponible [ici](nosgestesclimat.fr) ! 

### Et techniquement ?

NGC-ECN est un fork du simulateur national ["Nos GEStes Climat"](https://github.com/datagir/nosgestesclimat-site). Le code du simulateur est divisé en 2 dépôts. Le premier contient le modèle de calcul du simulateur et est disponible [ici](https://github.com/SustainabilityCN/nosgestesclimat-model-ECN). Le second correspond à l’interface et vous êtes au bon endroit !

Pour contribuer au modèle et données sous-jacentes (calculs, textes, questions, suggestions de saisie), rendez-vous [ici](https://github.com/SustainabilityCN/nosgestesclimat-model-ECN/blob/master/CONTRIBUTING.md).

Pour tout ce qui touche à l'interface (style d'un bouton, graphique de résultat, code javascript, etc.) c'est ici dans les [_issues_](https://github.com/ustainabilityCN/nosgestesclimat-site-ECN/issues).

### Installation

Pour débuter, il est nécessaire de cloner chacun des deux dépôts, [model](https://github.com/ustainabilityCN/nosgestesclimat-model-ECN) et [site](https://github.com/ustainabilityCN/nosgestesclimat-site-ECN), vers le même dossier local (à la même racine donc). Via le terminal,  il faut ensuite se déplacer dans nosgestesclimat-site-ecn et lancer la commande “yarn” qui installera les paquets puis, “yarn start” :

`yarn && yarn start`

Il suffit ensuite d’ouvrir son navigateur, l’application apparaît à l’adresse : http://localhost:8080/. Toute modification du modèle ou de l’interface sera visible directement sur le navigateur. Les fichiers du modèle YAML sont chargés par webpack, et les modifications apportées à ces fichiers seront actualisées dans l'interface utilisateur instantanément.

