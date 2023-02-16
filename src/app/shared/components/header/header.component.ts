import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({//decorador component, marca el comportamiento del componente
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  goToCheckout():void{
    this.router.navigate(['/checkout']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
