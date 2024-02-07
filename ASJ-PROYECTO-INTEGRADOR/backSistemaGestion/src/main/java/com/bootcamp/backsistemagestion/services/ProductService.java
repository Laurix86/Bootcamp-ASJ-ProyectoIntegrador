package com.bootcamp.backsistemagestion.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.backsistemagestion.exceptions.ResourceNotFoundException;
import com.bootcamp.backsistemagestion.models.CategoriesModel;
import com.bootcamp.backsistemagestion.models.ImagesModel;
import com.bootcamp.backsistemagestion.models.ProductsModel;
import com.bootcamp.backsistemagestion.models.ProvidersModel;
import com.bootcamp.backsistemagestion.repositories.CategoriesRepository;
import com.bootcamp.backsistemagestion.repositories.ImagesRepository;
import com.bootcamp.backsistemagestion.repositories.ProductsRepository;
import com.bootcamp.backsistemagestion.repositories.ProvidersRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductsRepository productRepository;
	
	ProvidersRepository providerRepository;
	
	CategoriesRepository categoryRepository;
	
	ImagesRepository imageRepository;
	
	public List<ProductsModel> getAllProducts(){
		return productRepository.findAll();
	}

	public ProductsModel getProductById(int id) {
		ProductsModel product = productRepository.findById(id).orElseThrow(
				() -> {
					throw new ResourceNotFoundException("No se halló el producto solicitado");
				});

		return product;
	}
	
	public List<ProductsModel> getProductsByCategory(int categoryId){
		return productRepository.getProductsByCategory(categoryId);
	}
	
	public List<ProductsModel> getProductsByProvider(int providerId){
		return productRepository.getProductsByProvider(providerId);
	}
	
	public List<ProductsModel> getActiveProducts() throws Exception{
		
		try {
			List<ProductsModel> activeProducts = productRepository.getActiveProducts();
			return activeProducts;
		} catch (Exception e) {
			throw new ResourceNotFoundException("No se hallaron productos activos.");
		}
		
	}
	
	public String setProduct(ProductsModel product) {
		
		try {
			productRepository.save(product);
			return "OK";
		} catch (Exception e) {
			return "Se produjo un error: " + e.getMessage();
		}
		
		
	}
	
	public String editProduct(int id, ProductsModel product) {
		try {
			Optional<ProductsModel> prod = productRepository.findById(id);
			Optional<ProvidersModel> p = providerRepository.findById(product.getProviders_id().getProviders_id());
			Optional<CategoriesModel> c = categoryRepository.findById(product.getCategories_id().getCategories_id());
			ProvidersModel auxProv = new ProvidersModel();
			CategoriesModel auxCat = new CategoriesModel();
			
			if(p.isPresent()) {
				auxProv = p.get();
			}
			
			if(c.isPresent()) {
				auxCat = c.get();
			}
			
					
			if(prod.isPresent()) {
				ProductsModel auxProd = prod.get();
				auxProd.setProducts_denomination(product.getProducts_denomination());
				auxProd.setProducts_description(product.getProducts_description());
				auxProd.setProducts_sku(product.getProducts_sku());
				auxProd.setProducts_stock(product.getProducts_stock());
				auxProd.setProducts_price(product.getProducts_price());
				auxProd.setProviders_id(auxProv);
				auxProd.setCategories_id(auxCat);
				auxProd.setIs_deleted(product.getIs_deleted());
				
				productRepository.save(auxProd);
				//imageRepository.save(image);
				
				
			}else {
				throw new Exception("Error al editar proveedor");
			}
		} catch (Exception e) {
			return e.getMessage();
		}
		return null;
	}
	
	//Borrado lógico 
		public String deleteProduct(int id) {
			ProductsModel p = productRepository.findById(id).get();
			if(p != null) {
				p.setIs_deleted(true);
				return "OK";
			}
			return "Error";
		}


		//Borrado físico --- por el momento sin uso
		public String eraseProduct(int id) {
			productRepository.deleteById(id);
			return "OK";
		}
}
