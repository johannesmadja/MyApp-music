import { Component ,  OnInit } from '@angular/core';

// Importation de la définition de la classe et les albums

import { Album } from "../album";
import { ALBUMS } from "../mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  selectedAlbum !: Album;
  titlePage : string = "Page principale Albums Music";
  title : string = "app music"
  albums : Album[] = ALBUMS;

  constructor() {}
  ngOnInit(): void {
      
  }
  
  onSelect(album : Album) {
    this.selectedAlbum = album;
  }

}
