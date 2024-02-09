import { Pipe, PipeTransform } from '@angular/core';
import { ProductsModel } from 'src/app/models/productsModel';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(productsList: ProductsModel[], searchTerm: string): ProductsModel[] {
    if (!productsList || !searchTerm) {
      return productsList;
    }
    searchTerm = searchTerm.toLowerCase();
    return productsList.filter(product => {
      return product.products_denomination.toLowerCase().includes(searchTerm) || product.products_description.toLowerCase().includes(searchTerm);
    });
  }

}
