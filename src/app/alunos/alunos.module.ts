import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {AlunosComponent} from './alunos.component';
import {AlunoFormComponent} from './aluno-form/aluno-form.component';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos.routing.module';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [AlunosComponent, AlunoFormComponent,AlunoDetalheComponent],
    providers: [AlunosService],
})

export class AlunosModule {

}