import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
  providers: [UsuariosService]

})
export class ComentariosComponent implements OnInit {

  constructor(
    public _usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.clear()
  }

}
