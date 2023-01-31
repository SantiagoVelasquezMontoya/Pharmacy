import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import ProductArray from 'src/app/ProductArray';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products: Product[] = ProductArray;
  toggleTypeOfProduct: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  toggleTab(state: boolean) {
    this.toggleTypeOfProduct = state;
  }
}