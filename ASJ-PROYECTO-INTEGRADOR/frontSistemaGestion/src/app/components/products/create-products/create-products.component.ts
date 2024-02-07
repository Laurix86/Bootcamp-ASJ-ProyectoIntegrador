import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesModel, ProductsModel } from 'src/app/models/productsModel';
import { ProvidersModel } from 'src/app/models/providersModel';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  constructor(private fb: FormBuilder, public productsService: ProductsService, public providerService:ProveedoresService,
    private activeRoute:ActivatedRoute, public categoriesService: CategoriesService, private router:Router){

      this.productsForm = this.fb.group({
        products_id:[-1],
        products_sku:['',[Validators.required, Validators.minLength(3)]],
        categories_id: ['', [Validators.required]],
        providers_id: ['', [Validators.required]],
        products_denomination:['',[Validators.required, Validators.minLength(3)]],
        image: ['', [Validators.required]],
        products_stock:['',[Validators.required, Validators.minLength(1)]],
        products_description:['',[Validators.minLength(3)]],
        products_price:['',[Validators.required, Validators.minLength(1)]],
        
      });
    }

    productsForm: FormGroup;
    product!: ProductsModel;
    categoriesLista: CategoriesModel[]=[];
    providerLista: ProvidersModel[]=[];

 // public categoriesProv: any= this.providerService.getRubros();
 // public listaProvByCategory: string[]=[];

  msg: string= "";
  title: string = "";
  indexProd: any;

 
  

  ngOnInit():void{
    this.getActiveCategories();
    this.getActiveProviders();

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
      
      this.product = this.productsForm.value;
      this.product.categories_id = {
        categories_id: this.productsForm.get('categories_id')?.value,
        categories_denominations: '',
      };
      this.product.providers_id = {
        providers_id: this.productsForm.get('providers_id')?.value,
        providers_denomination:'',
      }

      this.product.is_deleted = false;
     // this.product.products_id = null;
      this.productsService.saveProduct(this.product, -1).subscribe();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      
      console.log("Prod ",this.product)

    }else if(this.indexProd>= 0){

      this.product = this.productsForm.value;
      this.product.categories_id = {
        categories_id: this.productsForm.get('categories_id')?.value,
        categories_denominations: '',
      };
      this.product.providers_id = {
        providers_id: this.productsForm.get('providers_id')?.value,
        providers_denomination:'',
      }
      this.productsService.saveProduct(this.product, this.indexProd).subscribe();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Guardado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      
      console.log("Prod modif ",this.product)
    }
    this.router.navigate(['/productos']);
  }

    resetForm(): void{
    this.productsForm.reset();
  }

  fillForm(index: number){
    this.productsService.getProductById(index).subscribe(
      (data)=> {
        this.product = data;

        this.productsForm.patchValue({
        products_id: this.product.products_id,
        products_sku:this.product.products_sku,
        categories_id: this.product.categories_id.categories_id,
        providers_id: this.product.providers_id.providers_id,
        products_denomination:this.product.products_denomination,
        image: this.product.image,
        products_stock:this.product.products_stock,
        products_description:this.product.products_description,
        products_price:this.product.products_price,
        })


      }
    )
    

  }

  getActiveCategories(){
    this.categoriesService.getActiveCategories().subscribe(
      (data)=> this.categoriesLista = data
    )
   // this.listaProvByCategory = this.providerService.getProvidersByRubro(value)
  }
  getActiveProviders(){
    this.providerService.getActiveProviders().subscribe(
      (data)=> this.providerLista = data
    )
    
  }
}
