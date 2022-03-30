import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UrnaApiService} from "../services/urna-api.service";
import {HttpClient} from "@angular/common/http";
import {CandidatosModel} from "../Models/candidatos.model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {

  keyboard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  getNumberOfCandidate: string = '';
  candidates: object = [];

  public position: string[] = ['Deputado Federal', 'Deputado Estadual', 'Senador', 'Governador', 'Presidente'];
  public qtdNumbers: number[] = [5, 4, 3, 2, 2];

  public numberPosition: number = 0;
  public currentStage: number = 1;
  public dom: HTMLElement;
  public actualSquare: NodeListOf<Element>;


  constructor(
    public auth: AuthService,
    public elementRef: ElementRef,
    public urnaApiService: UrnaApiService,
    http: HttpClient
  ) {
    this.dom = this.elementRef.nativeElement;
  }


  ngOnInit(): void {

  }

  getPresident() {
    this.urnaApiService.getPresidentInformations(this.getNumberOfCandidate).subscribe(
      data => {
        this.candidates = data

      })
  }

  getSenator() {
    this.urnaApiService.getSenatorInformations(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data

    })
  }

  getGovernor() {
    this.urnaApiService.getGovernorInformations(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data



    })

  }

  getStateDeputy() {
    this.urnaApiService.getStateDeputyInformation(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data


    })
  }

  getCongressman() {
    this.urnaApiService.getCongressmanInformation(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data
    })
  }

  insertNumber(keyboards) {
    this.actualSquare = this.dom.querySelectorAll('.square');

    if (this.numberPosition <= (this.qtdNumbers[this.currentStage] - 1)) {

      this.actualSquare[this.numberPosition].innerHTML = keyboards;
      this.actualSquare[this.numberPosition].classList.remove('focus');
      this.getNumberOfCandidate = this.getNumberOfCandidate + keyboards.toString()
      if (this.numberPosition < this.qtdNumbers[this.currentStage] - 1) {
        this.actualSquare[++this.numberPosition].classList.add('focus');
      } else {
        this.numberPosition++
      }
    }

    if (this.numberPosition == (this.qtdNumbers[this.currentStage])) {
      switch (this.currentStage) {
        case 0:
          this.getCongressman()
          break;
        case 1:
          this.getStateDeputy()
          break;
        case 2:
          this.getSenator()
          break;
        case 3:
          this.getGovernor()
          break;
        case 4:
          this.getPresident()
          break;
      }
    }
  }
}
