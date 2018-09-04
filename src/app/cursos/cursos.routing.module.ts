import { NgModule } from "@angular/core";

import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {Routes, RouterModule} from '@angular/router';


import { CursosComponent } from './cursos.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
    {path:'cursos', component: CursosComponent},
    {path:'cursos/:id', component: CursoDetalheComponent},
    {path:'naoEncontrado', component:CursoNaoEncontradoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(cursosRoutes);


@NgModule({
    imports:  [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}