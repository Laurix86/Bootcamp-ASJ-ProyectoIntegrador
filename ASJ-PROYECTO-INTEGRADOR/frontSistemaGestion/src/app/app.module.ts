import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateProveedoresComponent } from './components/proveedores/create-proveedores/create-proveedores.component';
import { DisplayProveedoresComponent } from './components/proveedores/display-proveedores/display-proveedores.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateProductsComponent } from './components/products/create-products/create-products.component';
import { DisplayProductsComponent } from './components/products/display-products/display-products.component';
import { CreateOrdersComponent } from './components/orders/create-orders/create-orders.component';
import { DisplayOrdersComponent } from './components/orders/display-orders/display-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProveedoresComponent,
    DisplayProveedoresComponent,
    NavMenuComponent,
    SidebarMenuComponent,
    FooterComponent,
    CreateProductsComponent,
    DisplayProductsComponent,
    CreateOrdersComponent,
    DisplayOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
