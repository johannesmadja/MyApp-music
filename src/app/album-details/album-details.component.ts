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
  currentSrc !: string | undefined;


  constructor(private AlbumService : AlbumService) {}

  ngOnInit(): void {
    console.log(this.album);
  }
  
  ngOnChanges()  {
    if (this.album) {
      this.albumList = this.AlbumService.getAlbumList(this.album.id); 
      this.changeCover(this.album.id);
    }
  }

  changeCover(id : string) : void {
    if (this.album) {
      this.currentSrc = ALBUMS.find(cov => cov.id === id)?.url;
    }
  }

  play (album : Album) {
    this.onPlay.emit(album);
  }
 

}
