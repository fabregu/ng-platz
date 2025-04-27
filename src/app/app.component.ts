import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plazy-ng';
  items = ['Juan', 'Julio', 'Ada'];

  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/bata-mujer.jpg',
      title: 'Toalla de ducha para Dama',
      price: 14.00,
      description: 'XD'
    },
    {
      id: 2,
      image: 'assets/images/camisa.jpg',
      title: 'Camisa',
      price: 15.00,
      description: 'Camisa manga larga para varon'
    },
    {
      id: 3,
      image: 'assets/images/polo.png',
      title: 'Polo Basic',
      price: 29.00,
      description: 'Polo cuello redondo color rojo'
    }
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
}
