import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/Modelos/comments.model';
import { Post } from 'src/app/Modelos/post.model';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  providers: [PostService]
})
export class PublicacionesComponent implements OnInit {

  public idPost: any
  public modelPost: Post;
  public postList: any;
  public comentarios: any;
  public modelComments: Comment;

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _PostService: PostService,
    private _router: Router,
    private _CommentService: CommentService
  ) {
    this.modelComments = new Comment('', '', '', '');
    this.modelPost = new Post('', '', '', '', '', '', '', '', false)
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRoute)=>{
      this.idPost = dataRoute.get('idPost')
    })
    this.obtenerPostId(this.idPost),
    this.obtenerComentarios(this.idPost)
  }

  obtenerPostId(idPost: any){
    this._PostService.getPostID(idPost).subscribe(
      response => {
        this.modelPost = response.postFound;
        this.postList = response.postFound;
        console.log(response)
      }
    )
  }

  obtenerComentarios(idPost: any){
    this._CommentService.getComment(idPost).subscribe(
      response => {
        this.comentarios = response.commentFound;
        console.table(response.commentFound)
      }
    )
  }

  crearComentario(idPost: any){
    this._CommentService.comentar(this.modelComments, this.idPost).subscribe(
      response =>{
        console.table(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comentario Publicado',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload()
      },
      error => {
        console.log(<any>error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  eliminarPost(idPost: any){
    this._PostService.deletePost(idPost).subscribe(
      response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Publicacion eliminada',
          showConfirmButton: false,
          timer: 1500
        })
        window.location.reload();
      },
      error => {
        console.log(<any>error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
