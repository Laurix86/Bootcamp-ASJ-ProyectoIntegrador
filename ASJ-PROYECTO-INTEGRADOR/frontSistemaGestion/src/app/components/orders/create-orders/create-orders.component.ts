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
arrProdDetail: any[]=[];
infoDetail: any={
  cant: 0,
  nombre:"",
  valorProds:0
}

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
    /* this.createDetail();
    console.log(this.arrProdDetail) */

} 

setProducts(value:string){
  this.prodByCategoryList = this.productosService.getActiveProductsByCategory(value);
  this.order.providerOrder = value;
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
    this.order.productsOrder = this.arrProdDetail;
    this.ordersServices.saveOrder(this.order, -1);
    form.reset();
    this.router.navigate(['/orders']); 
  }
}

resetForm(form: NgForm){
  form.reset();
}

addProducts(){
  
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
 
}

createDetail(){
  
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

    /* this.detailOrder.map(o => {
      
      }) */

  }
  //this.arrProdDetail.push(otroAux)

}

}
