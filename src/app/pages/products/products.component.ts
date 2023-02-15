import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Producto } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Producto[];
  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.productSvc
      .getProductos()
      .pipe(
        tap((products: Producto[]) => {
          this.products = products;
        })
      )
      .subscribe();
  }

  addToCart(product: Producto): void {
    console.log('Add to Cart: ',product);
    this.shoppingCartSvc.updateCart(product);
  }
}
