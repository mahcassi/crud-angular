import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // a rota vai ser injetada pelo angular (injeção de dependência)
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
