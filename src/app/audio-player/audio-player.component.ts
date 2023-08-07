import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit{
  /**  Variable permettant l'affichage du composant audioPlayer */
  showplayer : boolean = false;
  /** Variable représentant l'album joué */
  playedAlbum !: Album;
  /** Variable représentant le nombre total de sons dans l'album */
  total : number = 1;
  /** Variable représentant le numéro du son joué actuellement (1 / 4) */
  currentSongNumber !: number;
  /** Variable représentant le pourcentage de son joué (25% pour 1/4, 50% pour 2/4) */
  ratio : number = 0

  constructor( 
    private albumService : AlbumService
    ) {}

    ngOnInit(): void {
      // Souscris au subject "subjectAlbum" pour recevoir les notifications
      this.albumService.subjectAlbum.subscribe({
        next : (album : Album) => {
          this.playedAlbum = album;
          
          // afficher le composant
          this.showplayer = true;

          // Durée total des sons de l'album
          let duration = this.playedAlbum.duration; 

          // Nombre total de son 
          this.total = Math.floor(duration / 120);
      
          // Le pourcentage d'album joué
          this.ratio = 100 / this.total;
          

          /** Variable représentant le % à ajouter après chaque son dans la barre de progression */
          let step = this.ratio;

          /** Initialisation de la variable représentant le numéro de son joué */
          this.currentSongNumber = 1

          /** Augmenter la niveau de la barre de progression chaque 2min (et donc chaque 1000 * 120) */
          const intervalId = setInterval(() => {
            this.ratio += step;
            this.currentSongNumber++;

            if (this.ratio > 100) {
              clearInterval(intervalId);
              this.showplayer = false;
              this.albumService.switchOff(this.playedAlbum);
            }
          }, 1000 * 120 );
        }
      });
    }
}
