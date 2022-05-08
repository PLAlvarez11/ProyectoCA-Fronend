import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './Components/autor/autor.component';
import { ComentariosComponent } from './Components/comentarios/comentarios.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HistoriaComponent } from './Components/historia/historia.component';
import { HomeComponent } from './Components/home/home.component';
import { JuegosComponent } from './Components/juegos/juegos.component';
import { LoginComponent } from './Components/login/login.component';
import { PostCreateComponent } from './Components/post-create/post-create.component';
import { PostPanelComponent } from './Components/post-panel/post-panel.component';
import { PublicacionesComponent } from './Components/publicaciones/publicaciones.component';
import { PublicadoresComponent } from './Components/publicadores/publicadores.component';

const routes: Routes = [
  {path: 'Inicio', component: HomeComponent},
  {path: 'Post/:idPost', component: PublicacionesComponent},
  {path: 'NuestraHistoria', component: HistoriaComponent},
  {path: 'Juegos', component: JuegosComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Publicadores', component: PublicadoresComponent},
  {path: 'Autor/:idAutor', component: AutorComponent},
  {path: 'Comentarios', component: ComentariosComponent},
  {path: 'PanelNoticias', component: PostPanelComponent},
  {path: 'CrearNoticias', component: PostCreateComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
