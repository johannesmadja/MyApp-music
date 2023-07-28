import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { AlbumService } from "../album.service";
import { Album } from '../album';


@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit{
  /** nombre total d'albums */
  total : number = 0;

  /** nombre d'albums(s) par page (stocké dans les variables d'environnement) */
  perPage : number;

  /** nombre de boutons à générer */
  numberPages : number = 0;

  /** tableau  réunissant le label de chaque page */
  pages : number[] = [];

  constructor(private Albumservice : AlbumService) {
    this.perPage = this.Albumservice.paginateNumberPage();
  }

  ngOnInit(): void {
    this.total = this.Albumservice.count();
    this.numberPages = Math.ceil(this.total / this.perPage);

    for (let i = 1; i <= this.numberPages; i++) {
      this.pages.push(i);
    }


  }

  }
