import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root' //este service esta disponible para toda mi aplicacion (provideIn)
})
export class ProductsService {

  private apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiURL);
  }
}
