import { Injectable } from '@angular/core';
import { ALBUMS, ALBUM_LISTS } from "./mock-albums";
import { Album, List, SortAlbumCallback } from "./album";
import { Subject } from "rxjs";
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumDuration !: Album[];
  ALBUMSCOPY !: Album[];
  
  private _albums : Album[] = ALBUMS;
  private _albumList : List[] = ALBUM_LISTS;

  /**
   * Elle notifie aux abonnés la page actuelle
   */
  sendCurrentNumberPage = new Subject<number>;

  constructor() { }

  /**
   * Fonction qui retourne un tableau contenant tous les albums
   * @returns Album []
   */
  getAlbums() : Album[] { // Retourne tous les albums
    return this._albums.sort((a, b) => b.duration - a.duration);
  }


  /**
   * Fonction qui retourne un album
   * @param id string
   * @returns Album | undefined
   */
  getAlbum(id : string) : Album | undefined  { // Retourne un album
    return this._albums.find(album => album.id === id);
  }


  /**
   * Fonction qui retourne une liste d'album
   * @param id string
   * @returns string[] | undefined
   */
  getAlbumList(id : string) : string[] | undefined { // Retourne la liste d'un album
    return this._albumList.find((listelment) => listelment.id === id)?.list;
  }

  /**
   * Fonction qui renvoie la longueur du tableau
   * @returns number
   */
  count() : number {
    return this._albums.length
  }


  /**
   * Fonction qui effectue une rechercher
   * @param searchValue string : Mot clé de la recherche
   * @returns Album[] | undefined
   */
  search(searchValue : string) : Album[] | undefined{
    return this._albums.filter(albumcurrent => albumcurrent.title.toLowerCase().includes(searchValue.trim().toLowerCase()));
  }

  /**
   * Fonction qui ordonne les élements du tableau en fonction de la durée des albums
   * @param callback (a : Album, b : Album) : number
   * @returns AlbumService
   */
  order(callback : SortAlbumCallback) : AlbumService{
    this._albums.sort(callback);
    return this; 
  }

  /**
   * Fonction qui renvoie une partie du tableau avec des limit définies avec start et end
   * @param start number
   * @param end number
   * @returns AlbumService
   */
  limit(start : number, end : number) : AlbumService {    
    this._albums = this._albums.slice(start, end);
    return this;
  }


  /**
   * Fonction qui renvoie les albums ordonnés
   * @param start number
   * @param end number
   * @returns Album[]
   */
  paginate(start : number, end : number) : Album[] {
    return this._albums
                      .slice(start, end)
                      .sort((a : Album, b : Album) => b.duration - a.duration);
  }


  /**
   * Méthode qui renvoie le nombre d'album qu'on 
   * aura par page
   */
  paginateNumberPage() : number {
    return environment.numberPage;
  }


  /**
   * Méthode qui signale à tous les composants la page actuelle
   * @param numberPage nombre de pas
   * @returns number
   */
  currentPage (numberPage : number) {
    return this.sendCurrentNumberPage.next(numberPage);
  }
}
