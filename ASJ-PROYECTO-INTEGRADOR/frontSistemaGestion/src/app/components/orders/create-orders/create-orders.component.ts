import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchasesOrderModel, OrdersDetailModel } from 'src/app/models/ordersModel';
import { ProductsModel } from 'src/app/models/productsModel';
import { ProvidersModel } from 'src/app/models/providersModel';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import Swal from 'sweetalert2';
import { Tooltip} from 'bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
constructor(private fb: FormBuilder,
  public ordersService: OrdersService, 
  public productosService: ProductsService, 
  public providerService:ProveedoresService,
  private activeRoute:ActivatedRoute, 
  private router:Router){

    this.purchasesOrdersForm = this.fb.group({
    
      purchases_order_code: ['', [Validators.required, Validators.minLength(3)]],
      purchases_order_date:[''],
      purchases_order_delivery_date:[''],
      purchases_order_information:['', [Validators.minLength(3)]],
      purchases_order_final_price: [''],
      providers_id:['', [Validators.minLength(3)]],
      orders_detail_product_price:['', [Validators.minLength(1)]],
      orders_detail_quantity:[''],
      products_id:[''],

    });

  }

purchasesOrdersForm: FormGroup;
subTotal: number = 0;
purchaseOrder: PurchasesOrderModel={
  purchases_order_id: -1,
  purchases_order_code: '',
  purchases_order_date: new Date(),
  purchases_order_delivery_date: new Date(),
  purchases_order_information: '',
  purchases_order_final_price: 0,
  is_pending: false,
  is_active: false,
  providers_id: {
    providers_id: 0,
    providers_denomination: ''
  }
}
orderDetail!: OrdersDetailModel;
orderDetailArr: OrdersDetailModel[]=[];
providersList: ProvidersModel[]=[];
producstList: ProductsModel[]=[];
ordersList: PurchasesOrderModel[]=[];
saveOrderId: number = -1;
/*
infoDetail: any={
  cant: 0,
  nombre:"",
  valorProds:0
}

detailOrder:any[]=[];
productoSeleccionado:any;
cantidadProd:number = 1;
*/

today:string = "";
msg: string= "";
title: string = "Orden Nueva";
indexOrden: any;
date: Date = new Date();

ngOnInit(): void {
  this.date= new Date();
  this.today = this.date.toLocaleDateString();
  this.getActiveProviders();
  console.log("Form: ", this.purchasesOrdersForm.value);
 
} 


addProduct(prodId: number, prodName: string, prodPrice: number){
  let exist:boolean = false;
  this.subTotal=0;
  //chequear si ya está cargado ese producto
  this.orderDetailArr.forEach(detail => {
    if(detail.products_id.products_id == prodId){
      detail.orders_detail_quantity++;
      exist = true;
    }

  });

  if(exist == false){
    this.orderDetail={
      orders_detail_id :-1,
      orders_detail_product_price: prodPrice,
      orders_detail_quantity: 1,
      products_id: {
        products_id: prodId,
        products_denomination: prodName
      },
      purchases_order_id:{
        purchases_order_id:-1,
      } 
      
    }
    this.orderDetailArr.push(this.orderDetail);

  }
  this.orderDetailArr.forEach(detail => {

    this.subTotal += (detail.orders_detail_quantity * detail.orders_detail_product_price);
  });

  if(this.orderDetailArr.length >0){
    this.purchasesOrdersForm.get('providers_id')?.disable();
  }

  this.purchasesOrdersForm.get('purchase_order_final_price')?.setValue(this.subTotal);
  console.log("Arr: ", this.orderDetailArr);
  console.log("det: ", this.orderDetail);
}



deleteProduct(indexProd: number){
  this.subTotal=0;
  
  this.orderDetailArr.splice(indexProd, 1);

  if(this.orderDetailArr.length >0){
    this.orderDetailArr.forEach(detail => {

      this.subTotal += (detail.orders_detail_quantity * detail.orders_detail_product_price);
    });
  
    this.purchasesOrdersForm.get('providers_id')?.disable();
  }else if(this.orderDetailArr.length ==0){
    this.subTotal = 0;
    this.purchasesOrdersForm.get('providers_id')?.enable();

  }

  this.purchasesOrdersForm.get('purchase_order_final_price')?.setValue(this.subTotal);
}




onQuantityChange(value:any){
  console.log("Value: ", value)
}

