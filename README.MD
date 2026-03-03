# E-commerce Website

Un site e-commerce construit avec React et Chakra UI. Ce projet a été une aventure d'apprentissage intense, particulièrement avec Chakra UI que je découvrais.

## Contexte du projet

Ce projet est né de la volonté de créer une application e-commerce complète avec React. J'ai choisi d'utiliser Chakra UI pour le styling, mais cela s'est avéré bien plus complexe que prévu...

## Fonctionnalités implémentées

- **Navigation fluide** entre catégories de produits
- **Gestion complète du panier** (ajout, suppression, mise à jour des quantités)
- **Pages produits détaillées** avec images, descriptions et options
- **Système d'authentification** (inscription, connexion, déconnexion)
- **Design responsive** qui s'adapte à tous les écrans
- **Gestion des états** avec des contextes dédiés

## Technologies utilisées

- **React** (18+) - Pour la construction de l'interface utilisateur
- **React Router** (v6) - Pour la navigation entre pages
- **Chakra UI** - Pour le styling et les composants (apprentissage difficile mais enrichissant)
- **TypeScript** - Pour un typage fort et une meilleure expérience de développement
- **React Query** - Pour la gestion des requêtes API (optionnel dans ce projet)
- **LocalStorage** - Pour la persistance des données côté client

## Les défis rencontrés

### Avec Chakra UI

J'ai **beaucoup galéré** avec Chakra UI au début, surtout pour :

1. **Les problèmes de layout** :
   - Les composants ne s'affichaient pas comme prévu
   - Les espacements (`gap`, `spacing`, `margin`, `padding`) étaient source de bugs
   - Les comportements responsives étaient parfois imprévisibles

2. **Les incompatibilités de types** :
   - Certains composants avaient des props qui changeaient entre les versions
   - Les erreurs TypeScript étaient fréquentes avec les interfaces de Chakra

3. **La documentation parfois obscure** :
   - Difficile de trouver des exemples clairs pour certains cas d'usage
   - Certains composants avaient des comportements inattendus

4. **Les conflits de styles** :
   - Les styles par défaut de Chakra entraient parfois en conflit avec mes styles personnalisés
   - La surcharge des thèmes était complexe à maîtriser

### Avec l'architecture

- **Gestion des états** entre les différents composants
- **Séparation des responsabilités** entre les conteneurs et les composants présentations
- **Intégration des hooks personnalisés** avec les contextes

## Solutions trouvées

1. **Pour Chakra UI** :
   - J'ai créé des composants réutilisables avec des props bien typées
   - J'ai utilisé les outils de développement de Chakra pour déboguer les layouts
   - J'ai simplifié les composants en les décomposant en plus petits morceaux

2. **Pour l'architecture** :
   - J'ai adopté une approche modulaire avec des fichiers dédiés pour chaque responsabilité
   - J'ai utilisé des interfaces TypeScript claires pour éviter les erreurs de typage
   - J'ai séparé la logique métier des composants d'affichage

3. **Pour les bugs de layout** :
   - J'ai utilisé les outils de développement du navigateur pour inspecter les éléments
   - J'ai ajouté des bordures temporaires pour visualiser les conteneurs
   - J'ai testé systématiquement sur différents écrans

## Installation

1. Clonez le repository :
   ```bash
   git clone https://github.com/ton-utilisateur/ecommerce-website.git
