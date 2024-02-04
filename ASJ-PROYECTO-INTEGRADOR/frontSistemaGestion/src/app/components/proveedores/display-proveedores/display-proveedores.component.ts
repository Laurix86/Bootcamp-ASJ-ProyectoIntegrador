import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProvidersModel } from 'src/app/models/providersModel';
import { Tooltip} from 'bootstrap';

@Component({
  selector: 'app-display-proveedores',
  templateUrl: './display-proveedores.component.html',
  styleUrls: ['./display-proveedores.component.css']
})
export class DisplayProveedoresComponent implements OnInit{

  public provider: ProvidersModel ={
    code: '',
    denomination: '',
    email: '',
    phone: '',
    cuit: '',
    street: '',
    addressNumber: 0,
    city: '',
    contact_firstName: '',
    contact_lastName: '',
    contact_phone: '',
    contact_email: '',
    contact_role: '',
    is_deleted: false,
    jurisdictions: {
      id: 0,
      name: '',
      country: {
        id: 0,
        name: ''
      }
    },
    taxCategories: {
      id: 0,
      taxName: ''
    },
    sectorsField: {
      id: 0,
      sectorName: ''
    }
  }
  providerList: ProvidersModel[] = [];
  search: string = "";
  empty = "";
  constructor(private proveedoresService:ProveedoresService){}

  ngOnInit(): void {
    this.getProvidersToShow();
    
    
      
  }

  

  getProvidersToShow(){
    this.proveedoresService.getActiveProviders().subscribe(
      (provider) => {
        this.providerList = provider;
        if(this.providerList.length ==0){
           
          this.empty = "No hay proveedores para mostrar"
        }
        console.log("lentgh", this.providerList)
      }
    );
  }

  desactivarProv(indexProv: number){
    this.proveedoresService.deleteProvider(indexProv);
    this.getProvidersToShow();
  }
  
}

