# O'Michel

Le projet O'Michel va mettre en place une interface de streaming vidéo avec des salons où pourront se retrouver des personnes pour discuter de la vidéo diffusée.

## Technologies

- PostgreSQL
- EJS
- NodeJS / express
- Socket.io
- jsonwebtoken

## Charte graphique

Les couleurs présentes sur le site seront : noir / Bleu / f0f

## Pages

Liste des pages du site :

- homepage (url : "/")
- page de login (url : "/login")
- page d'inscription (url : "/subscribe)
- page de visionnage (url : "/watch")

### Homepage

La homepage est la page d'accueil de notre site.

Elle doit comporter un menu de navigation avec les liens suivant :

- homepage
- login
- s'inscrire
- entrer dans un salon

### Page de login

La page de login doit permettre à un utilisateur non connecté de se connecter.

Elle doit comporter un menu de navigation avec les liens suivant :

- homepage
- s'inscrire

On se connectera via un formulaire (login/mot de passe)

### Page d'inscription

La page d'inscription permet à un utilisateur de venir s'inscrire sur le site.

Elle doit comporter un menu de navigation avec les liens suivant :

- homepage
- login

On pourra s'inscrire via un formulaire qui devra comporter un champ pour le login (vérifier qu'il soit unique), un champ pour le mot de passe et une case à cocher pour accepter nos conditions (il va falloir qu'on y pense).

### Page d'un salon

Au départ, on ne va prévoir qu'un salon unique pour tous les utilisateurs.

Sur cette page, on doit avoir un espace pour diffuser la vidéo, un espace pour chatter avec les utilisateurs en train de regarder.