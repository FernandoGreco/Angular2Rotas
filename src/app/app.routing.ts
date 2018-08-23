import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { ModuleWithProviders } from '../../node_modules/@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    {path:'cursos', component: CursosComponent},
    {path:'cursos/:id', component: CursoDetalheComponent},
    {path:'login', component:LoginComponent},
    {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

