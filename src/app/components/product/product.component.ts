import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  @Input() product: Product;
  @Input() showProduct: boolean;

  ngOnInit(): void {
    console.log(this.product);
  }
}
