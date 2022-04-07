import {Component, OnChanges} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavigateService} from "../shared/navigate.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnChanges {
  url: string = 'http://127.0.0.1:8000/api/cadastro'
  public registerForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    public navigateService: NavigateService
  ) {
    this.registerForm = this.formBuilder.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.requiredTrue]]
    })
  }

  ngOnChanges() {
  }

  register() {
    this.http.post(this.url, this.registerForm.value).subscribe((res) => {
      if (res) {
        alert('Cadastrado com sucesso! Clique aqui para voltar para página de login!')
        this.navigateService.navigateToLogin()
      }
    }, error => {
      alert('Erro! Preencha todos os campos corretamente para efetuar o cadastro!')
    });
  }

}
