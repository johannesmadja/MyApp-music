import { Component ,  OnInit} from '@angular/core';
import { fadeInAnimation } from "../animation.module";


// Importation de la définition de la classe et les albums

import { Album } from "../album";
import { AlbumService } from '../album.service';
// import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations : [fadeInAnimation]
})
export class AlbumsComponent implements OnInit{

  
  titlePage : string = "Page principale Albums Music";
  title : string = "app music";
  selectedAlbum !: Album | undefined;
  albums !: Album[];
  // albumsOnInit : Album[] = ALBUMS;
  status : string | null = null;
  tag : string = "Play";

  constructor(private AlbumService : AlbumService) {}

  ngOnInit() {
    this.AlbumService
                      .paginate(0, this.AlbumService.paginateNumberPage())
                      .subscribe({
                        next : (alb) => {
                          this.albums = alb;
                        }
                      });
                                  // .order((a : Album, b : Album) => b.duration - a.duration)
                                  // .limit(0, this.AlbumService.count())
                                  // .getAlbums(); // limit (0, this.AlbumService.count())                                        
  }   
  

  onSelect(album : Album) {
  this.AlbumService.getAlbum(album.id)?.subscribe({
    next : (a) => {
      this.selectedAlbum = a;
    }
  });
  }

  playParent($event : Album) {
    this.status = $event.id;
  }

  albumFilter(album : Album[]) {
    this.albums = album;
  }

  paginateParent($event : Album[]) {
    this.albums = $event;
  }

  onSetPaginate($event : {start : number, end : number}) {
    this.AlbumService.paginate($event.start, $event.end).subscribe({
      next : (pag) => {
        this.albums = pag;
      }
    });
  }
}
