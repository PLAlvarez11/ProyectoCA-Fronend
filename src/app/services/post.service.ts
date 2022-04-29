import { Injectable } from '@angular/core';
import { conexion } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../Modelos/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(public _http: HttpClient) {
    this.ruta = conexion.url;
  }

  getPosts(): Observable<any> {
    return this._http.get(this.ruta + 'mostrarPost', {headers: this.headersVariable, });
  }

  getPostID(idPost: String): Observable<any> {
    return this._http.get(this.ruta + 'verPost/' + idPost, {headers: this.headersVariable, });
  }
}
