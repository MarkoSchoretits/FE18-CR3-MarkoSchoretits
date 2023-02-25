import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

dish: IDishes = {} as IDishes;
id: number = 0;

constructor(
  private route: ActivatedRoute,
  private cartService: CartService) { }

addToCart() {
  window.alert('The dish of your choice has bin added to the order list.');
  this.cartService.addToCart(this.dish);
}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.id = +params['dishId'];
    this.dish = dishes[this.id];
  });
}

}
