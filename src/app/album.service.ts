import { Injectable } from '@angular/core';
import { ALBUMS, ALBUM_LISTS } from "./mock-albums";
import { Album, List } from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumDuration !: Album[];
  ALBUMSCOPY !: Album[];
  
  private _albums : Album[] = ALBUMS;
  private _albumList : List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums() : Album[] { // Retourne tous les albums
    this.albumDuration = this._albums.sort(function (a : Album , b : Album)  { return b.duration - a.duration});
    return this.albumDuration;
  }

  getAlbum(id : string) : Album | undefined  { // Retourne un album
    return this._albums.find(album => album.id === id);
  }

  getAlbumList(id : string) : string[] | undefined { // Retourne la liste d'un album
    return this._albumList.find((listelment) => listelment.id === id)?.list;
  }

  count() : number {
    return this._albumList.length
  }


  search(searchValue : string) : Album[] | undefined{
    return this._albums.filter(albumcurrent => albumcurrent.title.toLowerCase().includes(searchValue.toLowerCase()));
  }

  /** 
  paginate(start : number, end : number) : Album[] {
    this.albumDuration.sort(function (a:number, b:number) : number { return b - a});
    this.ALBUMSCOPY = ALBUMS.slice();

  }
  */

  
}
