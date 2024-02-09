import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchasesOrderModel, OrdersDetailModel } from '../models/ordersModel';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiProviders = 'http://localhost:8080/providers';
  private apiProducts = 'http://localhost:8080/products';
  private apiPurchases = 'http://localhost:8080/purchase-order';
  private apiOrdersDetail = 'http://localhost:8080/order-detail';

  auxPurchase: PurchasesOrderModel[]=[];
  constructor(private http: HttpClient) { }


  public getAllOrders():Observable<PurchasesOrderModel[]>{
    return this.http.get<PurchasesOrderModel[]>(this.apiPurchases);
  }

  public getActiveOrders():Observable<PurchasesOrderModel[]>{
    return this.http.get<PurchasesOrderModel[]>(this.apiPurchases+`/active`);
  }

  checkOrderCode(newCode: string): Observable<boolean> {
    return this.getAllOrders().pipe(
      map(data => {
        const orders = data as PurchasesOrderModel[]; // Asegúrate de ajustar el tipo según tu modelo de datos
        return orders.some(order => order.purchases_order_code === newCode);
      })
    );
  }
  
  public  savePurchaseOrder (infoOrder: PurchasesOrderModel, indexId: number):Observable<any>{
    
    if(indexId == -1){
      const aux = this.http.post(this.apiPurchases, infoOrder, { observe: 'response', responseType:  'json'  });
      return aux;
    
    }else{
      return this.http.put(this.apiPurchases, infoOrder, { observe: 'response', responseType:  'json'  });
    
    }

}

public saveOrderDetail(arrOrdersDetal: OrdersDetailModel[]):Observable<any>{
  return this.http.post(this.apiOrdersDetail, arrOrdersDetal, { observe: 'response', responseType: 'text'  });
    
}




}