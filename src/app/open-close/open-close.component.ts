import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { getCurrencySymbol } from "@angular/common";

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations : [
    trigger('openClose', [

      // state('open', style({
      //   border : '2px solid green',
      //   background : 'green',
      // })),

      // state('close', style({
      //   border : '2px solid red',
      //   background : 'red',
      // })),
  
      // transition('open => close', animate('2s')),

      // transition('close => open', animate('2s')),

      transition(':enter', [
        style({opacity : 0}),
        
      ])

    ]),
  ],
})
export class OpenCloseComponent {
  isOpen : boolean = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
