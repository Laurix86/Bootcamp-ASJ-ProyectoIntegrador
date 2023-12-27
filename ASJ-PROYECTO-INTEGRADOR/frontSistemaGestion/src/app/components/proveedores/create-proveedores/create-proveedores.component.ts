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
    code: -1,
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

  msg: string= "";
  title: string = "";
  indexProv: any;

  constructor(public proveedoresService:ProveedoresService,
              private activeRoute:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(param =>{
      this.indexProv = parseInt(param['idProveedor'])||null;

    });
    if(this.indexProv == null){
      this.title = "Guardar Proveedor Nuevo";
    }
    else{
      this.title = "Modificar Proveedor";
    }

  }

  submitProveedor(form: NgForm){
    if(form.valid){
      
      this.proveedoresService.saveProvider(this.provider);
      this.msg = "Proveedor guardado correctamente";
    }
  }
  resetForm(form: NgForm){
    form.reset();
  }
}
