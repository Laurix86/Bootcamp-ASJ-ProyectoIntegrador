import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent {

  productList: any=[];
  search: string = "";
  empty = "";

  constructor(private productsService: ProductsService){}

  ngOnInit():void{
    this.getProductsToShow();
    if(this.productList.length == 0){
      this.empty = "No hay productos para mostrar";
    }
  }

  getProductsToShow(){
    this.productList = this.productsService.getActiveProducts();

  }

  desactivarProd(indexProd: number){
    this.productsService.deleteProduct(indexProd);
    this.getProductsToShow();
  }

}
