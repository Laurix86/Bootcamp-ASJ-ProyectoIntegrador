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

@NgModule({
  declarations: [
    AppComponent,
    CreateProveedoresComponent,
    DisplayProveedoresComponent,
    NavMenuComponent,
    SidebarMenuComponent,
    FooterComponent
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
