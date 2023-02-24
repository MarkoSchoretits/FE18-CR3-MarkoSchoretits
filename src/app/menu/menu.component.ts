import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:IDishes[] = dishes;

  constructor() { }

  ngOnInit(): void {
    
  }

}
