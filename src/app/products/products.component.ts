import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data: string = "test"

  constructor() { }

  ngOnInit() {
  }

  @Output() titleEvent = new EventEmitter<string>()

  setTitle() {
    this.titleEvent.emit(this.data)
  }

}