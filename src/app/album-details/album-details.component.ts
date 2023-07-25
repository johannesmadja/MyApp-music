import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Album, cover } from "../album";
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
    },

    {
      id : "9",
      src : "../../assets/images/default_image9.jpg",
    },

    {
      id : "10",
      src : "../../assets/images/default_image10.jpg",
    }
  ]


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
      this.currentSrc = this.coverImage.find(cov => cov.id === id)?.src;
    }
  }

  play (album : Album) {
    this.onPlay.emit(album);
  }
 

}
