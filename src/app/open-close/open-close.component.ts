import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { getCurrencySymbol } from "@angular/common";
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations : [
    trigger('openClose', [
      /*
      state('open', style({
        border : '2px solid green',
        background : 'green',
      })),

      state('close', style({
        border : '2px solid red',
        background : 'red',
      })),
  
      transition('open => close', animate('2s')),

      transition('close => open', animate('2s')),
      */
      transition(':enter', [
        style({opacity : 0}),
        
      ])

    ]),
  ],
})
export class OpenCloseComponent implements OnInit{

  ngOnInit(): void {
    // On s'abonne à l'obervable
      this.myObservable.subscribe((album) => {
        console.log(album);
        
      });
  }

  // Création d'un observable à laquelle on passsera une fonction
  /**
   * La foncton s'appelle un (oberver) => {}) qui est de type observeur. 
   * Tout ceci est le code à exécuté quand on récupère la donnée ou quand quelqu'un s'abonne (Subscriber)
   * 
   */
  myObservable = new Observable((observer : Observer<string>) => {
    console.log("Données disponibles");
    // Nous allons à présent envoyez des données à l'observer

    setTimeout( () => {observer.next("album 1")}, 1000);
    setTimeout( () => {observer.next("album 2")}, 2000);
    setTimeout( () => {observer.next("album 3")}, 3000);
    setTimeout( () => {observer.next("album 4")}, 4000);
    setTimeout( () => {observer.next("album 5")}, 5000);
    
  });

    isOpen : boolean = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
