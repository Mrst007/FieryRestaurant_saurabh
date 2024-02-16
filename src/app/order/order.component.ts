import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { PlaceorderComponent } from '../placeorder/placeorder.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  allOrders: any
  order: any
  constructor(private Http: HttpClient, private router: Router) { }
 
  getall(){
    this.Http.get('http://localhost:3000/order').subscribe((data: any) => { this.allOrders = (data) });
  }
}
