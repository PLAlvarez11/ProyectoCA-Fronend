import { Injectable } from '@angular/core';
import { conexion } from './global.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../Modelos/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  constructor(public _http: HttpClient) {
    this.ruta = conexion.url;
   }

   getComment(idPost: String): Observable<any>{
    return this._http.get(this.ruta + 'commentPost/' + idPost, {headers: this.headersVariable, });
   }

   comentar(comentario: Comment, idPost: String): Observable<any>{
    let params = JSON.stringify(comentario);
    return this._http.post(this.ruta + "createComment/" + idPost, params, {headers: this.headersVariable});
   }
}
