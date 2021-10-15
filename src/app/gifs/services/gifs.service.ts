import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Gif, ISearchGifs } from '../interfaces/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private key = environment.apikey_git;
  public url_git = 'https:/api.giphy.com/v1/gifs/';
  public limit = 12;
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {

    // this._historial = JSON.parse(localStorage.getItem('gifs')!) || []; 

    if (localStorage.getItem('gifs')) {
      this._historial = JSON.parse(localStorage.getItem('gifs')!);
      this.buscarGift(this._historial[0]);
    }

  }

  get historial() {
    return [...this._historial];
  }

  buscarGift(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('gifs', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.key)
      .set('limit', this.limit)
      .set('q', query);


    this.http.get<ISearchGifs>(`${this.url_git}search`, { params }).subscribe((resp) => {
      // console.log(resp.data);
      this.resultados = resp.data;
    }, err => {
      console.error('err', err)
    })

  }


}
