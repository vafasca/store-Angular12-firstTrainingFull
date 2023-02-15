import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Producto[] = [];
  //Aqui se guardaran todos los produtos que se aniadan al carrito
  private cartSubject = new Subject<Producto[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  //devolviendo los observables a mi app para que sean consumidos
  get totalAction$(): Observable<number> {//signo de dolar es solo una convencion para que se sepa que es un metodo que devuelve un observable y no una simple promesa o variable cualquiera
    return this.totalSubject.asObservable();
  }

  get cartAction$(): Observable<Producto[]>{
    return this.cartSubject.asObservable();
  }

  get quantityAction$(): Observable<number>{
    return this.quantitySubject.asObservable();
  }

  //metodo publico que llame a los metodos privados para ser usados
  updateCart(product: Producto): void {
    this.addToCart(product);
    this.calcTotal();
    this.quantityProducts();
  }

  //metodos grl
  private calcTotal(): void{
    const total = this.products.reduce((acc, prod) => acc += prod.price, 0);
    this.totalSubject.next(total);
  }

  private quantityProducts(): void {
    const quantity = this.products.length;
    this.quantitySubject.next(quantity);
  }

  private addToCart(product: Producto): void {
    this.products.push(product);
    this.cartSubject.next(this.products);
  }
  constructor() { }
}
