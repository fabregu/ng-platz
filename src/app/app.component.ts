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
      id: '1',
      image: 'assets/image/foto.jpg',
      title: 'Foto 1',
      price: 14.00,
      description: 'XD'
    },
    {
      id: '2',
      image: 'assets/image/foto2.jpg',
      title: 'Foto 2',
      price: 15.00,
      description: 'XD'
    },
    {
      id: '3',
      image: 'assets/image/foto3.jpg',
      title: 'Foto 3',
      price: 29.00,
      description: 'XD'
    }
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
