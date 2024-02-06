import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesModel, ProductsModel } from 'src/app/models/productsModel';
import { ProvidersModel } from 'src/app/models/providersModel';
import { ProductsService } from 'src/app/services/products.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  constructor(private fb: FormBuilder, public productosService: ProductsService, public providerService:ProveedoresService,
    private activeRoute:ActivatedRoute, private router:Router){

      this.productsForm = this.fb.group({
        products_sku:['',[Validators.required, Validators.minLength(3)]],
        categories_id: ['', [Validators.required]],
        providers_id: ['', [Validators.required]],
        products_denomination:['',[Validators.required, Validators.minLength(3)]],
        images_id: ['', [Validators.required]],
        products_stock:['',[Validators.required, Validators.minLength(1)]],
        products_description:['',[Validators.required, Validators.minLength(3)]],
        products_price:['',[Validators.required, Validators.minLength(1)]],
        
      });
    }

    productsForm: FormGroup;
    product!: ProductsModel;
    categoriaLista: CategoriesModel[]=[];
    providerLista: ProvidersModel[]=[];

  public categoriesProv: any= this.providerService.getRubros();
  public listaProvByCategory: string[]=[];

  msg: string= "";
  title: string = "";
  indexProd: any;

 
  

  ngOnInit():void{
    this.indexProd = this.activeRoute.snapshot.paramMap.get('idProducto') || -1;
    if(this.indexProd == -1){
      this.title = "Producto Nuevo";
    }else{
      this.title = "Producto Existente";
      this.fillForm(this.indexProd);
    }
  }

  
  submitProduct():void{
    if(this.productsForm.invalid){
      Swal.fire("Revisar el formulario y completar todos los campos requeridos.");
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

    resetForm(): void{
    this.productsForm.reset();
  }

  fillForm(index: number){
    this.product = this.productosService.getAllProducts()[index];
  }

  getCat(value:string){
    console.log(value)
    const i = parseInt(value)
    this.product.categoria= value;
   // this.listaProvByCategory = this.providerService.getProvidersByRubro(value)
  }
  getProv(value:string){
    
    this.product.proveedor = value;
  }
}
