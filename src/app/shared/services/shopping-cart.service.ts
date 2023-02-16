import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Producto[] = [];
  //Aqui se guardaran todos los produtos que se aniadan al carrito
  private cartSubject = new BehaviorSubject<Producto[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);

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
    const total = this.products.reduce((acc, prod) => acc += prod.qty, 0);
    this.totalSubject.next(total);
  }

  private quantityProducts(): void {
    const quantity = this.products.reduce((acc, prod) => acc += (prod.price * prod.qty), 0);
    this.quantitySubject.next(quantity);
  }

  private addToCart(product: Producto): void {
    const isProductInCart = this.products.find(({id}) => id == product.id)
    if(isProductInCart){
      isProductInCart.qty += 1;
    }else{
      this.products.push({... product, qty:1})
    }
    // this.products.push(product);
    this.cartSubject.next(this.products);
  }
  constructor() { }
}
