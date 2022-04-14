import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CadastroCandidatoService} from "../services/cadastro-candidato.service";
import {NavigateService} from "../shared/navigate.service";
import {AuthService} from "../services/auth.service";
import {DatabaseService} from "../core/database.service";
import {CandidatosModel} from "../Models/candidatos.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  errorCredentials = false
  success = false
  id: any
  data: any
  candidate = new CandidatosModel()


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
    private cadastroCandidatoService: CadastroCandidatoService,
    public navigateService: NavigateService,
    public authService: AuthService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
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
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
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


  updateCandidate() {

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
    formData.append('_method', 'PUT')

    if (position == 'Presidente') {

      this.databaseService.post('/atualizar-presidente/' + (this.id), formData).subscribe(response => {
        this.data = response;
        this.candidate = this.data;
       alert('Informações atualizadas com sucesso!!')

      })
    } else if (position == 'Senador') {
        this.databaseService.post('/atualizar-senador/' + (this.id), formData).subscribe(response =>{
          this.data = response;
          this.candidate = this.data;
         alert('Informações atualizadas com sucesso!!')
        })
    }

    else if (position == 'Governador') {
      this.databaseService.post('/atualizar-governador/' + (this.id), formData).subscribe(response =>{
        this.data = response;
        this.candidate = this.data;
       alert('Informações atualizadas com sucesso!!')
      })
    }

    else if (position == 'DeputadoFederal') {
      this.databaseService.post('/atualizar-deputado-federal/' + (this.id), formData).subscribe(response =>{
        this.data = response;
        this.candidate = this.data;
       alert('Informações atualizadas com sucesso!!')
      })
    }

    else if (position == 'DeputadoEstadual') {
      this.databaseService.post('/atualizar-deputado-estadual/' + (this.id), formData).subscribe(response =>{
        this.data = response;
        this.candidate = this.data;
       alert('Informações atualizadas com sucesso!!')
      })
    }
  }
}



