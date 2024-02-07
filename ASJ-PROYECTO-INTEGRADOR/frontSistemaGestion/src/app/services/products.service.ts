import { Injectable } from '@angular/core';
import { ProductsModel } from '../models/productsModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesService } from './categories.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  private apiProducts= 'http://localhost:8080/products';
  private apiCategories = 'http://localhost:8080/sectorsFields';
  private apiProviders = 'http://localhost:8080/providers';
 // private apiImages = 'http://localhost:8080/images';

  constructor(private http: HttpClient, public categoriesService: CategoriesService) { }

  /*productModelArr: ProductsModel[] =[];
  oneProduct: ProductsModel={
    id: -1,
    sku: '',
    categoria: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    proveedor: '',
    activo: false
  };*/

  public getAllProducts(): Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(this.apiProducts);
  }

  public getActiveProducts(): Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(this.apiProducts+`/activeProducts`);
  }

  public saveProduct(infoProduct: ProductsModel, indexId:number):Observable<any>{
    
    if(indexId == -1){
      console.log("new ",this.http.post(this.apiProducts, infoProduct, { observe: 'response', responseType: 'text' as 'json'  }))
      return this.http.post(this.apiProducts, infoProduct, { observe: 'response', responseType: 'text' as 'json'  });
    }else{
      console.log("Update ",this.http.put(this.apiProducts + `/${indexId}`, infoProduct, { observe: 'response', responseType: 'text' as 'json'  }))
      return this.http.put(this.apiProducts + `/${indexId}`, infoProduct, { observe: 'response', responseType: 'text' as 'json'  });
      
    }

  }

  public deleteProduct(index:number){
    return this.http.put(this.apiProducts+`/deleted/${index}`,{}, { observe: 'response', responseType: 'text' as 'json'  });

   /* const auxDeleteProd = this.getAllProducts();
    this.productModelArr = auxDeleteProd.map(elem => {
      if(elem.id == index){
        elem.activo = false;
      }
      return elem;
    })
    localStorage.setItem("product", JSON.stringify(this.productModelArr));*/
  }

  public getActiveProductsByCategory(catId: number): Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(this.apiProducts+`/products-by-category/${catId}`);
  }

  getProductById(i:number): Observable<ProductsModel>{

   return this.http.get<ProductsModel>(this.apiProducts+`/${i}`);
      
  }

  getProductsByProvider(provId: number): Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(this.apiProducts+`/products-by-provider/${provId}`);
  }
 
}
