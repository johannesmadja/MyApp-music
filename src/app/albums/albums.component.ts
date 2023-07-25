import { Component ,  OnInit } from '@angular/core';


// Importation de la définition de la classe et les albums

import { Album } from "../album";
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  
  titlePage : string = "Page principale Albums Music";
  title : string = "app music"
  selectedAlbum !: Album | undefined;
  albums !: Album[];
  status : string | null = null;
  tag : string = "Play";

  constructor(private AlbumService : AlbumService) {}

  ngOnInit() {
    this.albums = this.AlbumService.getAlbums();
    
    // this.AlbumService.getAlbums();
      console.log(this.albums);
      console.log(this.AlbumService.count());   
  }
  
  onSelect(album : Album) {
    this.selectedAlbum = this.AlbumService.getAlbum(album.id);
  }

  playParent($event : Album) {
    this.status = $event.id;
  }

  onChangesEmit($event : any) {
    this.albums = $event;
  }
}
