import { Component, OnInit  } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { PurchasesOrderModel, OrdersDetailModel } from 'src/app/models/ordersModel';
import Swal from 'sweetalert2';
import { Tooltip} from 'bootstrap';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent {

  public purchaseOrder: PurchasesOrderModel={
    purchases_order_id:-1,
    purchases_order_code: '',
    purchases_order_date: new Date(),
    purchases_order_delivery_date: new Date(),
    purchases_order_information: '',
    purchases_order_final_price: 0,
    is_pending: true,
    is_active: true,
    providers_id: {
      providers_id: 0,
      providers_denomination: ''
    },
    
  }

  public orderDetail: OrdersDetailModel={
    orders_detail_product_price: 0,
    orders_detail_quantity: 0,
    products_id: {
      products_id: 0,
      products_denomination: ''
    },
    purchases_order_id: {
      purchases_order_id: 0
    }
  }

  constructor(private ordersService: OrdersService){}

  ordersList: PurchasesOrderModel[]=[];
  search: string = "";
  empty = "";
  orderStatus: string = 'todas';

  ngOnInit():void{
    this.getOrdersToShow();
    
  }

  getOrdersToShow(){
    this.ordersService.getAllOrders().subscribe({
      next:(data) => {
        this.ordersList = data;
        if(this.ordersList.length == 0){
          this.empty = "No hay ordenes para mostrar"
        }
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
    }
      
    )

  }

  filterOrders(status: string): void {
    this.orderStatus = status;
  }

  desactivarOrder(id:number, auxOrder: PurchasesOrderModel){

    Swal.fire({
      title: "Va a cambiar el estado de la orden seleccionada",
      text: "Si está seguro, presione para continuar, sino cancelar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.ordersService.inactivateOrder(id, auxOrder).subscribe(
          (data)=> this.getOrdersToShow()


        )
      /*  Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });*/
      }
    });

    
  }
  
}
