import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Car } from 'src/app/services/Car.interface';
import { Appstate, selectCars, selectCarsModel } from 'src/app/store/selectors/cars.selector';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Best Cars in town for you"
  subtitle: string = "Lorem ipsum dolor sit."

  carros: Car[] = []

  constructor(
    private store: Store<Appstate>
  ) {
    this.getAutos()
  }

  getAutos() {
    this.store.pipe(select(selectCars)).subscribe(data => {
      let dataForSort = [...data]
      this.carros = dataForSort.sort((a, b) => a.Brand > b.Brand ? 1 : -1)
    })
  }

  onSubmitSearch(searchAuto: string) {
    console.log(searchAuto)
    if (searchAuto) {
      this.store.pipe(select(selectCarsModel, { Brand: searchAuto })).subscribe(data => {
        this.carros = data
      })
    } else {
      this.getAutos()
    }

  }

  ngOnInit(): void {
  }

}
