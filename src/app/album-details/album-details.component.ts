import { Component, OnInit, Input} from '@angular/core';
import { Album } from "../album";
import { ALBUM_LISTS } from "../mock-albums";


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  // Classe Input permet de récupérer les data de l'enfant
  // album est liée à une entrée [album du parent dans le sélecteur ]

  @Input() album !: Album;
  albumList !: string[] | undefined;

  constructor() {}

  ngOnInit(): void {
      console.log(this.album);
  }

  ngOnChanges()  {
    if (this.album !== undefined) {
      this.albumList = ALBUM_LISTS.find((listelment) => listelment.id === this.album.id)?.list;
    }
  }

}
