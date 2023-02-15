import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product!: Producto;
  @Output() addToCartClick = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{
    // console.log('Res: '+ this.product.name);
    this.addToCartClick.emit(this.product);
  }

}
