import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../IDishes';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  items: IDishes[] = [];
  total: number = 0;
  service: number = 0;
  subtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.subtotal = this.cartService.getTotal();
    this.service = Math.floor(this.cartService.getTotal()/10);
    this.total = this.subtotal + this.service;
  }
}
