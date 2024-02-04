import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesModel, JurisdictionsModel } from 'src/app/models/providersModel';
import { SectorsFiedlModel } from 'src/app/models/sectorsFieldModel';
import { TaxCategoriesModel } from 'src/app/models/taxCategoriesModel';
import { ProvidersModel } from 'src/app/models/providersModel';
import { ProveedoresService } from 'src/app/services/proveedores.service';
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
      code: ['', [Validators.required, Validators.minLength(3)]],
      denomination: ['', [Validators.required, Validators.minLength(2)]],
      sectorsField: ['', [Validators.required]],
      logo: ['', [Validators.minLength(3)]],
      webSite: ['', [Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3)]],
      phone: ['',[Validators.required, Validators.minLength(6)]],
      country: ['',[Validators.required]],
      jurisdiction: ['',[Validators.required,]],
      street:['',[Validators.required, Validators.minLength(3)]],
      nroStreet:['',[Validators.required, Validators.minLength(1)]],
      codPostal:['',[Validators.required, Validators.minLength(3)]],
      extraInfo:['',[ Validators.minLength(1)]],
      cuit:['',[Validators.required,Validators.pattern('[0-9]{10,11}')]],
      iva:['',[Validators.required]],
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      rol: ['',[Validators.required, Validators.minLength(2)]],
      phoneContact: ['',[Validators.required, Validators.minLength(5)]],
      emailContact:['',[Validators.required, Validators.minLength(5)]],

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

    }
  }

  resetForm(): void{
    this.providersForm.reset();
  }

  fillForm(index: number){
    this.proveedoresService.getProviderById(index).subscribe(
      (data)=>{
        
        this.provider = data;
        console.log("code: ",this.provider   )
        this.providersForm.patchValue({
          code: this.provider.code,
         
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
