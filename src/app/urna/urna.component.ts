import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {UrnaApiService} from "../services/urna-api.service";

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {

  keyboard: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  public position: string[] = ['Deputado Federal', 'Deputado Estadual', 'Senador', 'Governador', 'Presidente'];
  public qtdNumbers: number[] = [5, 4, 3, 2, 2];

  public numberPosition: number = 0;
  public currentStage: number = 0


  public dom: HTMLElement;
  public actualSquare: NodeListOf<Element>;

  constructor(
    public auth: AuthService,
    public elementRef: ElementRef,
    public urnaApiService: UrnaApiService
  ) {
    this.dom = this.elementRef.nativeElement;
  }


  ngOnInit(): void {
  }

  insertNumber(keyboards) {
    this.actualSquare = this.dom.querySelectorAll('.square');

    if (this.numberPosition < this.qtdNumbers[this.currentStage]) {

      this.actualSquare[this.numberPosition].innerHTML = keyboards;
      this.actualSquare[this.numberPosition].classList.remove('focus');

      if (this.numberPosition < this.qtdNumbers[this.currentStage] - 1) {
        this.actualSquare[++this.numberPosition].classList.add('focus');
      }

    } else {
      switch (this.currentStage) {

        case 0:

          break;
        case 1:

          break;
        case 2:

          break;
        case 3:

          break;

        case 4:
              this.urnaApiService.getPresidentInformations()
          break;
      }
    }
  }
}
