import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayProveedoresComponent } from './components/proveedores/display-proveedores/display-proveedores.component';
import { DisplayProductsComponent } from './components/products/display-products/display-products.component';
import { DisplayOrdersComponent } from './components/orders/display-orders/display-orders.component';
import { CreateProveedoresComponent } from './components/proveedores/create-proveedores/create-proveedores.component';
import { CreateOrdersComponent } from './components/orders/create-orders/create-orders.component';
import { CreateProductsComponent } from './components/products/create-products/create-products.component';

const routes: Routes = [
  {path: 'inicio', component: DisplayProveedoresComponent},
  {path: 'proveedores', component: DisplayProveedoresComponent},
  {path: 'proveedores/nuevo', component: CreateProveedoresComponent},
  {path: 'proveedores/:idProveedor', component: CreateProveedoresComponent},
  {path: 'productos', component: DisplayProductsComponent},
  {path: 'productos/nuevo', component: CreateProductsComponent},
  {path: 'productos/:idProducto', component: CreateProductsComponent},
  {path: 'ordenes', component: DisplayOrdersComponent},
  {path: 'ordenes/nueva-orden', component: CreateOrdersComponent},
  {path: 'ordenes/:idOrden', component: CreateOrdersComponent},

  

  /// otras rutas
  {path: '**', pathMatch:'full', redirectTo: 'MainComponent'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 

export const routing = RouterModule.forRoot(routes);
