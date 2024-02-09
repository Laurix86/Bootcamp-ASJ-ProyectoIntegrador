import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PurchasesOrderModel, OrdersDetailModel } from '../models/ordersModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiProviders = 'http://localhost:8080/providers';
  private apiProducts = 'http://localhost:8080/products';
  private apiPurchases = 'http://localhost:8080/purchase-order';
  private apiOrdersDetail = 'http://localhost:8080/order-detail';

  constructor(private http: HttpClient) { }


  public getAllOrders():Observable<PurchasesOrderModel[]>{
    return this.http.get<PurchasesOrderModel[]>(this.apiPurchases);
  }

  public getActiveOrders():Observable<PurchasesOrderModel[]>{
    return this.http.get<PurchasesOrderModel[]>(this.apiPurchases+`/active`);
  }

  public  savePurchaseOrder (infoOrder: PurchasesOrderModel, indexId: number):Observable<any>{
    
    if(indexId == -1){
      return this.http.post(this.apiPurchases, infoOrder, { observe: 'response', responseType: 'text' as 'json'  });
    
    }else{
      return this.http.put(this.apiPurchases, infoOrder, { observe: 'response', responseType: 'text' as 'json'  });
    
    }

}

public saveOrderDetail(arrOrdersDetal: OrdersDetailModel[]):Observable<any>{
  return this.http.post(this.apiPurchases, arrOrdersDetal, { observe: 'response', responseType: 'text' as 'json'  });
    
}




}