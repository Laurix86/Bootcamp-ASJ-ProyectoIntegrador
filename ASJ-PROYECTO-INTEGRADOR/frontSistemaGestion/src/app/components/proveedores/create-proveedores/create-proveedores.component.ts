import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { CountriesModel, JurisdictionsModel, ProvidersModel } from '../../../models/providersModel';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorsFiedlModel } from 'src/app/models/sectorsFieldModel';
import { TaxCategoriesModel } from 'src/app/models/taxCategoriesModel';

@Component({
  selector: 'app-create-proveedores',
  templateUrl: './create-proveedores.component.html',
  styleUrls: ['./create-proveedores.component.css']
})
export class CreateProveedoresComponent implements OnInit{

  constructor(public proveedoresService:ProveedoresService,
    private activeRoute:ActivatedRoute, private router:Router){}
    
  public provider: ProvidersModel ={
    id:0,
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
  };

  taxesList: TaxCategoriesModel[] = [];
  rubroLista: SectorsFiedlModel[]=[];
  countriesList: CountriesModel[]=[];
  jurisdictionsList: JurisdictionsModel[]=[];
  //: any =this.proveedoresService.getRubros();

  /* optSelectIva =["Responsable Inscripto", "Autónomo", "Monotributista", "Exento", "Consumidor Final"]; */
  msg: string= "";
  title: string = "";
  indexProv: any;

  
  
  ngOnInit(): void {
  /* this.proveedoresService.getRubros().subscribe((elem)=>{
      console.log("ELem ",elem)
      this.rubroLista= elem;
      console.log("lista ",this.rubroLista)
    });*/
   this.getRubros();
   this.getTaxCategories();
   this.getCountries();
   /* this.proveedoresService.getRubros().subscribe(
      (sectorsField) => {
        this.rubroLista = sectorsField;
        console.log("Datos de rubros recibidos:", this.rubroLista);
      }
    );*/
    /* ---revisar 
      this.activeRoute.queryParams.subscribe(param =>{
      console.log("param",this.activeRoute.snapshot.paramMap.get('idProveedor'))
      this.indexProv = parseInt(param['idProveedor'])||null;

    }); */
    this.indexProv = this.activeRoute.snapshot.paramMap.get('idProveedor')||-1;
 /*    console.log(this.indexProv) */
    
    if(this.indexProv == -1){
      this.title = "Proveedor Nuevo";
      
    }
    else{
      this.title = "Proveedor Existente";
      this.fillForm(this.indexProv);
    }

  }

  submitProveedor(form: NgForm){
    if(!form.valid){
      ///modal
      return
    }else if(this.indexProv == -1){
      
     /* this.provider.taxCategories_id = this.checkIva(this.provider.taxCategories_id)
      console.log("cond: ",this.provider.taxCategories_id )
      this.proveedoresService.saveProvider(this.provider, -1);
      this.msg = "Proveedor guardado correctamente";*/
    }else if(this.indexProv >= 0){
      this.proveedoresService.saveProvider(this.provider, this.indexProv);
      this.msg = "Proveedor guardado correctamente";
      this.router.navigate(['/proveedores']);
    }
  }


  resetForm(form: NgForm){
    form.reset();
  }

  fillForm(index: number){
    
    //this.provider = this.proveedoresService.getAllProviders()[index];
    
    //console.log("llenar",this.provider)  
    }
  
    checkIva(selectedOption: {id: number, name: string}){
      this.provider.taxCategories.id = selectedOption.id;
      this.provider.taxCategories.taxName = selectedOption.name;
      console.log( this.provider.taxCategories.id , this.provider.taxCategories.taxName);
    }

    getRubros(){
      this.proveedoresService.getRubros().subscribe(
        (sectorsField) => {
         
          if(sectorsField.length == 0){
            console.log("No hay rubros");
          }
          this.rubroLista = sectorsField;
          
        }
      );
      
      
    }

    setRubro(selectedOption: {id: number, name: string}){
      
      this.provider.sectorsField.id = selectedOption.id;
      this.provider.sectorsField.sectorName = selectedOption.name;
      console.log( this.provider.sectorsField.id , this.provider.sectorsField.sectorName);
    }
 

  getTaxCategories(){
    this.proveedoresService.getTaxCategories().subscribe(
      (taxes) => {
        console.log("tax ", taxes)
        this.taxesList = taxes;
      }
    )
  }

  getCountries(){
    this.proveedoresService.getCountries().subscribe(
      (countries)=>{
        this.countriesList = countries;
      }
    )
  }

  showJurisdictions(selectedOption: {id: number, name: string}){
    this.provider.jurisdictions.country.id = selectedOption.id;
    this.provider.jurisdictions.country.name = selectedOption.name;
    this.proveedoresService.getJurisdictionsByCountry(selectedOption.id).subscribe(
      (jurisdictions)=>{
        this.jurisdictionsList = jurisdictions;
      }
    )

    console.log( this.provider.sectorsField.id , this.provider.sectorsField.sectorName);
  }
} 