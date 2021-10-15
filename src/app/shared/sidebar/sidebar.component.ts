import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public items : string[] = []
  constructor(private gifsService : GifsService) { }

  ngOnInit(): void {

    this.getIem; 
  }
 
  get getIem(){
   return this.gifsService.historial;
  }

  buscarGif(text: string) {
    this.gifsService.buscarGift(text);
  }






}
