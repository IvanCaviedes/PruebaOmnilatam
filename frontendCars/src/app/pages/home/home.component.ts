import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title:string = "Best Cars in town for you"
  subtitle:string = "Lorem ipsum dolor sit."

  carros: [number, number, number, number, number, number, number, number, number] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  ngOnInit(): void {
  }

}
