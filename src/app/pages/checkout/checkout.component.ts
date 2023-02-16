import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Store } from 'src/app/shared/interfaces/stores.interface';
import { DataService } from '../products/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: '',
    store: '',
    shippingAdress: '',
    city: ''
  };
  isDelivery = false;
  stores: Store[] = []

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStore();
  }

  onPickupOrDelivery(value: boolean): void{
    this.isDelivery = value;
    console.log(value);
  }

  private getStore():void{
    this.dataSvc.getStores()
    .pipe(
      tap((stores: Store[]) => this.stores = stores))
    .subscribe()
  }

  onSubmit():void{
    console.log("Guardar")
  }

}
