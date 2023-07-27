import { Component, Output, EventEmitter} from '@angular/core';
import { AlbumService } from "../album.service";
import { Album } from '../album';


@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  constructor(private Albumservice : AlbumService) {}
  @Output() paginateAlbum  = new EventEmitter<Array<Album>>

  /**
   * Fonction qui renvoie le nombre d'album à afficher sur une page avec la pagination
   * @param a index du premier album à renvoyer
   * @param b index du dernier zlbum à renvoyer
   */
  paginateDisplay(a : number, b : number) {
    const pagination = this.Albumservice.paginate(a, b);
    this.paginateAlbum.emit(pagination);
  }

  previous() {

  }

  next() {
    
  }
 
}
