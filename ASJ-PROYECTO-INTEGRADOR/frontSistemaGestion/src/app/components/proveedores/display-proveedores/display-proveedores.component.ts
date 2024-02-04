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
    
    providers_code: '',
    providers_denomination: '',
    providers_email: '',
    providers_phone: '',
    providers_cuit: '',
    providers_street: '',
    providers_addressNumber: 0,
    providers_city: '',
    providers_contact_firstName: '',
    providers_contact_lastName: '',
    providers_contact_phone: '',
    providers_contact_email: '',
    providers_contact_role: '',
    is_deleted: false,
    jurisdictions_id: {
      jurisdictions_id: 0,
      jurisdictions_name: '',
      countries: {
        countries_id: 0,
        countries_name: ''
      }
    },
    taxCategories_id: {
      taxCategories_id: 0,
      taxCategories_denomination: ''
    },
    sectorsField_id: {
      sectorsfield_id: 0,
      sectorsfield_name: ''
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

