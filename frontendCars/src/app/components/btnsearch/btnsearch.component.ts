import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-btnsearch',
  templateUrl: './btnsearch.component.html',
  styleUrls: ['./btnsearch.component.css']
})
export class BtnsearchComponent {

  @Output() searchAutoEvent = new EventEmitter<string>();

  constructor() { }

  onSubmitSearch(Model: NgForm) {
    let { searchAuto } = Model.value
    this.searchAutoEvent.emit(searchAuto)
  }

}
