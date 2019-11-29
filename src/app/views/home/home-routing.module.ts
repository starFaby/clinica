import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormgeneralComponent } from './formgeneral/formgeneral.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { Cie10Component } from './cie10/cie10.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: NavbarComponent},
  {path: 'formgeneral', component: FormgeneralComponent},
  {path: 'cie10', component: Cie10Component},
  {path: 'estudiante', component: EstudianteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
