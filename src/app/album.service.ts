import { Injectable } from '@angular/core';
import { ALBUMS, ALBUM_LISTS } from "./mock-albums";
import { Album, List } from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  singlealbum !: Album;
  albumList !: string[]; 
  albumDuration : number[] = [600,480,360,840,840,360,240,240,240,240];
  newAlbumCollection : Album[] = [];

  constructor() { }

  getAlbums() : Album[] { // Retourne tous les albums
    this.albumDuration.sort(function (a:number, b:number) : number { return b - a});
    for (let i = 0; i < this.albumDuration.length; i++) {
      for (let y = 0; y < ALBUMS.length; y++) {
        if (this.albumDuration[i] === ALBUMS[y].duration) {
          this.newAlbumCollection.push(ALBUMS[y]);
        }
      }
    }
    return this.newAlbumCollection;
    // return console.log('fvg') ,console.log(this.newAlbumCollection);
  }

  getAlbum(id : string) : Album  { // Retourne un album
    for (const alb of ALBUMS) {
      if (alb.id === id) {
        this.singlealbum =  alb;
      }
    }
    return this.singlealbum;
  }

  getAlbumList(id : string) : string[]  { // Retourne la liste d'un album
    for (const list of ALBUM_LISTS) {
      if (list.id = id) {
        this.albumList = list.list;
      }
    }
    return this.albumList;
  }
}
