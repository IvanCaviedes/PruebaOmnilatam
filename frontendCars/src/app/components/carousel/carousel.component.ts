import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  carros: [number, number, number] = [1, 2, 3]

  ngOnInit(): void {
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
