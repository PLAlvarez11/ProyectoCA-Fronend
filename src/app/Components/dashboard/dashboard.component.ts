import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [UsuariosService]
})
export class DashboardComponent implements OnInit {
  userActualizado: any;
  usuarioIDModel: Usuario;

  constructor(
    public _usuarioService: UsuariosService
  ) {
    this.usuarioIDModel = new Usuario('', '', '', '', '');
  }

  ngOnInit(
  ): void {
  }

  obtenerUsuarioId(id: String){
    this._usuarioService.obtenerUsuarioID(id).subscribe(
      response => {
        this.usuarioIDModel = response.publicadorEncontrado;
        this.userActualizado = response.publicadorEncontrado;
        console.log(response.publicadorEncontrado);
      }
    )
  }

  cerrarSesion(){
    localStorage.clear()
  }
}
