import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { ProviderModel } from '../../../models/providersModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-proveedores',
  templateUrl: './create-proveedores.component.html',
  styleUrls: ['./create-proveedores.component.css']
})
export class CreateProveedoresComponent implements OnInit{

  public provider: ProviderModel ={
    id: -1,
    code: "",
    razonSocial: '',
    rubro: '',
    sitioWeb: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    pais: '',
    cuit: '',
    condIVA: '',
    nombre: '',
    apellido: '',
    teleContacto: '',
    mailContacto: '',
    rolContacto: '',
    activo: true
  };

  /* optSelectIva =["Responsable Inscripto", "Autónomo", "Monotributista", "Exento", "Consumidor Final"]; */
  msg: string= "";
  title: string = "";
  indexProv: any;

  constructor(public proveedoresService:ProveedoresService,
              private activeRoute:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    
    /* ---revisar 
      this.activeRoute.queryParams.subscribe(param =>{
      console.log("param",this.activeRoute.snapshot.paramMap.get('idProveedor'))
      this.indexProv = parseInt(param['idProveedor'])||null;

    }); */
    this.indexProv = this.activeRoute.snapshot.paramMap.get('idProveedor')||-1;
    console.log(this.indexProv)
    
    if(this.indexProv == -1){
      this.title = "Guardar Proveedor Nuevo";
      
    }
    else{
      this.title = "Modificar Proveedor";
      this.fillForm(this.indexProv);
    }

  }

  submitProveedor(form: NgForm){
    if(!form.valid){
      ///modal
      return
    }else if(this.indexProv == null){
      
      this.provider.condIVA = this.checkIva(this.provider.condIVA)
      console.log("cond: ",this.provider.condIVA )
      this.proveedoresService.saveProvider(this.provider, -1);
      this.msg = "Proveedor guardado correctamente";
    }else if(this.indexProv >= 0){
      this.proveedoresService.saveProvider(this.provider, this.indexProv);
      this.msg = "Proveedor guardado correctamente";
      this.router.navigateByUrl('proveedores');
    }
  }


  resetForm(form: NgForm){
    form.reset();
  }

  fillForm(index: number){
    
    this.provider = this.proveedoresService.getAllProviders()[index];
    
    //console.log("llenar",this.provider)  
    }
  
    checkIva(op: string):string{
     
      switch (op) {
        case "respInsc":
          return "Responsable Inscripto";
        case "auton":
          return "Autónomo";
        case "monot":
          return "Monotributista";
        case "exc":
          return "Exento";
        case "consFin":
          return "Consumidor Final";
        default:
          return "No declarado";
      }
    }
  }

 