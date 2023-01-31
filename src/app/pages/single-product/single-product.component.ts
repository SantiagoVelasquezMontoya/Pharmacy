import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductArray from 'src/app/ProductArray';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  id: string;
  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.findProduct(this.id);
    });
  }

  findProduct(id: string) {
    this.product = ProductArray.find((item: Product) => {
      return item.id === id;
    });
  }
}
