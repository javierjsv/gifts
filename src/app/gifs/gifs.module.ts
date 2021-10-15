import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GiftPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GiftPageComponent
  ]
})
export class GifsModule { }
