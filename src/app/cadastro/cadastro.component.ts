import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnChanges {
  url: string = 'http://127.0.0.1:8000/api/cadastro'
  public registerForm: FormGroup;

  constructor(
    private router:Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      'name': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',[Validators.required])
    })
  }

  ngOnChanges() {
  }

  register(){
    this.http.post(this.url, this.registerForm.value).subscribe((res)=>{
      if (res){
        alert('Cadastrado com sucesso! Clique aqui para voltar para página de login!')
        this.router.navigate(['/login'])
      }
    }, error => {
      alert('Erro! Preencha todos os campos corretamente para efetuar o cadastro!')
    });
  }

}
