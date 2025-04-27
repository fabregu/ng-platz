import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

    @Input() product!: Product;
    @Output() productClicked: EventEmitter<number>= new EventEmitter();
    
    // product: Product = {
    //       id: '1',
    //       image: 'assets/images/bata-mujer.jpg',
    //       title: 'Bata Mujer',
    //       price: 14.00,
    //       description: 'Bata rosada de ducha para mujer'
    // }    

    addCart() {
        console.log("Añadir al carrito");
        this.productClicked.emit(this.product.id);
    }
}