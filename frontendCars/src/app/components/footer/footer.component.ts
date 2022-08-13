import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  github: string = "https://github.com/ITSKY152/PruebaOmnilatam"
  nombre: string = "Ivan Caviedes"

  constructor() { }


}
