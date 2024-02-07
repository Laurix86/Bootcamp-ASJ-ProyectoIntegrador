package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.exceptions.ErrorHandler;
import com.bootcamp.backsistemagestion.models.ImagesModel;
import com.bootcamp.backsistemagestion.models.ProductsModel;
import com.bootcamp.backsistemagestion.services.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/products")
public class ProductController {

	
	@Autowired
	ProductService productService;
	
	@GetMapping()
	public ResponseEntity<List<ProductsModel>> getProducts(){
		return ResponseEntity.ok(productService.getAllProducts());
	}
	
	@GetMapping("/{id}")
	public ProductsModel getProductById(@PathVariable int id) {
		return productService.getProductById(id);
	}
	
	@GetMapping("/activeProducts")
	public ResponseEntity<List<ProductsModel>> getActiveProducts() throws Exception{
		return ResponseEntity.ok(productService.getActiveProducts());
	}
	
	@GetMapping("/products-by-category/{id}")
	public List<ProductsModel> getProductsByCategory(int id){
		return productService.getProductsByCategory(id);
	}
	
	@GetMapping("/products-by-provider/{id}")
	public List<ProductsModel> getProductsByProvider(@PathVariable int id){
		return productService.getProductsByProvider(id);
	}
	
	@PostMapping()
	public ResponseEntity<Object> saveProduct(@Valid @RequestBody ProductsModel product, BindingResult bindingResult ) {
		
		//pregunta si hay errores(del tipo modelo)
		if(bindingResult.hasErrors()) {
			
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			System.out.println("Errores: " + errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<>(productService.setProduct(product), HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	// Edit provider
	@PutMapping("/{id}")
	public ResponseEntity<Object> editProvider(@PathVariable int id, @Valid @RequestBody ProductsModel product, BindingResult bindingResult) {
		
		System.out.println("Prod controller " + product);
		
		if(bindingResult.hasErrors()) {
				
			Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
			
			System.out.println(errors);
			
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		
		try {
			return new ResponseEntity<>(productService.editProduct(id, product), HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>("Error", HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	// borrado lógico
	@PutMapping("/deleted/{id}")
	public ResponseEntity<String> deleteProvider(@PathVariable int id) {
		
		return ResponseEntity.ok(productService.deleteProduct(id));
	}
	
	//borrado físico
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteProviderById(@PathVariable int id) {
		return ResponseEntity.ok(productService.eraseProduct(id));
	}
	
}
