import { Component, OnInit } from '@angular/core';
import { CadastroCandidatoService} from "../services/cadastro-candidato.service";

@Component({
  selector: 'app-cadastrar-candidato',
  templateUrl: './cadastrar-candidato.component.html',
  styleUrls: ['./cadastrar-candidato.component.scss']
})
export class CadastrarCandidatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
