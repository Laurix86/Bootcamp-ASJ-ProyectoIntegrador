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
import com.bootcamp.backsistemagestion.services.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryController {

	@Autowired
	CategoryService categoryService;
	
	@GetMapping()
	public ResponseEntity<List<CategoriesModel>> getCategories() {
		return ResponseEntity.ok(categoryService.getAllCategories());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<CategoriesModel>> getCategoryById(@PathVariable int id) {
		return ResponseEntity.ok(categoryService.getCategoriesById(id));
	}
	
	@GetMapping("/active-categories")
	public List<CategoriesModel> getActiveCategories(){
		return categoryService.getActiveCategories();
	}
}
