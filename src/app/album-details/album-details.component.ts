import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Album, cover } from "../album";
import { ALBUM_LISTS } from "../mock-albums";
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album du parent dans le sélecteur ]

  @Input() album !: Album;
  @Output() onPlay : EventEmitter<Album> = new EventEmitter();
  albumList !: string[] | undefined;
  currentSrc !: string;


  coverImage : cover[] = [
    {
      id :"1",
      src : "../../assets/images/default_image1.jpg",
    },

    {
      id : "2",
      src : "../../assets/images/default_image2.jpg",
    },

    {
      id : "3",
      src : "../../assets/images/default_image3.jpg",
    },

    {
      id : "4",
      src : "../../assets/images/default_image4.jpg",
    },

    {
      id : "5",
      src : "../../assets/images/default_image5.jpg",
    },

    {
      id : "6",
      src : "../../assets/images/default_image6.jpg",
    },

    {
      id : "7",
      src : "../../assets/images/default_image7.jpg",
    },

    {
      id : "8",
      src : "../../assets/images/default_image8.jpg",
    }
  ]


  constructor(private AlbumService : AlbumService) {}

  ngOnInit(): void {
    console.log(this.album);
  }
  
  ngOnChanges()  {
    if (this.album !== undefined) {
      this.albumList = this.AlbumService.getAlbumList(this.album.id); //ALBUM_LISTS.find((listelment) => listelment.id === this.album.id)?.list;

      this.changeCover();
    }
  }

  changeCover() : void {
    for (const cover of this.coverImage) {
      if (this.album.id === cover.id) {
        this.currentSrc = cover.src;
      }
    }
  }

  play (album : Album) {
    this.onPlay.emit(album);
  }
 

}
