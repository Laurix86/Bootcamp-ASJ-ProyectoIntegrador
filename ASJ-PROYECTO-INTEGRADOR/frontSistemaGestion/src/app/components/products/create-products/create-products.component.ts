import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsModel } from 'src/app/models/productsModel';
import { ProductsService } from 'src/app/services/products.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {
  constructor(public productosService: ProductsService, public providerSercie:ProveedoresService,
    private activeRoute:ActivatedRoute, private router:Router){}

  public product: ProductsModel ={
    id: -1,
    sku: '',
    categoria: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    proveedor: '',
    activo: true
  }

  public categoriesProv: string[]= this.providerSercie.getRubros();
  public listaProvByCategory: string[]=[];

  msg: string= "";
  title: string = "";
  indexProd: any;

  

  ngOnInit():void{
    this.indexProd = this.activeRoute.snapshot.paramMap.get('idProducto') || -1;
    if(this.indexProd == -1){
      this.title = "Guardar Producto Nuevo";
    }else{
      this.title = "Modificar Producto";
      this.fillForm(this.indexProd);
    }
  }


  submitProducto(form: NgForm){
    if(!form.valid){
      return
    }else if(this.indexProd == -1){
      this.productosService.saveProduct(this.product, -1);
      this.msg = "Producto guardado correctamente";
      this.router.navigate(['/productos']);
    }else if(this.indexProd>= 0){
      this.productosService.saveProduct(this.product, this.indexProd);
      this.msg = "Producto guardado correctamente";
      this.router.navigate(['/productos']);
    }

  }

  resetForm(form: NgForm){
    form.reset();
  }

  fillForm(index: number){
    this.product = this.productosService.getAllProducts()[index];
  }

  getCat(value:string){
    console.log(value)
    const i = parseInt(value)
    this.product.categoria= value;
    this.listaProvByCategory = this.providerSercie.getProvidersByRubro(value)
  }
  getProv(value:string){
    
    this.product.proveedor = value;
  }
}
