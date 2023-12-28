import { Injectable } from '@angular/core';
import { ProductsModel } from '../models/productsModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  productModelArr: ProductsModel[] =[];
  oneProduct: ProductsModel={
    id: -1,
    sku: '',
    categoria: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    proveedor: '',
    activo: false
  };

  public getAllProducts(){
    const auxListado = localStorage.getItem("product");
    if(auxListado){
      this.productModelArr = JSON.parse(auxListado);
    }else{
      this.productModelArr = [];
    }
    return this.productModelArr;
  }

  public getActiveProducts(){
    const auxActiveProducts = this.getAllProducts();
    if(auxActiveProducts.length<=0){
      return [];
    }else{
      this.productModelArr = auxActiveProducts.filter(elem => elem.activo);
      return this.productModelArr;
    }
  }

  public saveProduct(infoProduct: ProductsModel, indexId:number){
    const auxProduct = this.getAllProducts();
    if(indexId == -1){
      infoProduct.id= auxProduct.length;
      auxProduct.push(infoProduct);
      localStorage.setItem("product", JSON.stringify(auxProduct));
    }else{
      this.productModelArr = auxProduct.map(elem => {
            if(elem.id == indexId){
              elem = infoProduct;
            }
            return elem;
          });
      localStorage.setItem("product", JSON.stringify(this.productModelArr));
    }

  }

  public deleteProduct(index:number){
    const auxDeleteProd = this.getAllProducts();
    this.productModelArr = auxDeleteProd.map(elem => {
      if(elem.id == index){
        elem.activo = false;
      }
      return elem;
    })
    localStorage.setItem("product", JSON.stringify(this.productModelArr));
  }

  public getActiveProductsByCategory(cat: string){
    let arrAux:any[] = []; 
    
    this.getActiveProducts().map(elem => {
      if(elem.proveedor == cat){
        arrAux.push(elem);
      }
      });

    return arrAux;
  }

  getProductsById(i:number){

   return (this.getActiveProducts().filter(elem => elem.id == i ))
      
  }
 
}
