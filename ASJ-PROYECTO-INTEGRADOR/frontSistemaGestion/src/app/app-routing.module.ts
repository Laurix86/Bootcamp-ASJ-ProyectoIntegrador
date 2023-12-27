import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayProveedoresComponent } from './components/proveedores/display-proveedores/display-proveedores.component';
import { DisplayProductsComponent } from './components/products/display-products/display-products.component';
import { DisplayOrdersComponent } from './components/orders/display-orders/display-orders.component';
import { CreateProveedoresComponent } from './components/proveedores/create-proveedores/create-proveedores.component';

const routes: Routes = [
  {path: 'inicio', component: DisplayProveedoresComponent},
  {path: 'proveedores', component: DisplayProveedoresComponent},
  {path: 'productos', component: DisplayProductsComponent},
  {path: 'ordenes', component: DisplayOrdersComponent},
  {path: 'proveedores/:idProveedor', component: CreateProveedoresComponent},
  /// otras rutas
  {path: '**', pathMatch:'full', redirectTo: 'MainComponent'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 

export const routing = RouterModule.forRoot(routes);