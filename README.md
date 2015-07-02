# testORM

DEPENDANCES
npm, bower grunt

GITHUB
- Cloner le depot  : https://github.com/cdcvidal/testORM
git clone  https://github.com/cdcvidal/testORM

INSTALLATION BOWER
- dans le dossier testORM
npm install grunt

MANUELLEMENT
- dans le dossier www/bower_components/persistence/lib/
ajouter manuellement le provider cordova sql (en pièce jointe)
ou commenter les appels à cette bibliothèque

CORDOVA
- Mettre le tout dans un projet Cordova
- Compiler le projet JS faire 
grunt release (à la racine du projet )
- puis renommer le dossier www en www-dev et build en www
- lancer cordova run android
 
