import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "app-music"
  valueSend !: string ;
  timerObservable !: Observable<string>;
  count !: string;

  constructor() {}

  ngOnInit(): void {
      this.timerObservable = interval(1000).pipe(
        take(12 * 3600),
        map(num => {
          const hours = Math.floor(num / 3600);
          const minutes = Math.floor(num / 60);
          return `${this.format(hours)} h ${this.format(minutes - (hours * 60))} min ${this.format(num - (minutes * 60))} s`
        })
      );

      this.timerObservable.subscribe(num => {
        this.count = num;
      });
  }

  format(num : number) : string {
    return (num < 10 ? "0" : "") + num;
  }


  parentReceive($event : string) {
    this.valueSend = $event;
    console.log("Parent : " + $event);
  }

}


