import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ProvidersModel } from 'src/app/models/providersModel';
import Swal from 'sweetalert2';
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
    providers_addressnumber: 0,
    providers_city: '',
    providers_cp: '',
    providers_contact_firstname: '',
    providers_contact_lastname: '',
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
    taxcategories_id: {
      taxcategories_id: 0,
      taxcategories_denomination: ''
    },
    sectorsfield_id: {
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

  desactivarProv(indexProv: number, denomination: string){

    Swal.fire({
      title: `Se dará de baja al proveedor ${denomination}`,
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.proveedoresService.deleteProvider(indexProv).subscribe(
          () => this.getProvidersToShow()
        );
        Swal.fire(
         // 'Productos',
          'Proveedor eliminado correctamente.',
          'success'
        )
      }
    })

   // this.proveedoresService.deleteProvider(indexProv);
    // this.getProvidersToShow();
  }
  
}

