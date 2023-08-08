import { Injectable } from '@angular/core';
// import { ALBUMS, ALBUM_LISTS } from "./mock-albums";
import { Album, List, SortAlbumCallback } from "./album";
import { map, Observable, Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  subjectAlbum = new Subject<Album>();

  albumDuration !: Album[];
  ALBUMSCOPY !: Album[];
  
  private _albumsUrl : string = environment.albumUrl;
  private _albumListUrl : string = environment.albumListUrl;

  /**
   * Elle notifie aux abonnés la page actuelle
   */
  sendCurrentNumberPage = new Subject<number>;

  constructor(
    private http : HttpClient
  ) { }

  /**
   * Fonction qui retourne un tableau contenant tous les albums
   * @returns Album []
   */
  getAlbums() : Observable<Album[]> { // Retourne tous les albums
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      // ordonner les albums par ordre de durée décroissante
      map((albums : Album[]) => {
        return albums.sort((a : Album, b : Album) => b.duration - a.duration);
      })
    );
    // return this._albums.sort((a, b) => b.duration - a.duration);
  }


  /**
   * Fonction qui retourne un album
   * @param id string
   * @returns Album | undefined
   */
  getAlbum(id : string) : Observable<Album> | undefined  { // Retourne un album
    return this.http.get<Album>(this._albumsUrl + "/" + id).pipe(
      map((album : Album) => album)
    );
  }


  /**
   * Fonction qui retourne une liste d'album
   * @param id string
   * @returns string[] | undefined
   */
  getAlbumList(id : string) : Observable<string[]> | undefined { // Retourne la liste d'un album
    return this.http.get<List>(this._albumListUrl + "/" + id).pipe(
      map(currentList => currentList.list)
    );
    // this._albumList.find((listelment) => listelment.id === id)?.list;
  }

  /**
   * Fonction qui renvoie la longueur du tableau
   * @returns number
   */
  count() : Observable<number> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((album : Album[]) =>  album.length)
    );
    // this._albums.length
  }


  /**
   * Fonction qui effectue une rechercher
   * @param searchValue string : Mot clé de la recherche
   * @returns Album[] | undefined
   */
  search(searchValue : string) : Observable<Album[]>{
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums : Album[]) => {
        // parcourir le tableau d'album
        return albums.filter(albumcurrent => {
          // Retourner les albums dont le titre contient la valeur de la variable searchValue
          albumcurrent.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        });
      })
    );

    // this._albums.filter(albumcurrent => albumcurrent.title.toLowerCase().includes(searchValue.trim().toLowerCase()));
  }

  /**
   * Fonction qui ordonne les élements du tableau en fonction de la durée des albums
   * @param callback (a : Album, b : Album) : number
   * @returns AlbumService
   
  order(callback : SortAlbumCallback) : AlbumService{
    this._albums.sort(callback);
    return this; 
  }

  /**
   * Fonction qui renvoie une partie du tableau avec des limit définies avec start et end
   * @param start number
   * @param end number
   * @returns AlbumService
 
  limit(start : number, end : number) : AlbumService {    
    this._albums = this._albums.slice(start, end);
    return this;
  }
  */

  /**
   * Fonction qui renvoie les albums ordonnés
   * @param start number
   * @param end number
   * @returns Album[]
   */
  paginate(start : number, end : number) : Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums) => albums.sort((a : Album, b : Album) => b.duration - a.duration)
                            .slice(start, end)),
    );

    // this._albums
    //                   .sort((a : Album, b : Album) => b.duration - a.duration)
    //                   .slice(start, end);
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

  /**
   * Méthode qui permet de changer le status d'un album à "on"
   * @param album : l'alblum dont le status doit passer à on
   */  
  switchOn( album : Album) : void{
    album.status = "on";
    this.http.put<void>(this._albumsUrl + '/' + album.id, album)
              .subscribe({
                next : (data) => console.log(data),
                error : (err) => console.warn(err),
                complete : () => this.subjectAlbum.next(album)
              })

    /*
    this._albums.forEach(al => {
      // Si l'album actuel est celui qu'on joue
      if (al.id === album.id) {
        // mettre son status à "on"
        al.status = "on";
        album.status = "on";
      } else {
        // Sinon mettre son status à "off"
        al.status = "off"
      }
    });
    // envoyer une notification à tous les abonnés
    this.subjectAlbum.next(album);
    */
  }


  /**
   * Méthode qui permet de changer le status d'un album à "off"
   * @param album : l'alblum dont le status doit passer à off
   */
  switchOff( album : Album) {
    album.status = "off";
    /** 
     * renvoie un observable et ne s'exécute qu'à la subscription.
     * Il faut donc y souscrire pour l'exécuter
     */
    this.http.put<void>(`${this._albumsUrl}/${album.id}`, album)
  }
}
