import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.scss'],
  providers: [UsuariosService, PostService]
})
export class PostPanelComponent implements OnInit {
  public publicaciones: any;

  constructor(
    public _usuarioService: UsuariosService,
    private _postService: PostService,

  ) { }

  ngOnInit(): void {
    this.obtenerPost(this._usuarioService.obtenerIdentidad()._id)
  }

  obtenerPost(idAutor: any){
    this._postService.getPostAuthor(idAutor).subscribe(
      response =>{
        this.publicaciones = response.postFound;
        console.table(response.postFound)
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

  cerrarSesion(){
    localStorage.clear()
  }
}
