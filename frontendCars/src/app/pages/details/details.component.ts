import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from 'src/app/services/Car.interface';
import { Appstate, selectUniqueCars } from 'src/app/store/selectors/cars.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  carro!: Car;

  constructor(private store: Store<Appstate>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.store.pipe(select(selectUniqueCars, { id })).subscribe(data=>this.carro = data)
    });
  }

}
