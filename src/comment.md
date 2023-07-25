
## LES HOOKS
Les hooks sont des interfaces par défaut :

** OnInit : Ce charge à l'initialisation du DOM
Toutes classes qui implémente un hook (interface) se doit d'implémenter également toutes les méthodes de cet interface.
La seule méthode du OnInit est le ngOnInit : qui permet d'effectuer une action après initialisation du DOM ou compilation 
du code et création du composant qui l'implément 

** OnChanges : Se déclenche lorsqu'il y a des changement au niveau du composant qui l'implemente

``` ts
export class AlbumDetailsComponent implements OnInit, OnChanges {

  ngOnInit() : void {
  }

  ngOnChanges() : void {
  }

}
```

## LES SERVICES
C'est un classe qui regroupe des propriétés partagées.

# Les principes SOLID
Les principes SOLID sont un ensemble de cinq principes de conception de logiciels qui ont été popularisé par Martin C.Robert
Ces principes vises à améliorer la qualité du code, la maintenabilité et la flexibilité d'une application en favorisant une conception orientée object solide et en évitant les dépendances indésirables entre les différents parties du code. 

Les principes SOLID  sont : 
1. Principe de Responsabilité Unique (Single Responsability Principle)
2. Principe d'Ouverture/Fermeture (Open / Close Principle)
3. Principe de Substitution de Liskov (Liskov Sunstitution principle)
4. Principe de Ségrégation d'Interfaces (Interfacee Segregation principle)
5. Principe d'Inversion de Dependance (Dependency Inversion Principle)

Il est préferable de mettre les valeurs retourner à l'intérieures de mon servive en 'private' ou 'protected'

# Ajout des tags aux instantanées
- git tag -a v1.0.0 -m "Ma version 1.0.0"
- git log (pour voir toutes les versions)
- git push  origin master
- git push origin --tags 