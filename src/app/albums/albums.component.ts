import { Component ,  OnInit } from '@angular/core';


// Importation de la définition de la classe et les albums

import { Album } from "../album";
import { AlbumService } from '../album.service';
import { ALBUMS } from "../mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  
  titlePage : string = "Page principale Albums Music";
  title : string = "app music"
  selectedAlbum !: Album;
  albums !: Album[];
  tag : string = "Play";

  constructor(private AlbumService : AlbumService) {}

  ngOnInit() {
    // this.AlbumService.getAlbums();
      this.albums = this.AlbumService.getAlbums();
      console.log(this.albums);
      console.log(this.count());
      
      
  }
  
  onSelect(album : Album) {
    this.selectedAlbum = this.AlbumService.getAlbum(album.id);
  }

  playParent(album : Album) {
    for (const currentAlbum of this.albums) {
      if (album.id === currentAlbum.id) {
        album.status = "on";
      }else {
        currentAlbum.status = "off";
      }
    }
  }

  count() : number {
    return ALBUMS.length
  }
}
