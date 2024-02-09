import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/models/productsModel';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  public product: ProductsModel ={
    products_id:-1,
    products_sku: '',
    products_denomination: '',
    products_description: '',
    products_price: 0,
    products_stock: '',
    image: '',
    is_deleted: false,
    categories_id: {
      categories_id: 0,
      categories_denominations: ''
    },
    providers_id: {
      providers_id: 0,
      providers_denomination: ''
    }
  }
  productsList: ProductsModel[]=[];
  search: string = "";
  empty = "";

  constructor(private productsService: ProductsService){}

  ngOnInit():void{
    this.getProductsToShow();
   
  }

  getProductsToShow(){
    this.productsService.getActiveProducts().subscribe(
      (products)=>{
        this.productsList = products;
        if(this.productsList.length ==0){
          this.empty = "No hay proveedores para mostrar"
        }
      }
    )

  }

  desactivarProd(indexProd: number){
    this.productsService.deleteProduct(indexProd);
    this.getProductsToShow();
  }

}
