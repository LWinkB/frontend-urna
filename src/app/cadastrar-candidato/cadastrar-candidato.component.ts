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

  public maskNumber: string = '99999'

  public maskValue: {} = {
    Presidente: '99',
    Senador: '999',
    DeputadoFederal:'99999',
    DeputadoEstadual: '9999',
    Governador: '99',
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cadastroCandidatoService: CadastroCandidatoService
  ) {
    this.candidateRegister = this.formBuilder.group({
      'nome': [null, [Validators.required]],
      'numero': [null, [Validators.required]],
      'partido': [null, [Validators.required]],
      'imgCandidato': [null, [Validators.required]],
      'cargo': [null, [Validators.nullValidator]]

    })

  }


  ngOnInit(): void {

  }

  setMask(){
    let position:string = this.candidateRegister.controls['cargo'].value

    this.maskNumber = this.maskValue[position];
  }

  registerCandidate() {

    let position = this.candidateRegister.controls['cargo'].value

    if (position == 'Presidente') {

      this.cadastroCandidatoService.registerPresident(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Presidente!')
      })

    } else if (position == 'Senador') {
      this.cadastroCandidatoService.registerSenator(this.candidateRegister.value).subscribe((response) => {
        alert('Candidado cadastrado para concorrer à Senador!')
      })
    } else if (position == 'Governador') {
      this.cadastroCandidatoService.registerGovernor(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Governador')
      })
    } else if (position == 'DeputadoEstadual') {
      this.cadastroCandidatoService.registerStateDeputy(this.candidateRegister.value).subscribe((response: any) => {
        alert('Candidato cadastrado para concorrer à Deputado Estadual')
      })
    } else if (position == 'DeputadoFederal') {
      this.cadastroCandidatoService.registerCongressman(this.candidateRegister.value).subscribe((response: any) => {
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


