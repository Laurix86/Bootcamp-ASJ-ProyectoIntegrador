import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersModel } from 'src/app/models/ordersModel';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
constructor(public ordersServices: OrdersService, 
  public productosService: ProductsService, 
  public providerService:ProveedoresService,
  private activeRoute:ActivatedRoute, 
  private router:Router){}

public order: OrdersModel={
  id: 0,
  orderNumber: 0,
  orderDate: "",
  deliveryDate: "",
  infoExtra: '',
  providerOrder: '',
  productsOrder: {},
  totalOrder: 0,
  pendingOrder: true,
  activo: true
}

prodByCategoryList: any[]=[];
providersList: string[]=[];

detailOrder:any[]=[];
productoSeleccionado:any;
cantidadProd:number = 1;

msg: string= "";
title: string = "Orden Nueva";
indexOrden: any;

ngOnInit(): void {
    const hoy: Date = new Date();
    this.order.orderDate = hoy.toLocaleDateString();
    //console.log(this.order.orderDate)
    this.providersList = this.providerService.getProvidersList();
    

} 

setProducts(value:string){
  this.prodByCategoryList = this.productosService.getActiveProductsByCategory(value);
  console.log("prodByCate: ", this.prodByCategoryList)
  console.log("seleccionado", this.productoSeleccionado)
}

setProd(value:any){
  console.log("prod: ",value)
  this.productoSeleccionado = value;
  
}


submitOrder(form: NgForm){
  if(!form.valid){
    return
  }else{
    this.ordersServices.saveOrder(this.order, -1);
    this.msg = "Orden guardada correctamente";
    /* this.router.navigate(['/orders']); */
  }
}

resetForm(form: NgForm){
  form.reset();
}

addProducts(){
  
  if(this.detailOrder.length>0){

    this.detailOrder = this.detailOrder.map(elem =>{
      if(elem[1] == this.productoSeleccionado){
        elem[0]+= this.cantidadProd;
        return elem;
      }else{
        return elem;
      }
    })
  }else{
    console.log("prod en add", this.productoSeleccionado)
    this.detailOrder.push([ this.cantidadProd, parseInt(this.productoSeleccionado)]);
    console.log(this.detailOrder)
  }
  /* */
}

createDetail(){
  const arrProd: any[]=[];
  if(this.detailOrder){
    this.detailOrder.map(o => {
      arrProd.push(this.productosService.getProductsById(o[1]));
      })
  }


}

}
