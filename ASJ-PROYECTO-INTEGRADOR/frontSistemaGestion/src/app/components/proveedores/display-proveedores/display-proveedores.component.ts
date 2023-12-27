import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-display-proveedores',
  templateUrl: './display-proveedores.component.html',
  styleUrls: ['./display-proveedores.component.css']
})
export class DisplayProveedoresComponent implements OnInit{

  providerList: any=[];
  search: string = "";
  empty = "";
  constructor(private proveedoresService:ProveedoresService){}

  ngOnInit(): void {
    this.getProvidersToShow();
    if(this.providerList.length ==0){
      this.empty = "No hay proveedores para mostrar"
    }
      
  }

  getProvidersToShow(){
    this.providerList = this.proveedoresService.getActiveProviders();
    console.log("prov: ", this.providerList)
    
  }

  desactivarProv(indexProv: number){
    this.proveedoresService.deleteProvider(indexProv);
    this.getProvidersToShow();
  }
  
}

