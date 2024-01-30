package com.bootcamp.backsistemagestion.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.backsistemagestion.models.CategoriesModel;
import com.bootcamp.backsistemagestion.models.TaxCategoriesModel;
import com.bootcamp.backsistemagestion.services.TaxCategoryService;

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
}
