import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar')  txtBuscar! : ElementRef<HTMLInputElement>;
  constructor(public gifsService : GifsService) { }

  ngOnInit(): void {
  }

  buscar(){
      console.log(this.txtBuscar!.nativeElement.value);
      const text = this.txtBuscar!.nativeElement.value;


        if(text.trim().length === 0){
          return;
        }


      this.gifsService.buscarGift(text);
      
      this.txtBuscar!.nativeElement.value = '' ;



  }

}
