import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProvidersModel } from 'src/app/models/providersModel';

@Component({
  selector: 'app-display-proveedores',
  templateUrl: './display-proveedores.component.html',
  styleUrls: ['./display-proveedores.component.css']
})
export class DisplayProveedoresComponent implements OnInit{

  providerList: ProvidersModel[] = [];
  search: string = "";
  empty = "";
  constructor(private proveedoresService:ProveedoresService){}

  ngOnInit(): void {
    this.getProvidersToShow();
    if(this.providerList.length ==0){
      /* console.log("lentgh", this.providerList.length) */
      this.empty = "No hay proveedores para mostrar"
    }
      
  }

  getProvidersToShow(){
    this.proveedoresService.getActiveProviders().subscribe(
      (provider) => {
        if(provider.length == 0){
          this.empty = "No hay proveedores para mostrar";
        }
        this.providerList = provider;
      }
    );
    console.log("prov: ", this.providerList)
    
  }

  desactivarProv(indexProv: number){
    this.proveedoresService.deleteProvider(indexProv);
    this.getProvidersToShow();
  }
  
}

