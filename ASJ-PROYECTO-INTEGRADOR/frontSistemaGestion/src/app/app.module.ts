import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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
import { filterPipePipe } from './components/pipes/filterPipe.pipe';
import { ShowOrderComponent } from './components/orders/show-order/show-order.component';
import { MainComponent } from './components/main/main.component';

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
    DisplayOrdersComponent,
    filterPipePipe,
    ShowOrderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
