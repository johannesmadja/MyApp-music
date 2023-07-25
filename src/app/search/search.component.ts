import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { NgForm } from "@angular/forms";
import { AlbumService } from "../album.service";
import {  Album } from "../album";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Output() albumListFilter = new EventEmitter<Array<Album>>
  word !: string;
  
  constructor( private AlbumService : AlbumService) {}

  ngOnInit(): void {}

  onSubmit(form : NgForm) : void {
    
  }

  ngModelChange() {
    this.albumListFilter.emit(this.AlbumService.search(this.word)); 
  }

}
