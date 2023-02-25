import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';
import { IDishes } from './IDishes'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: IDishes[] = [];

  constructor() { }

  addToCart(dish: IDishes) {
    this.items.push(dish);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotal() {
    var total=0;
    for(let i=0; i<this.items.length; i++) {
      let item = this.items[i];
      let price = item.price;
      total += price;
    }
    return total;
  }  
}

