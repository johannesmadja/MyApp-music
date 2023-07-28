import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app-music"

  valueSend !: string ;

  parentReceive($event : string) {
    this.valueSend = $event;
    console.log("Parent : " + $event);
  }

}


