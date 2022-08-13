import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/services/Car.interface';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() Carro: Car = {
    "Id": 1,
    "Photo": "https://www.motor.com.co/__export/1646260546715/sites/motor/img/2022/03/02/10.jpeg_1282495339.jpeg",
    "Model": "Mazda 2",
    "Year": "2016",
    "Brand": "Mazda",
    "Price": 63000000,
    "Desciption": "Mazda 2 Sport incluye un completo equipamiento en seguridad activa, pasiva y proactiva que cumple con los más altos estándares. Como equipamiento estándar incluye 6 airbags, frenos delanteros de disco ventilado equipados con sistemas ABS, EBD y BA, que proporcionan un frenado lineal, así como Control Dinámico de Estabilidad (DSC) y Sistema de Control de Tracción (TCS), entre otros",
    "color": "rojo"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
