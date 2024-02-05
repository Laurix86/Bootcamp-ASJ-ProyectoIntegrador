package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.exceptions.ErrorHandler;
import com.bootcamp.backsistemagestion.models.CategoriesModel;
import com.bootcamp.backsistemagestion.models.JurisdictionsModel;
import com.bootcamp.backsistemagestion.models.TaxCategoriesModel;
import com.bootcamp.backsistemagestion.services.TaxCategoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/taxcategories")
public class TaxCategoryController {

	@Autowired
	TaxCategoryService taxCategoryService;
	
	@GetMapping()
	public ResponseEntity<List<TaxCategoriesModel>> getCategories() {
		return ResponseEntity.ok(taxCategoryService.getAllTaxCategories());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TaxCategoriesModel>> getCategoryById(@PathVariable int id) {
		return ResponseEntity.ok(taxCategoryService.getTaxCategoryById(id));
	}
	
	@PostMapping()
	public ResponseEntity<Object> setTaxCategory(@Valid @RequestBody TaxCategoriesModel TaxCategory, BindingResult bindingResult ) {
		System.out.println("llegué al post");
	//		//pregunta si hay errores(del tipo modelo)
			if(bindingResult.hasErrors()) {
				
				Map<String, String> errors = new ErrorHandler().validacionInputs(bindingResult);
				
				
				
				System.out.println(errors);
				
				return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
			}
			
			
			return new ResponseEntity<>(taxCategoryService.setTaxCategory(TaxCategory), HttpStatus.OK);
		}
}
