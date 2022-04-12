import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CadastroCandidatoService} from "../services/cadastro-candidato.service";
import {NavigateService} from "../shared/navigate.service";
import {AuthService} from "../services/auth.service";



@Component({
  selector: 'app-cadastrar-candidato',
  templateUrl: './cadastrar-candidato.component.html',
  styleUrls: ['./cadastrar-candidato.component.scss']
})
export class CadastrarCandidatoComponent implements OnInit {

  errorCredentials = false
  success = false

  public candidateForm: FormGroup;

  public maskNumber: string = ''

  public maskValue: {} = {

    Presidente: '99',
    Senador: '999',
    DeputadoFederal: '99999',
    DeputadoEstadual: '9999',
    Governador: '99',
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cadastroCandidatoService: CadastroCandidatoService,
    public navigateService: NavigateService,
    public authService: AuthService
  ) {
    this.candidateForm = this.formBuilder.group({
      'nome': [null, [Validators.required]],
      'numero': [null, [Validators.required]],
      'partido': [null, [Validators.required]],
      'cargo': [null, [Validators.nullValidator]]
    })

  }

  selectedFile: File = null;

  ngOnInit(): void {

  }

  setMask() {
    let position: string = this.candidateForm.controls['cargo'].value

    this.maskNumber = this.maskValue[position];
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }



  validForm(): boolean {
    let isValid: boolean = true;

    let fieldList: string[] = ['nome', 'numero', 'partido', 'cargo'];
    fieldList.forEach(field => {
      if (!this.candidateForm.get(field).valid) {
        isValid = false;
      }
    })
    if (!isValid) {
      alert('Preencha todos os campos corretamente!')
      return false
    }
    if (this.selectedFile == null) {
      alert('Insira a imagem');
      isValid = false;
    }

    return isValid;
  }

  registerCandidate() {

    if (!this.validForm()) {
      return
    }

    let position = this.candidateForm.controls['cargo'].value
    let formData = new FormData();

    formData.append('imgCandidato', this.selectedFile);
    formData.append('numero', this.candidateForm.get('numero').value);
    formData.append('nome', this.candidateForm.get('nome').value);
    formData.append('partido', this.candidateForm.get('partido').value);
    formData.append('cargo', this.candidateForm.get('cargo').value);

    if (position == 'Presidente') {
      this.cadastroCandidatoService.postPresident(formData, (response) => {
        if (!response.error) {
          alert('Candidato cadastrado para concorrer à Presidente!')
        }
      })

    } else if (position == 'Senador') {
      this.cadastroCandidatoService.postSenator(formData, (response) => {
        if (!response.error) {
          alert('Candidado cadastrado para concorrer à Senador!')
        }
      })

    } else if (position == 'Governador') {
      this.cadastroCandidatoService.postGovernor(formData, (response) => {
        if (!response.error) {
          alert('Candidado cadastrado para concorrer à Governador!')
        }
      })

    } else if (position == 'DeputadoEstadual') {
      this.cadastroCandidatoService.postStateDeputy(formData, (response) => {
        if (!response.error) {
          alert('Candidado cadastrado para concorrer à Deputado Estadual!')
        }
      })
    } else if (position == 'DeputadoFederal') {
      this.cadastroCandidatoService.postCongressman(formData, (response) => {
        if (!response.error) {
          alert('Candidado cadastrado para concorrer à Deputado Federal!')
        }
      })
    }
  }
}


