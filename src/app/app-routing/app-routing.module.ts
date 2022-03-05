import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { CadastroVagasComponent } from '../cadastro-vagas/cadastro-vagas.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'cadastro' , component: CadastroVagasComponent},
  {path: '', redirectTo: '/mural', pathMatch: 'full'}
]                                           


@NgModule({
  declarations: [],
  
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
