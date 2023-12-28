import { Component, OnInit  } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent {
  constructor(private ordersService: OrdersService){}

  ordersList: any=[];
  search: string = "";
  empty = "";

  ngOnInit():void{
    this.getOrdersToShow();
    if(this.ordersList.length == 0){
      this.empty = "No hay ordenes para mostrar"
    }
  }

  getOrdersToShow(){
    this.ordersList = this.ordersService.getAllOrders();

  }

  desactivarOrder(id:number){

  }
  
}
