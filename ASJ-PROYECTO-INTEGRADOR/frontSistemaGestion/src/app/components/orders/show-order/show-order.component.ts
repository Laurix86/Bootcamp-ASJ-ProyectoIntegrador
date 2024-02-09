import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersDetailModel, PurchasesOrderModel } from 'src/app/models/ordersModel';
import { OrdersService } from 'src/app/services/orders.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit{

  constructor(
    public ordersService: OrdersService,
    private activeRoute:ActivatedRoute, 
    private router:Router){}


    indexOrder: any;

    purchaseOrder!: PurchasesOrderModel;
    ordersDetailArr: OrdersDetailModel[]=[];
    orderDetail!: OrdersDetailModel;

    ngOnInit(): void {
        

      this.indexOrder = this.activeRoute.snapshot.paramMap.get('idOrden')||-1;

      this.ordersService.getPurchaseOrderById(this.indexOrder).subscribe({
        next:(data)=>{
          this.purchaseOrder = data;
          console.log("orden: ",this.purchaseOrder)
          this.ordersService.getOrdersDetailByPurchaseOrderId(this.purchaseOrder.purchases_order_id).subscribe({
            next:(resp) =>{
              console.log(resp)
              this.ordersDetailArr = resp;
            }
          })
        },
        error: (error)=>{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Se produjo un error",
            text: error.msg,
            showConfirmButton: false,
           
          });
        }
      });

      
    }

 /*   getPurchaseOrderById(orderId:number): PurchasesOrderModel{
      this.ordersService.getPurchaseOrderById(orderId).subscribe({
        next:(data)=>{
          this.purchaseOrder = data;
          console.log("orden: ",this.purchaseOrder)
        },
        error: (error)=>{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Se produjo un error",
            text: error.msg,
            showConfirmButton: false,
           
          });
        }
      })
      return this.purchaseOrder;
    }*/

}
