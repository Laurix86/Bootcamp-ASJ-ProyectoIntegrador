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

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
constructor(private fb: FormBuilder,
  public ordersServices: OrdersService, 
  public productosService: ProductsService, 
  public providerService:ProveedoresService,
  private activeRoute:ActivatedRoute, 
  private router:Router){

    this.purchasesOrdersForm = this.fb.group({
      purchases_order_id: [-1],
      purchases_order_code: ['', [Validators.required, Validators.minLength(3)]],
      purchases_order_date:[''],
      purchases_order_delivery_date:['', [Validators.required, Validators.minLength(3)]],
      purchases_order_information:['', [Validators.minLength(3)]],
      purchases_order_final_price: ['', [Validators.required, Validators.minLength(3)]],
      providers_id:['', [Validators.required, Validators.minLength(3)]],
      orders_detail_product_price:['', [Validators.required, Validators.minLength(3)]],
      orders_detail_quantity:['', [Validators.required]],
      products_id:['', [Validators.required, Validators.minLength(3)]],

    })

  }

purchasesOrdersForm: FormGroup;
subTotal: number = 0;
purchaseOrder!: PurchasesOrderModel;
orderDetail!: OrdersDetailModel;
orderDetailArr: OrdersDetailModel[]=[];
providersList: ProvidersModel[]=[];
producstList: ProductsModel[]=[];

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

ngOnInit(): void {
  const date: Date = new Date();
  this.today = date.toLocaleDateString();
  this.getActiveProviders();

    
    //console.log(this.order.orderDate)
   // this.providersList = this.providerService.getProvidersList();
    /* this.createDetail();
    console.log(this.arrProdDetail) */

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
        purchases_order_id: -1,
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
  if(this.purchasesOrdersForm.invalid){
    Swal.fire("Revisar el formulario y completar todos los campos requeridos.");
  }else{
    this.purchaseOrder = this.purchasesOrdersForm.value;
    console.log("save: ", this.purchaseOrder)

    /*return this.ordersServices.saveOrder(this.purchasesOrdersForm.value, -1);
    this.router.navigate(['/orders']); */
  }
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

resetForm(form: NgForm){
  form.reset();
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