/*setProducts(value:string){
  this.prodByCategoryList = this.productosService.getActiveProductsByCategory(value);
  this.order.providerOrder = value;
  console.log("prodByCate: ", this.prodByCategoryList)
  console.log("seleccionado", this.productoSeleccionado)
}

setProd(value:any){
  console.log("prod: ",value)
  this.productoSeleccionado = value;
  
}*/


submitOrder():void{

  const newCode = this.purchasesOrdersForm.get('purchases_order_code')?.value;
  
  if(this.purchasesOrdersForm.invalid){
    
    Swal.fire({title:"Revisar el formulario y completar todos los campos requeridos."});
  }else if(this.orderDetailArr.length>0){
    this.ordersService.checkOrderCode(newCode).subscribe(
      (res) =>
      { console.log("Res: ", res)
        if(res){
          Swal.fire("Código de orden repetido, por favor modificar para poder continuar");
        }else {
          console.log("newCode: ", newCode)
          this.purchaseOrder.purchases_order_code = newCode;
          
          this.purchaseOrder.purchases_order_date = this.date;

          this.purchaseOrder.purchases_order_delivery_date = this.purchasesOrdersForm.get('purchases_order_delivery_date')?.value;
          
          this.purchaseOrder.purchases_order_final_price = this.subTotal;
          this.purchaseOrder.is_pending = true;
          this.purchaseOrder.is_active = true;
          this.purchaseOrder.providers_id ={
            providers_id: this.purchasesOrdersForm.get('providers_id')?.value,
            providers_denomination: ''
          }
          console.log("save: ", this.purchaseOrder)
          this.setPurchaseOrder();
        }
    });

  
}else if(this.orderDetailArr.length == 0){
 
  Swal.fire("No se han agregado productos en la orden.");
}
}

setPurchaseOrder(){
  this.ordersService.savePurchaseOrder(this.purchaseOrder, -1).subscribe({
    next:(response) => {
    
      const data = response.body;
     
      this.saveOrderId = data;
     
      this.orderDetailArr.forEach(elem => {
        elem.purchases_order_id.purchases_order_id = this.saveOrderId;
       

      });

      
      this.ordersService.saveOrderDetail(this.orderDetailArr).subscribe({
        next:(res)=>{
          const data = res.body;
          if(data == "OK"){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Guardado correctamente",
              showConfirmButton: false,
              timer: 1500
            });
    
            this.router.navigate(['/ordenes']);
          }else{
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: res,
              showConfirmButton: false,
             
            });
          }
        }
      });
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

getActiveProviders(){
  this.providerService.getActiveProviders().subscribe({
    next:(data) => {
      this.providersList = data;
    },
    error:(error)=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Se produjo un error",
        text: error.msg,
        showConfirmButton: false,
       
      });
    }
  })
}

showProducts(providerId: any){
  this.productosService.getProductsByProvider(providerId).subscribe({
    next:(data) => {
      this.producstList = data;
    },
    error:(error)=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Se produjo un error",
        text: error.msg,
        showConfirmButton: false,
       
      });
    }
  })
}

resetForm():void{
  this.purchasesOrdersForm.reset();
}

/*addProducts(){
  
  if(this.detailOrder.length>0){
    

    for (const ol of this.detailOrder) {
      if(ol[1] == this.productoSeleccionado){
        ol[0]+= this.cantidadProd;
       
      }
    }

    
  }else{
    
    console.log("prod en add", this.productoSeleccionado)
    this.detailOrder.push([ this.cantidadProd, parseInt(this.productoSeleccionado)]);
    console.log(this.detailOrder)
  }
  this.createDetail();
 
}*/

/*createDetail(){
  
  if(this.detailOrder){
    
    for(let o of this.detailOrder){
      console.log("o1", o)
      
      const auxProd = this.productosService.getProductsById(o[1]);
      console.log("auxProd", auxProd)
      this.infoDetail.nombre= auxProd[0].nombre; 
      this.infoDetail.cant = o[0];
      this.infoDetail.valorProds = auxProd[0].precio * this.infoDetail.cant;
      console.log("infoDetail", this.infoDetail)
      this.arrProdDetail.push(this.infoDetail)
      this.order.totalOrder+= this.infoDetail.valorProds;
      console.log("otro",this.arrProdDetail)
    }

    

  }
  

}*/

}
