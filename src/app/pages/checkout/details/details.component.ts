import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  total$ = this.shoopingCartSvc.quantityAction$;
  cart$ = this.shoopingCartSvc.cartAction$;
  constructor(private shoopingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    console.log("asas", this.shoopingCartSvc)
  }
}
