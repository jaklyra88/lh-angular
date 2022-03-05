import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrls: ['./cadastro-vagas.component.css']
})
export class CadastroVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"", "", "", 0)},
      err => {console.log("Erro ao Cadastrar")}
    );

    window.location.href = "/mural";
  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Atualizar")}
    );

    window.location.href =  "/mural";
  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0, "", "", "", 0)},
      err => {console.log("Erro ao Excluir")}
    );

    window.location.href = "/mural"
  }

}
