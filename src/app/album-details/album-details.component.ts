import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Album } from "../album";
import { ALBUMS } from "../mock-albums";
import { AlbumService } from '../album.service';  


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album du parent dans le sélecteur ]

  @Input() album !: Album | undefined;
  @Output() onPlay : EventEmitter<Album> = new EventEmitter();
  albumList !: string[] | undefined;
  indexRandom : number[] = [];
  valueIndex !: number;
  randomNumber !: number;



  constructor(private AlbumService : AlbumService) {}

  ngOnInit(): void {
    console.log(this.album);
  }
  
  ngOnChanges()  {
    if (this.album) {
      this.albumList = this.AlbumService.getAlbumList(this.album.id); 
    }
  }

  play (album : Album) {
    this.onPlay.emit(album);
    this.AlbumService.switchOn(album);
  }

  randomList() {
    if (this.album && this.albumList) {  
      this.indexRandom = [];
      let newAlbumList : string[] = [];
      while (this.indexRandom.length < this.albumList.length) {
        this.randomNumber = Math.floor(Math.random() * this.albumList.length);
        if (this.indexRandom.includes(this.randomNumber)) {
          this.indexRandom;
        } else {
          this.indexRandom.push(this.randomNumber)
        }
      }
      
    for (let i = 0; i < this.indexRandom.length; i++) {
      this.valueIndex = this.indexRandom[i]
      newAlbumList[i] = this.albumList[this.valueIndex]
    }

    this.albumList = newAlbumList;   
    }
  }
 
}
