import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesModel, JurisdictionsModel } from 'src/app/models/providersModel';
import { SectorsFiedlModel } from 'src/app/models/sectorsFieldModel';
import { TaxCategoriesModel } from 'src/app/models/taxCategoriesModel';
import { ProvidersModel } from 'src/app/models/providersModel';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2'
import { CuitFormatPipe } from '../../pipes/cuit-format.pipe';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent implements OnInit{
 
  constructor(private fb: FormBuilder, public proveedoresService:ProveedoresService,
    private activeRoute:ActivatedRoute, private router:Router){

    this.providersForm = this.fb.group({
      providers_id:[0],
      providers_code: ['', [Validators.required, Validators.minLength(3)]],
      providers_denomination: ['', [Validators.required, Validators.minLength(2)]],
      sectorsfield_id: ['', [Validators.required]],
      providers_logo: ['', [Validators.minLength(3)]],
      providers_website: ['', [Validators.minLength(3)]],
      providers_email: ['',[Validators.required, Validators.minLength(3)]],
      providers_phone: ['',[Validators.required, Validators.minLength(6)]],
      providers_country: ['',[Validators.required]],
      jurisdictions_id: ['',[Validators.required,]],
      providers_street:['',[Validators.required, Validators.minLength(3)]],
      providers_addressnumber:['',[Validators.required, Validators.minLength(1)]],
      providers_cp:['',[Validators.required, Validators.minLength(3)]],
      providers_city:['',[Validators.required, Validators.minLength(3)]],
      providers_addressinfo:['',[ Validators.minLength(1)]],
      providers_cuit:['',[Validators.required,Validators.pattern('[0-9]{10,11}')]],
      taxcategories_id:['',[Validators.required]],
      providers_contact_firstname: ['',[Validators.required, Validators.minLength(2)]],
      providers_contact_lastname: ['',[Validators.required, Validators.minLength(2)]],
      providers_contact_role: ['',[Validators.required, Validators.minLength(2)]],
      providers_contact_phone: ['',[Validators.required, Validators.minLength(5)]],
      providers_contact_email:['',[Validators.required, Validators.minLength(5)]],

    });
  }

  providersForm: FormGroup;
  msg: string= "";
  title: string = "";
  indexProv: any;

  taxesList: TaxCategoriesModel[] = [];
  rubroLista: SectorsFiedlModel[]=[];
  countriesList: CountriesModel[]=[];
  jurisdictionsList: JurisdictionsModel[]=[];
  provider!: ProvidersModel;

  ngOnInit(): void {
    this.getRubros();
    this. getCountries();
    this.showJurisdictions(0);
    this.getTaxCategories();

    this.indexProv = this.activeRoute.snapshot.paramMap.get('idProveedor')||-1;
 /*    console.log(this.indexProv) */
    
    if(this.indexProv == -1){
      this.title = "Proveedor Nuevo";
      
    }
    else{
      this.title = "Proveedor Existente";
      this.fillForm(this.indexProv);
    }
    console.log(this.rubroLista)
    // Lógica de inicialización, carga de datos, etc.
  }

  onCuitInput(event: any) {
    const inputValue = event.target.value.replace(/\D/g, ''); // Eliminar no dígitos
    const formattedValue = inputValue.replace(/^(\d{2})(\d{0,8})(\d{0,1})$/, '$1-$2-$3'); // Formato XX-XXXXXXXX-X
    this.providersForm.get('cuit')?.setValue(formattedValue, { emitEvent: false });
  }

  submitProvider(): void{
    if(this.providersForm.invalid){
      Swal.fire("Revisar el formulario y completar todos los campos requeridos.");
    } else if(this.indexProv == -1){
      this.provider = this.providersForm.value;
      this.provider.jurisdictions_id.jurisdictions_id = this.providersForm.get('jurisdictions_id')?.value;
      this.provider.sectorsfield_id.sectorsfield_id = this.providersForm.get('sectorsfield_id')?.value;
      this.provider.taxcategories_id.taxcategories_id = this.providersForm.get('taxcategories_id')?.value;
      console.log("Envio: ", this.provider)
      this.proveedoresService.saveProvider(this.provider, -1).subscribe();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 1500
      });

     }else if(this.indexProv >= 0){
      this.provider = this.providersForm.value;
      this.provider = this.providersForm.value;
      this.provider.jurisdictions_id ={
        jurisdictions_id: this.providersForm.get('jurisdictions_id')?.value,
        jurisdictions_name: '',
        countries:{
          countries_id:  this.providersForm.get('providers_country')?.value,
          countries_name:''
        }


      }
      
      this.provider.sectorsfield_id = {
        sectorsfield_id: this.providersForm.get('sectorsfield_id')?.value,
      sectorsfield_name:''}

      this.provider.taxcategories_id = {
        taxcategories_id: this.providersForm.get('taxcategories_id')?.value,
      taxcategories_denomination:''}

      console.log("Envio: ", this.provider)
      this.proveedoresService.saveProvider(this.provider, this.indexProv).subscribe();
      console.log("Index", this.indexProv)
      console.log("Envio: ", this.provider)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
       this.router.navigate(['/proveedores']);
     }


  }

  resetForm(): void{
    this.providersForm.reset();
  }

  fillForm(index: number){
    this.proveedoresService.getProviderById(index).subscribe(
      (data)=>{
        
        this.provider = data;
        console.log("code: ",this.provider  )
        this.providersForm.patchValue({
          providers_id: this.provider.providers_id,
          providers_code: this.provider.providers_code,
          providers_denomination: this.provider.providers_denomination,
          sectorsfield_id: this.provider.sectorsfield_id.sectorsfield_id,
          providers_logo: this.provider.providers_logo,
          providers_webSite: this.provider.providers_website,
          providers_email: this.provider.providers_email,
          providers_phone: this.provider.providers_phone,
          providers_country: this.provider.jurisdictions_id.countries.countries_id,
          jurisdictions_id: this.provider.jurisdictions_id.jurisdictions_id,
          providers_street:this.provider.providers_street,
          providers_addressnumber:this.provider.providers_addressnumber,
          providers_city: this.provider.providers_city,
          providers_cp:this.provider.providers_cp,
          providers_addressinfo:this.provider.providers_addressinfo,
          providers_cuit:this.provider.providers_cuit,
          taxcategories_id:this.provider.taxcategories_id.taxcategories_id,
          providers_contact_firstname: this.provider.providers_contact_firstname,
          providers_contact_lastname: this.provider.providers_contact_lastname,
          providers_contact_role: this.provider.providers_contact_role,
          providers_contact_phone: this.provider.providers_contact_phone,
          providers_contact_email:this.provider.providers_contact_email,
          
         
        })
        
      }
      
      )


  }

  onCodeChange(): void{

  }

  getRubros(){
    this.proveedoresService.getRubros().subscribe(
      (sectors) => {
       console.log("sec: ", sectors)
        if(sectors.length == 0){
          console.log("No hay rubros");
        }
        this.rubroLista = sectors;
        
      }
    );
    
    
  }

  getCountries(){
    this.proveedoresService.getCountries().subscribe(
      (countries)=>{
        this.countriesList = countries;
        console.log("Paises: ", this.countriesList)
      }
    )
  }

  showJurisdictions(value:any){
    console.log("seleccionado: ", value)
    this.proveedoresService.getJurisdictionsByCountry(value).subscribe(
      (jurisdictions)=>{
        this.jurisdictionsList = jurisdictions;
        console.log("res jur:",jurisdictions)
      }
      
    )
   // this.provider.jurisdictions.country.id = selectedOption.id;
   // this.provider.jurisdictions.country.name = selectedOption.name;
   // console.log(this.provider.jurisdictions.country.id , this.provider.jurisdictions.country.name);
  }

  getTaxCategories(){
    this.proveedoresService.getTaxCategories().subscribe(
      (taxes) => {
        console.log("tax ", taxes)
        this.taxesList = taxes;
      }
    )
  }
}
