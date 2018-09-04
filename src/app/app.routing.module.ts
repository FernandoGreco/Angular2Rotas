import { NgModule } from "@angular/core";

//import {CursoDetalheComponent} from './cursos/curso-detalhe/curso-detalhe.component';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
//import { CursoNaoEncontradoComponent } from './cursos//curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
  //  {path:'cursos', component: CursosComponent},
   // {path:'cursos/:id', component: CursoDetalheComponent},
    {path:'login', component:LoginComponent},
//    {path:'naoEncontrado', component:CursoNaoEncontradoComponent},
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    imports:  [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}