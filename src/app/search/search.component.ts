import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AlbumService } from "../album.service";
import {  Album } from "../album";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  word !: string;
  constructor(
  ) {}

  ngOnInit(): void {}

  onSubmit(form : NgForm) : void {
    // récupération des données du formulaire
    console.log(form.value["word"]);
    console.log(this.word);
    
  }
}
