import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HistoriaComponent } from './Components/historia/historia.component';
import { HomeComponent } from './Components/home/home.component';
import { JuegosComponent } from './Components/juegos/juegos.component';
import { LoginComponent } from './Components/login/login.component';
import { PublicacionesComponent } from './Components/publicaciones/publicaciones.component';

const routes: Routes = [
  {path: 'Inicio', component: HomeComponent},
  {path: 'Publicaciones/:idPost', component: PublicacionesComponent},
  {path: 'NuestraHistoria', component: HistoriaComponent},
  {path: 'Juegos', component: JuegosComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
