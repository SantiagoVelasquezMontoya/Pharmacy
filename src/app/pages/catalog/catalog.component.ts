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
  subTitle: string;
  constructor() {}

  ngOnInit(): void {
    this.sortProducts();
  }

  toggleTab(state: boolean) {
    this.toggleTypeOfProduct = state;
    this.sortProducts();
  }
  sortProducts() {
    this.products = ProductArray.filter((product) => {
      return product.isProduct === this.toggleTypeOfProduct;
    });
  }
}
