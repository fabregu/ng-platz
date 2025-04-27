import { Component, Input } from "@angular/core";
import { Product } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    product: Product = {
          id: '1',
          image: 'assets/image/foto.jpg',
          title: 'Foto 1',
          price: 14.00,
          description: 'XD'
    }    
}