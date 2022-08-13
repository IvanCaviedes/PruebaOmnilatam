import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  constructor() { }

  carros: { id: number, title: string, subtitle: string }[] = [
    {
      id: 1,
      title: "Renta el carro de tus sueños",
      subtitle: "Alquilar nunca ha sido tan facil"
    },
    {
      id: 2,
      title: "Renta cualquier vehiculo de nuestra lista",
      subtitle: "Alquilar nunca ha sido tan facil"
    },
    {
      id: 3,
      title: "Muchos Modelos disponibles",
      subtitle: "Alquilar nunca ha sido tan facil"
    }
  ]

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
