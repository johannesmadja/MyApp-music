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

  /** Emetter d'évènement */
  @Output() setPaginate : EventEmitter<{start : number, end : number}> = new EventEmitter();

  /** variable qui stocke la page actuelle */
  currentPage : number = 1; // par défaut égale à 1

  constructor(private Albumservice : AlbumService) {
    this.perPage = this.Albumservice.paginateNumberPage();
  }

  ngOnInit(): void {
    this.Albumservice.count().subscribe({
      next : (count) => {
        this.total = count;
        this.numberPages = Math.ceil(this.total / this.perPage);
        for (let i = 1; i <= this.numberPages; i++) {
          this.pages.push(i);
        }
      }
    });

  }

  next() {
    // si nous avons déjà atteint la dernière page de pagination
    if (this.currentPage >=  this.numberPages) {
      return; // currentPage s'arrete à la dernière page
    } else {
      this.currentPage++;
    }

    // Demander au parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

  previous() {
    if (this.currentPage === 1) {
      return;
    } else {
      this.currentPage--;
    }

    // Demander au parent d'afficher les albums précedents dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }
 

  changePage(page : number) {
    this.currentPage = page;
    // Demander au parent d'afficher les albums précedents dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

  /**
   * Foncton qui retourne le sous ensemble d'albums à afficher
   * @param page page courante
   * @returns un sous ensemble du tableau en fonction de la page courante
   */
  setAlbums(page : number) : {start : number, end : number} {
    const start = (page - 1) * this.perPage;
    const end = start + this.perPage;

    return {start, end};
  }

  }
