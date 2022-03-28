import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, MaxLengthValidator, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CadastroCandidatoService} from "../services/cadastro-candidato.service";
import {AuthService} from "../services/auth.service";
import {environment} from "../../environments/environment";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-cadastrar-candidato',
  templateUrl: './cadastrar-candidato.component.html',
  styleUrls: ['./cadastrar-candidato.component.scss']
})
export class CadastrarCandidatoComponent implements OnInit {

  public candidateRegister: FormGroup;
  public mask = '99999'


  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder,
              public cadastroService: CadastroCandidatoService) {
    this.candidateRegister = this.formBuilder.group({
      'nome': [null, [Validators.required]],
      'numero': [null, [Validators.required]],
      'partido': [null, [Validators.required]],
      'imgCandidato': [null, [Validators.required]],
      'cargo': [null, [Validators.nullValidator]]

    })

  }


  ngOnInit(): void {
    if (this.candidateRegister.controls['cargo'].value == 'Presidente'){
      // this.mask = '99' Don't working yet
    }
  }

  registerCandidate() {
    const position = this.candidateRegister.controls['cargo'].value

    if (position == 'Presidente') {

      this.cadastroService.registerPresident(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Presidente!')
      })

    } else if (position == 'Senador') {
      this.cadastroService.registerSenator(this.candidateRegister.value).subscribe((response) => {
        alert('Candidado cadastrado para concorrer à Senador!')

      })
    } else if (position == 'Governador') {
      this.cadastroService.registerGovernor(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Governador')
      })
    } else if (position == 'Deputado Estadual') {
      this.cadastroService.registerStateDeputy(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Deputado Estadual')
      })
    } else if (position == 'Deputado Federal') {
      this.cadastroService.registerCongressman(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Deputado Federal')
      })
    }
  }

  goToVotationStage() {
    this.router.navigate(['/votação'])
  }


  logout() {
    this.http.get(`${environment.api_url}/logout`).subscribe(response => {
      console.log(response);
      localStorage.clear();
      this.router.navigate(['/login'])
    })
  }
}


