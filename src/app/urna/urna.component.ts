import {Component, ElementRef, OnInit, AfterContentInit, ViewChild, ViewChildren} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UrnaApiService} from "../services/urna-api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})


export class UrnaComponent implements OnInit {

  keyboard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  getNumberOfCandidate: any = '';
  showInformations: boolean = false
  showNull: boolean = false
  whiteVote: boolean = false
  finish: boolean = false


  public position: string[] = ['DEPUTADO FEDERAL', 'DEPUTADO ESTADUAL', 'SENADOR', 'GOVERNADOR', 'PRESIDENTE'];
  public qtdNumbers: number[] = [5, 4, 3, 2, 2];

  public numberPosition: number = 0;
  public currentStage: number = 0;
  public candidates: object = [];
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

  getPresident(): void {
    this.urnaApiService.getPresidentInformations(this.getNumberOfCandidate).subscribe(
      data => {
        this.candidates = data
        if (this.candidates['length'] == 0){
          this.showNull = true
          this.showInformations = false
        }else{
          this.showInformations = true
          this.showNull = false
        }
      })
  }

  getSenator() {
    this.urnaApiService.getSenatorInformations(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data
      if (this.candidates['length'] == 0){
        this.showNull = true
        this.showInformations = false
      }else{
        this.showInformations = true
        this.showNull = false
      }
    })
  }

  getGovernor() {
    this.urnaApiService.getGovernorInformations(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data
      if (this.candidates['length'] == 0){
        this.showNull = true
        this.showInformations = false
      }else{
        this.showInformations = true
        this.showNull = false
      }
    })
  }

  getStateDeputy() {
    this.urnaApiService.getStateDeputyInformation(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data
      if (this.candidates['length'] == 0){
        this.showNull = true
        this.showInformations = false
      }else{
        this.showInformations = true
        this.showNull = false
      }
    })
  }

  getCongressman() {
    this.urnaApiService.getCongressmanInformation(this.getNumberOfCandidate).subscribe(data => {
      this.candidates = data
      if (this.candidates['length'] == 0){
        this.showNull = true
        this.showInformations = false
      }else{
        this.showInformations = true
        this.showNull = false
      }
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
      console.log(this.candidates)


      // this.showInformations = this.getNumberOfCandidate[this.currentStage] == this.candidates['length'];
      // if (this.getNumberOfCandidate[this.currentStage] == []) { //esta validação ta bichada
      //   this.showInformations = true
      //   console.log('here')
      // } else {
      //  this.showNull = true
      //   console.log('...')
      // }
    }
  }


  updateDisplay() {
    this.showNull = false
    this.whiteVote = false
    this.showInformations = false
    this.getNumberOfCandidate = '';
    this.numberPosition = 0
    this.candidates = [];
    for (let square = 0; square < this.qtdNumbers[this.currentStage]; square++) {
      this.actualSquare[square].innerHTML = '';
    }

  }


  white() {

    if (this.getNumberOfCandidate == '') {
      this.showInformations = false
      this.showNull = false
      this.whiteVote = true
      this.numberPosition = 0;
    }

  }

  correction() {
    this.updateDisplay()

  }

  confirm() {

    let confirmVotes: boolean = false
    if (this.whiteVote === true) {
      confirmVotes = true
      console.log('white vote');

    } else if (this.numberPosition == (this.qtdNumbers[this.currentStage])) {
      confirmVotes = true
      console.log('all done')
    }

    if (confirmVotes == true) {
      this.currentStage++

      if (this.currentStage < 5) {
        this.updateDisplay()
      } else {
        this.whiteVote = false;
        this.showNull = false;
        this.showInformations = false
        document.querySelector('.end').innerHTML = 'FIM!';
        document.querySelector('.left1 span').innerHTML = '';
        document.querySelector('.numberBox').innerHTML = '';

        }
      }
    }
}
