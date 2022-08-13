import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{
  @Input() Id: number = 1;
  @Input() Photo: string = "";
  @Input() Model: string = "";
  @Input() Year: string = "";
  @Input() Brand: string = "";
  @Input() Price: number = 1000000;

  constructor() { }

}
