import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Album } from "../album";
import { AlbumService } from '../album.service';
import { fadeInAnimation } from "../animation.module";


@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations : [fadeInAnimation]

})
export class AlbumDescriptionComponent implements OnInit{

  album !: Album | undefined;

  constructor(
    private route : ActivatedRoute,
    private aS : AlbumService,
  ) { }

  ngOnInit(): void {
    console.log(this.route);
    
      const id  = this.route.snapshot.params["id"];
      // Récupérer le détail d'un album
      this.album = this.aS.getAlbum(id);
      
  }

}
