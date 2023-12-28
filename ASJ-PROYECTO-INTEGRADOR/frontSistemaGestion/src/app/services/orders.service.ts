import { Injectable } from '@angular/core';
import { OrdersModel } from '../models/ordersModel';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor() { }

  ordersModelArr: OrdersModel[]=[];
  singleOrden: OrdersModel = {
    id: -1,
    orderNumber: 0,
    orderDate: '',
    deliveryDate: '',
    infoExtra: '',
    providerOrder: '',
    productsOrder: {},
    totalOrder: 0,
    pendingOrder: true,
    activo: true
  }

  public getAllOrders(){
    const auxListado = localStorage.getItem("order");
    if(auxListado){
      this.ordersModelArr = JSON.parse(auxListado);
    }else{
      this.ordersModelArr = [];
    }
   
    return this.ordersModelArr; 
  }

  public getActiveOrders(){
    const auxActiveOrders = this.getAllOrders();
    if(auxActiveOrders.length <=0){
      return [];
    }else{
      console.log("auxArr",this.getAllOrders())
      this.ordersModelArr = auxActiveOrders.filter(elem => elem.activo);
      return this.ordersModelArr;
    }
  }

  public  saveOrder (infoOrder: OrdersModel, indexId: number){
    const auxOrders = this.getAllOrders();
    if(indexId ==-1){
      infoOrder.id = auxOrders.length;
      auxOrders.push(infoOrder);
      localStorage.setItem("order", JSON.stringify(auxOrders));
    } /* else{
      this.ordersModelArr = auxOrders.map(elem => {
        if(elem.id == indexId){
          elem = infoOrder;
        }
        return elem;
      })
      
      localStorage.setItem("order", JSON.stringify(this.ordersModelArr));

    } */
  }
}
