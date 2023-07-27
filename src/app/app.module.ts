import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PaginateComponent } from './paginate/paginate.component';


/**
 * Ensemble des routes de notre application
 */
const albumsRoutes : Routes = [
  {path : 'albums', component : AlbumsComponent},
  {path : "", redirectTo : "/albums",pathMatch : "full"},
  {path : "login", component : LoginComponent},
  {path : "album/:id", component : AlbumDescriptionComponent},
  {path : "oc", component : OpenCloseComponent},

  // Page Not Found
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent,
    PageNotFoundComponent,
    OpenCloseComponent,
    PaginateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importation du module FormsModule
    RouterModule.forRoot(albumsRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}
